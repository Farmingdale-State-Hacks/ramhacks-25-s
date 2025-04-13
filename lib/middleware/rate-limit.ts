import { createMiddleware } from "@tanstack/react-start";
import {
  getWebRequest,
  setResponseHeaders,
  setResponseStatus,
} from "@tanstack/react-start/server";

const rateLimits = new Map<string, { count: number; resetTime: number }>();

export const rateLimiter = createMiddleware().server(async ({ next }) => {
  try {
    const request = getWebRequest();
    if (!request) return next();

    const ip =
      request.headers.get("CF-Connecting-IP") ||
      request.headers.get("X-Forwarded-For")?.split(",")[0].trim() ||
      "unknown-ip";

    const RATE_LIMIT = 100;
    const WINDOW_MS = 60_000; // 1 minute

    const now = Date.now();

    const entry = rateLimits.get(ip) || { count: 0, resetTime: now + WINDOW_MS };

    if (now > entry.resetTime) {
      entry.count = 0;
      entry.resetTime = now + WINDOW_MS;
    }

    if (entry.count >= RATE_LIMIT) {
      const retryAfter = Math.ceil((entry.resetTime - now) / 1000);

      setResponseStatus(429);
      setResponseHeaders({
        "Retry-After": retryAfter.toString(),
        "Content-Type": "application/json",
      });

      return next({
        sendContext: {
          error: "Too Many Requests",
          message: `Rate limit exceeded. Try again in ${retryAfter} seconds.`,
          retryAfter,
        }
      });
    }

    entry.count++;
    rateLimits.set(ip, entry);

    setResponseHeaders({
      "X-RateLimit-Limit": RATE_LIMIT.toString(),
      "X-RateLimit-Remaining": (RATE_LIMIT - entry.count).toString(),
      "X-RateLimit-Reset": Math.floor(entry.resetTime / 1000).toString(),
    });

    return next();

  } catch (error) {
    console.error("Rate limiting error:", error);
    setResponseStatus(500);
    return next({
      sendContext: {
        error: "Internal Server Error",
        message: "An unexpected error occurred",
      }
    });
  }
});

export default rateLimiter;

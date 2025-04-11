import { createMiddleware } from "@tanstack/react-start";
import { rateLimit } from "@tanstack/pacer";
import {
  getWebRequest,
  setResponseHeaders,
  setResponseStatus,
} from "@tanstack/react-start/server";
import { Logger } from "~/lib/utils";

export const rateLimiter = createMiddleware().server(async ({ next }) => {
  try {
    const request = getWebRequest();
    if (!request) return next();

    // Create rate-limited handler with proper typing
    const limitedHandler = rateLimit(
      async (userId: string) => {
        // Add rate limit headers before proceeding
        const remaining = ;
        const reset = limitedHandler.getResetTime(userId);

        setResponseHeaders({
          "X-RateLimit-Limit": "100",
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        });

        return next();
      },
      {
        limit: 100,
        window: 60_000,
        onReject: ({ msUntilNextWindow }) => {
          setResponseStatus(429);
          setResponseHeaders({
            "Retry-After": Math.ceil(msUntilNextWindow / 1000).toString(),
          });
          return next({ sendContext: { error: "Too many requests" } });
        }
      }
    );

    const userId = request.headers.get("x-user-id");
    if (!userId) {
      setResponseStatus(401);
      return next({ sendContext: { error: "User ID is required" } });
    }

    // Execute the rate-limited handler
    return await limitedHandler(userId);

  } catch (error) {
    console.error("Rate limiting error:", error);
    setResponseStatus(500);
    return next({ sendContext: { error: "Internal server error" } });
  }
});

export default rateLimiter;

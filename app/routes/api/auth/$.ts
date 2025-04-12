import { createAPIFileRoute } from "@tanstack/react-start/api";
import { getWebRequest } from "@tanstack/react-start/server";
import { auth } from "~/lib/server/auth";

export const APIRoute = createAPIFileRoute("/api/auth/$")({
  GET: ({ request }) => {
    return auth.handler(request);
  },
  POST: ({ request }) => {
    return auth.handler(request);
  },
  HEAD: async () => {
    try {
      const request = getWebRequest();
      if (!request) {
        throw new Error("No web request available");
      }
      const { headers } = request;

      return Response.json({
        headers,
        status: 200,
      });
    } catch (error) {
      throw new Error(`${error instanceof Error ? error.message : JSON.stringify(error, null, 2)}`);
    }
  },
  OPTIONS: () => {
    return new Response("GET, OPTIONS, HEAD", {
      status: 200,
    });
  },
});

import { createAPIFileRoute } from "@tanstack/react-start/api";
import { getWebRequest } from "@tanstack/react-start/server";

export const APIRoute = createAPIFileRoute("/api/health/health")({
  GET: () => {
    return new Response("ok", {
      status: 200,
    });
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

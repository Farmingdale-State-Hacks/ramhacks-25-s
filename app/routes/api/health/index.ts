import { createAPIFileRoute } from "@tanstack/start-api-routes";
import { getRequest } from "@tanstack/react-start/server";

export const APIRoute = createAPIFileRoute("/api/health")({
  GET: () => {
    return new Response(JSON.stringify({ status: "healthy" }), {
      headers: { "content-type": "application/json" },
    });
  },
  HEAD: async () => {
    try {
      const request = getRequest();
      if (!request) {
        throw new Error("No web request available");
      }
      const { headers } = request;

      return Response.json({
        headers,
        status: 200,
      });
    } catch (error) {
      throw new Error(`${error instanceof Error ? error.message : JSON.stringify(error, null, 2)}`, { cause: error });
    }
  },
  OPTIONS: () => {
    return new Response("GET, OPTIONS, HEAD", {
      status: 200,
    });
  },
});

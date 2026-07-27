export default async function apiHandler() {
  return new Response(JSON.stringify({ status: "healthy" }), {
    headers: { "content-type": "application/json" },
  });
}

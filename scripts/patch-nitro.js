import fs from "node:fs";

const p = ".output/server/chunks/nitro/nitro.mjs";
if (fs.existsSync(p)) {
  let code = fs.readFileSync(p, "utf8");
  code = code.replace(
    "const val = await layer.handler(event);",
    'if (typeof layer.handler !== "function") continue; const val = await layer.handler(event);'
  );
  code = code.replace(
    /import\s*\{[^}]*eventHandler[^}]*\}\s*from\s*['"]@tanstack\/start-server-core['"];?/g,
    "import { eventHandler as eventHandler$1, getResponseStatus } from 'h3'; import { createStartHandler } from '@tanstack/start-server-core'; const getEvent = (event) => event || {}; const toWebRequest = (event) => { if (!event) return new Request('http://127.0.0.1:3000/'); if (event instanceof Request) return event; if (event.request instanceof Request) return event.request; const urlPath = event.url || event.req?.url || '/'; const fullUrl = urlPath.startsWith('http') ? urlPath : `http://127.0.0.1:3000${urlPath.startsWith('/') ? '' : '/'}${urlPath}`; const method = event.method || event.req?.method || 'GET'; const headers = event.headers || event.req?.headers || {}; return new Request(fullUrl, { method, headers }); };"
  );
  code = code.replace(
    /import\s*\{[^}]*startSerializer[^}]*\}\s*from\s*['"]@tanstack\/start-client-core['"];?/g,
    "const startSerializer = { stringify: JSON.stringify, parse: JSON.parse };"
  );
  fs.writeFileSync(p, code);
  console.log("Successfully patched nitro.mjs");
}

const nodeModulesH3Path = ".output/server/node_modules/h3-v2/dist/h3-Bz4OPZv_.mjs";
if (fs.existsSync(nodeModulesH3Path)) {
  let h3Code = fs.readFileSync(nodeModulesH3Path, "utf8");
  h3Code = h3Code.replace(
    "const url = _url && _url instanceof URL ? _url : new FastURL(req.url);",
    'const url = _url && _url instanceof URL ? _url : new FastURL(req?.url || "http://127.0.0.1:3000/");'
  );
  fs.writeFileSync(nodeModulesH3Path, h3Code);
  console.log("Successfully patched h3-v2 FastURL in .output");
}

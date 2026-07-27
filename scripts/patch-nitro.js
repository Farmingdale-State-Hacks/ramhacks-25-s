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

const ssrServerPath = ".output/server/node_modules/@tanstack/router-core/dist/esm/ssr/ssr-server.js";
if (fs.existsSync(ssrServerPath)) {
  let ssrCode = fs.readFileSync(ssrServerPath, "utf8");
  ssrCode = ssrCode.replace(
    "const rawUrl = new URL(url, base);",
    'const rawUrl = new URL(url || "http://127.0.0.1:3000/", base || "http://127.0.0.1:3000/");'
  );
  fs.writeFileSync(ssrServerPath, ssrCode);
  console.log("Successfully patched ssr-server.js getNormalizedURL in .output");
}

const createStartHandlerPath = ".output/server/node_modules/@tanstack/start-server-core/dist/esm/createStartHandler.js";
if (fs.existsSync(createStartHandlerPath)) {
  let cshCode = fs.readFileSync(createStartHandlerPath, "utf8");
  cshCode = cshCode.replace(
    "const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);",
    'const { url, handledProtocolRelativeURL } = getNormalizedURL(request?.url || "http://127.0.0.1:3000/");'
  );
  fs.writeFileSync(createStartHandlerPath, cshCode);
  console.log("Successfully patched createStartHandler.js in .output");
}

const patchServerCorePackageJson = (pkgPath) => {
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
      pkg.imports = pkg.imports || {};
      pkg.imports["#tanstack-router-entry"] = "./dist/esm/router-entry.js";
      pkg.imports["#tanstack-start-entry"] = "./dist/esm/start-entry.js";
      pkg.imports["#tanstack-start-manifest:v"] = "./dist/esm/router-manifest.js";
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      console.log(`Successfully patched ${pkgPath}`);
    } catch (e) {
      console.error(`Failed patching ${pkgPath}:`, e);
    }
  }
};

patchServerCorePackageJson(".output/server/node_modules/@tanstack/start-server-core/package.json");
patchServerCorePackageJson("node_modules/@tanstack/start-server-core/package.json");

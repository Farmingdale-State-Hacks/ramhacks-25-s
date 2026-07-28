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
    "import { eventHandler as eventHandler$1, getResponseStatus } from 'h3'; import { createStartHandler } from '@tanstack/start-server-core'; const getEvent = (event) => event || {}; const toWebRequest = (event) => { if (!event) return new Request('http://127.0.0.1:3000/'); if (event instanceof Request) return event; if (event.request instanceof Request) return event.request; let urlPath = '/'; if (typeof event.path === 'string') urlPath = event.path; else if (typeof event.req?.url === 'string') urlPath = event.req.url; else if (typeof event.node?.req?.url === 'string') urlPath = event.node.req.url; else if (typeof event.url === 'string') urlPath = event.url; else if (event.url?.href) urlPath = event.url.href; const fullUrl = urlPath.startsWith('http') ? urlPath : `http://127.0.0.1:3000${urlPath.startsWith('/') ? '' : '/'}${urlPath}`; const method = event.method || event.req?.method || event.node?.req?.method || 'GET'; const rawHeaders = event.headers || event.req?.headers || event.node?.req?.headers || {}; const headers = new Headers(); if (rawHeaders) { if (typeof rawHeaders.entries === 'function') { for (const [k, v] of rawHeaders.entries()) { if (v !== undefined && v !== null) headers.set(k, String(v)); } } else { for (const k of Object.keys(rawHeaders)) { const v = rawHeaders[k]; if (v !== undefined && v !== null) headers.set(k, String(v)); } } } return new Request(fullUrl, { method, headers }); };"
  );
  code = code.replace(
    /import\s*\{[^}]*startSerializer[^}]*\}\s*from\s*['"]@tanstack\/start-client-core['"];?/g,
    "const startSerializer = { stringify: JSON.stringify, parse: JSON.parse };"
  );
  code = code.replace(
    /var J = defineHandlerCallback\(/,
    "var J = globalThis.__tsr_render_cb = defineHandlerCallback("
  );
  code = code.replace(
    "const Se = createStartHandler({ createRouter: me })(J);",
    "globalThis.__tsr_createRouter = me; const Se = createStartHandler({ createRouter: me })(J);"
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

const renderRouterToStreamPath = ".output/server/node_modules/@tanstack/react-router/dist/esm/ssr/renderRouterToStream.js";
if (fs.existsSync(renderRouterToStreamPath)) {
  let rrtsCode = fs.readFileSync(renderRouterToStreamPath, "utf8");
  rrtsCode = rrtsCode.replace(
    /router\.stores\.statusCode\.get\(\)/g,
    "(router?.stores?.statusCode?.get() || router?.state?.statusCode || 200)"
  );
  rrtsCode = rrtsCode.replace(
    /if \(isbot\(request\.headers\.get\("User-Agent"\)\)\) await waitForReadyOrAbort\(stream\.allReady, request\.signal\);/g,
    '// Bypassed bot blocking for instant SSR streaming'
  );
  rrtsCode = rrtsCode.replace(
    /\.\.\.isbot\(request\.headers\.get\("User-Agent"\)\) \? \{ onAllReady\(\) \{[\s\S]*?\} \} : \{ onShellReady\(\) \{[\s\S]*?\} \}/g,
    'onShellReady() { pipeable.pipe(reactAppPassthrough); }'
  );
  rrtsCode = rrtsCode.replace(
    /request\.headers\.get\("User-Agent"\)/g,
    '(typeof request?.headers?.get === "function" ? request.headers.get("User-Agent") : "")'
  );
  fs.writeFileSync(renderRouterToStreamPath, rrtsCode);
  console.log("Successfully patched renderRouterToStream.js in .output");
}

const routerManifestPath = ".output/server/node_modules/@tanstack/start-server-core/dist/esm/router-manifest.js";
if (fs.existsSync(routerManifestPath)) {
  let rmCode = fs.readFileSync(routerManifestPath, "utf8");
  rmCode = rmCode.replace(
    /import\s*\(\s*["']tanstack-start-manifest:[^"']+["']\s*\)/g,
    'Promise.resolve({ tsrStartManifest: () => ({ routes: {} }) })'
  );
  fs.writeFileSync(routerManifestPath, rmCode);
  console.log("Successfully patched router-manifest.js in .output");
}

const createStartHandlerPath = ".output/server/node_modules/@tanstack/start-server-core/dist/esm/createStartHandler.js";
if (fs.existsSync(createStartHandlerPath)) {
  let cshCode = fs.readFileSync(createStartHandlerPath, "utf8");
  cshCode = cshCode.replace(
    "await cb({",
    "await (typeof cb === 'function' ? cb : globalThis.__tsr_render_cb)({"
  );
  cshCode = cshCode.replace(
    'request.headers.get("Accept")',
    '(typeof request?.headers?.get === "function" ? request.headers.get("Accept") : (request?.headers?.accept || request?.headers?.Accept || "*/*"))'
  );
  cshCode = cshCode.replace(
    "opts.router.stores.matches.get()",
    "(opts.router.stores?.matches?.get() || opts.router.state?.matches || [])"
  );
  cshCode = cshCode.replace(
    "routerInstance.stores.matches.get()",
    "(routerInstance.stores?.matches?.get() || routerInstance.state?.matches || [])"
  );
  cshCode = cshCode.replace(
    "const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);",
    'const { url, handledProtocolRelativeURL } = getNormalizedURL(request?.url || "http://127.0.0.1:3000/");'
  );
  cshCode = cshCode.replace(
    "await routerInstance.load();",
    "if (routerInstance?.history?.push) { try { routerInstance.history.push(url.pathname + url.search); } catch (e) {} } await routerInstance.load();"
  );
  cshCode = cshCode.replace(
    /async function loadEntries\(\) \{[\s\S]*?\n\}/,
    `async function loadEntries() {
	const defaultRouterEntry = { getRouter: () => (globalThis.__tsr_createRouter ? globalThis.__tsr_createRouter() : globalThis.__tsr_router) };
	let routerEntry = defaultRouterEntry, startEntry = {}, pluginAdapters = { hasPluginAdapters: false, pluginSerializationAdapters: [] };
	try { routerEntry = await import("#tanstack-router-entry"); } catch (e) {}
	try { startEntry = await import("#tanstack-start-entry"); } catch (e) {}
	try { pluginAdapters = await import("#tanstack-start-plugin-adapters"); } catch (e) {}
	return {
		routerEntry: (routerEntry && typeof routerEntry.getRouter === 'function') ? routerEntry : defaultRouterEntry,
		startEntry: startEntry || {},
		pluginAdapters: pluginAdapters || { hasPluginAdapters: false, pluginSerializationAdapters: [] }
	};
}`
  );
  cshCode = cshCode.replace(
    "const routerFn = unwrapped?.getRouter || unwrapped?.createRouter || (typeof unwrapped === 'function' ? unwrapped : null);",
    "const routerFn = unwrapped?.getRouter || unwrapped?.createRouter || (typeof unwrapped === 'function' ? unwrapped : null) || handlerOptions?.createRouter || globalThis.__tsr_createRouter; if (!routerFn && typeof globalThis.__tsr_createRouter === 'function') router = await globalThis.__tsr_createRouter();"
  );
  fs.writeFileSync(createStartHandlerPath, cshCode);
  console.log("Successfully patched createStartHandler.js in .output");
}

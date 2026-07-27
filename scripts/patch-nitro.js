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
    "import { eventHandler as eventHandler$1, getResponseStatus } from 'h3'; import { createStartHandler } from '@tanstack/start-server-core'; const getEvent = (event) => event || {}; const toWebRequest = (event) => event ? (event.request || event) : new Request('http://localhost:3000');"
  );
  code = code.replace(
    /import\s*\{[^}]*startSerializer[^}]*\}\s*from\s*['"]@tanstack\/start-client-core['"];?/g,
    "const startSerializer = { stringify: JSON.stringify, parse: JSON.parse };"
  );
  fs.writeFileSync(p, code);
  console.log("Successfully patched nitro.mjs");
}

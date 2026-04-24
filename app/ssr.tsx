/// <reference types="vinxi/types/server" />
import { getRouterManifest } from "@tanstack/react-start/router-manifest";
import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

import { createRouter } from "./router";

// Server-side Sentry temporarily stripped: @sentry/tanstackstart-react@10.50
// removed `wrapStreamHandlerWithSentry` (renamed/restructured into
// `wrapFetchWithSentry` + `wrapMiddlewaresWithSentry`). Re-introduced
// after the migration off vinxi (#133) using the new API.
export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);

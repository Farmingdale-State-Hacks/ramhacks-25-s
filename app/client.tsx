/// <reference types="vinxi/types/client" />
import { StartClient } from "@tanstack/react-start-client";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { createRouter } from "./router";

// Client-side Sentry temporarily stripped: @sentry/react@10.x pulls
// @tanstack/router-core/ssr/client via its tanstackrouter integration
// module, a subpath that only exists in modern router-core and isn't
// available in the pinned 1.120.19. Re-added after the migration off
// vinxi (#133). Server-side sentryTanstackStart in app.config.ts is
// unaffected.
const router = createRouter();

const StartClientComponent = StartClient as unknown as React.ComponentType<{ router: typeof router }>;

hydrateRoot(
  document,
  <StrictMode>
    <StartClientComponent router={router} />
  </StrictMode>,
);

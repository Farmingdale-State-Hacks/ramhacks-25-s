import {
  createMiddleware,
  registerGlobalMiddleware,
} from "@tanstack/react-start";
import * as Sentry from "@sentry/tanstackstart-react";
// import { authMiddleware } from "~/lib/middleware";

registerGlobalMiddleware({
  middleware: [
    createMiddleware().server(Sentry.sentryGlobalServerMiddlewareHandler()),
    // authMiddleware
  ],
});

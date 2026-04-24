// Server-side Sentry middleware temporarily stripped:
// `@sentry/tanstackstart-react@10.50` removed
// `sentryGlobalServerMiddlewareHandler` (it's now surfaced via
// `wrapMiddlewaresWithSentry` in the new API, which needs the new
// TanStack Start architecture). Calling the old symbol crashes
// `vinxi start` at module eval:
//   [error] L.sentryGlobalServerMiddlewareHandler is not a function
// Re-introduce after the migration off vinxi (#133).
export {};

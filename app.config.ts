import { sentryTanstackStart } from "@sentry/tanstackstart-react/vite";
import tailwindcss from "@tailwindcss/vite";
import type { TanStackStartInputConfig } from "@tanstack/react-start/config";
import { defineConfig } from "@tanstack/react-start/config";
import { createRequire } from "node:module";
import { VitePWA } from "vite-plugin-pwa";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  vite: {
    build: {
      sourcemap: "hidden",
      chunkSizeWarningLimit: (1024 * 2) ** 2, // Increased from default 500kb to 1000kb
      rollupOptions: {
        maxParallelFileOps: 20, // Reduced from 300 to 20
      },
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
      // Million Lint is a dev-time profiler. Its package pulls in recast +
      // ast-types whose module-init reads dozens of .d.ts files in parallel,
      // which blows past the GHA runner's hard fd cap (65536) during
      // `vinxi build`. Load it lazily (and only outside CI) so static import
      // side effects never run on the runner.
      ...(process.env.CI
        ? []
        : [
            createRequire(import.meta.url)("@million/lint").default.vite({
              react: "19",
              lite: true,
              filter: {
                include: "**/components/**/*.{tsx,jsx}",
                exclude: "**/node_modules/**/*",
              },
              optimizeDOM: false,
            }),
          ]),
      // VitePWA temporarily disabled: its second rollup pass imports the
      // full @sentry/react module graph, which imports
      // @tanstack/router-core/ssr/client - a subpath that only exists in
      // modern router-core and isn't available in the pinned 1.120.19.
      // Re-enabled once the repo migrates off the old TanStack Start
      // architecture (tracked in #133).
      // VitePWA({ ... }),
      sentryTanstackStart({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        silent: !process.env.CI,
      }),
    ],
    ssr: {
      external: ["@tanstack/react-query", "@tanstack/react-query-devtools"],
    },
    esbuild: {
      drop: ["console", "debugger"], // Drop console statements in production
    },
  },

  // https://react.dev/learn/react-compiler
  // babel-plugin-react-compiler uses recast, which opens ast-types' .d.ts
  // files on every transform. For an app with many route/component files the
  // aggregate FD usage blows past the GHA runner's hard cap (65536) and
  // crashes the build with EMFILE. Skip the compiler plugin in CI; tests
  // don't need the compiled output. Sentry/release builds in CI lose this
  // optimization too, which is acceptable - production ships from Vercel,
  // not from CI artifacts.
  react: process.env.CI
    ? {}
    : {
        babel: {
          plugins: [
            [
              "babel-plugin-react-compiler",
              {
                target: "19",
              },
            ],
          ],
        },
      },

  server: {
    /**
     * @see https://tanstack.com/start/latest/docs/framework/react/hosting#deployment
     *
     * preset: "cloudflare-pages",
     * unenv: cloudflare,
     */
    preset: "vercel",
  },
} satisfies TanStackStartInputConfig);

export default config;

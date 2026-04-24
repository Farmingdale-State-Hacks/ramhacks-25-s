import { sentryTanstackStart } from "@sentry/tanstackstart-react/vite";
import tailwindcss from "@tailwindcss/vite";
import type { TanStackStartInputConfig } from "@tanstack/react-start/config";
import { defineConfig } from "@tanstack/react-start/config";
import { createRequire } from "node:module";
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
      // Million Lint is an opt-in dev-time profiler. Off by default because:
      //  (1) its package pulls in recast + ast-types whose module-init reads
      //      dozens of .d.ts files in parallel, breaking CI with EMFILE;
      //  (2) at 1.0.14 it crashes in dev against the Hono version the pinned
      //      TanStack tree resolves (TypeError: #cachedBody(...).then is not
      //      a function). Enable explicitly with ENABLE_MILLION_LINT=1 when
      //      you want profiling.
      ...(process.env.ENABLE_MILLION_LINT === "1"
        ? [
            createRequire(import.meta.url)("@million/lint").default.vite({
              react: "19",
              lite: true,
              filter: {
                include: "**/components/**/*.{tsx,jsx}",
                exclude: "**/node_modules/**/*",
              },
              optimizeDOM: false,
            }),
          ]
        : []),
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
    // Default to vercel (matches prod). CI test workflows set
    // VINXI_PRESET=node-server so `vinxi start` can serve the output.
    preset: (process.env.VINXI_PRESET ?? "vercel") as "vercel",
  },
} satisfies TanStackStartInputConfig);

export default config;

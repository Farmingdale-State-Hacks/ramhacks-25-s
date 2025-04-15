import MillionLint from "@million/lint";
import { wrapVinxiConfigWithSentry } from "@sentry/tanstackstart-react";
import tailwindcss from "@tailwindcss/vite";
import type { TanStackStartInputConfig } from "@tanstack/react-start/config";
import { defineConfig } from "@tanstack/react-start/config";
import { VitePWA } from "vite-plugin-pwa";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  vite: {
    build: {
      sourcemap: "hidden",
      chunkSizeWarningLimit: (1024 * 2) ** 2, // Increased from default 500kb to 1000kb
      rollupOptions: {
        maxParallelFileOps: 100,
      },
      // rollupOptions: {
      // 		output: {
      // 				manualChunks: {
      // 						vendor: [
      // 								'@tanstack/react-query',
      // 								'@tanstack/react-query-devtools',
      // 						],
      // 						ui: [
      // 								'react',
      // 								'react-dom',
      // 						],
      // 				},
      // 		},
      // },
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
      MillionLint.vite({
        react: "19",
      }),
      VitePWA({
        workbox: {
          cleanupOutdatedCaches: true,
          globPatterns: ["**/*"],
          maximumFileSizeToCacheInBytes: ((1024 * 2) ** 2) //
        },
        registerType: "autoUpdate",
        injectRegister: "auto",
        includeAssets: ["**/*"],
      }),
    ],
    ssr: {
      external: ["@tanstack/react-query", "@tanstack/react-query-devtools"],
    },
  },

  // https://react.dev/learn/react-compiler
  react: {
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

export default wrapVinxiConfigWithSentry(config, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
});

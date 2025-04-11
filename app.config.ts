import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import type { TanStackStartInputConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { wrapVinxiConfigWithSentry } from "@sentry/tanstackstart-react";
import { cloudflare } from 'unenv'

const config = defineConfig({
  vite: {
    build: {
      sourcemap: "hidden",
    },
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
    ssr: {
      external: [
        "@tanstack/react-query",
        "@tanstack/react-query-devtools",
      ],
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
    preset: "cloudflare-pages",
    unenv: cloudflare,
  },
} satisfies TanStackStartInputConfig);

export default wrapVinxiConfigWithSentry(config, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
});

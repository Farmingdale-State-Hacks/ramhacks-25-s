import { wrapCreateRootRouteWithSentry } from "@sentry/tanstackstart-react";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import appCss from "~/lib/styles/app.css?url";
import { seo, Logger, LogLevel } from "~/lib/utils";
import { app } from "~/config";

const logger = new Logger("Root", {
  minLevel: LogLevel.INFO,
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

export const Route = wrapCreateRootRouteWithSentry(
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    beforeLoad: async () => {
      logger.info("Loading root route");
      return {};
    },
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "theme-color",
          content: "#266867",
        },
        {
          name: "color-scheme",
          content: "light dark",
        },
        {
          name: "supported-color-schemes",
          content: "light dark",
        },
        {
          name: "msapplication-TileColor",
          content: "#266867",
        },
        {
          name: "msapplication-TileImage",
          content: `${import.meta.env.VITE_PUBLIC_URL}/windows11/SmallTile.scale-100.png`,
        },
        {
          name: "manifest",
          content: `${import.meta.env.VITE_PUBLIC_URL}/manifest.webmanifest`,
        },
        {
          name: "service-worker",
          content: `${import.meta.env.VITE_PUBLIC_URL}/sw.js`,
        },
        {
          name: "robots",
          content: "index, follow, noodp",
        },
        ...seo({
          title: app.name,
          description: app.description,
          keywords: app.keywords?.join(", "),
          image: app.image,
        })
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "canonical", href: `${import.meta.env.VITE_BASE_URL}` }
      ],
    }),
    component: RootComponent,
  }),
);

function RootComponent() {
  logger.debug("Rendering root component");
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { readonly children: React.ReactNode }) {
  logger.debug("Rendering root document");
  return (
    // suppress since we're updating the "dark" class in a custom script below
    <html suppressHydrationWarning lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>
          {`document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            )`}
        </ScriptOnce>

        {children}

        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Suspense>
          <TanStackRouterDevtools position="bottom-right" />
        </Suspense>

        <Scripts />
      </body>
    </html>
  );
}

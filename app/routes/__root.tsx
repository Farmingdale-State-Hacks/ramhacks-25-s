import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  ScriptOnce,
  Scripts,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { lazy, Suspense } from "react";

import { auth } from "~/lib/server/auth";
import appCss from "~/lib/styles/app.css?url";
import { Logger, LogLevel } from "~/lib/utils";

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

const getUser = createServerFn({ method: "GET" }).handler(async () => {
  logger.info("Fetching user session");
  try {
    const request = getWebRequest();
    if (!request) {
      logger.warn("No web request available");
      return null;
    }

    const { headers } = request;
    const session = await auth.api.getSession({ headers });

    logger.debug("User session retrieved", {
      authenticated: !!session?.user,
      userId: session?.user?.id
    });

    return session?.user || null;
  } catch (error) {
    logger.error("Failed to get user session", { error });
    return null;
  }
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: async () => {
    logger.info("Loading root route");
    const user = await getUser();
    logger.info("User loaded", { authenticated: !!user });
    return { user };
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
        title: "FSHacks",
      },
      {
        name: "description",
        content: "FSHacks is a hackathon for the future of finance.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

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
    <html suppressHydrationWarning>
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

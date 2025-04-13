import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";

import { DefaultCatchBoundary } from "~/lib/components/default-catch-boundary";
import { NotFound } from "~/lib/components/not-found";
import { Logger } from "~/lib/utils/logger";
import { routeTree } from "./routeTree.gen";

const logger = new Logger("QueryClient");

export function createRouter() {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        logger.error(`Query error: ${error}`, query);
      },
      onSuccess: (data, query) => {
        logger.debug(`Query success`, { data, query });
      },
      onSettled: (data, error, query) => {
        logger.debug(`Query settled`, { data, error, query });
      }
    }),
    mutationCache: new MutationCache({
      onError: (error) => {
        logger.error(`Mutation error: ${error}`, { message: error.message, stack: error.stack });
        return Promise.resolve();
      },
      onSuccess: (data, variables, context, mutation) => {
        logger.debug(`Mutation success`, { variables, mutation });
        return Promise.resolve();
      }
    }),
    defaultOptions: {
      queries: {
        staleTime: 100 * 60,
        // gcTime: 0,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retryOnMount: true,
      },
      mutations: {
        throwOnError: false
      }
    },
  });

  return routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      context: { queryClient },
      defaultPreload: "intent",
      defaultErrorComponent: DefaultCatchBoundary,
      defaultNotFoundComponent: NotFound,
      scrollRestoration: true,
    }),
    queryClient,
  );
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

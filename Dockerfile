# base node image
FROM node:22-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Bun is copied from the official pinned image rather than fetched from the
# install endpoint and piped into a shell. Piping a download into a shell runs
# whatever that endpoint happens to serve at build time, with no way to detect
# tampering. Pulling a pinned tag makes the registry verify the image digest
# before anything executes, and lands the binary on the existing PATH so no
# ~/.bashrc edits (which a non-interactive RUN never sources anyway) are
# needed. The digest is what actually guarantees integrity: the tag alone can be
# repointed at new content, whereas a digest mismatch makes the pull fail hard.
# Bump both together, deliberately, in step with bun.lockb.
COPY --from=oven/bun:1.3.14@sha256:e10577f0db68676a7024391c6e5cb4b879ebd17188ab750cf10024a6d700e5c4 /usr/local/bin/bun /usr/local/bin/bun

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

ADD package.json .npmrc ./
RUN bun install --include=dev

# Setup production node_modules
FROM base as production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json .npmrc ./
RUN npm prune --omit=dev

# Build the app
FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN bun run build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["bun", "dev"]
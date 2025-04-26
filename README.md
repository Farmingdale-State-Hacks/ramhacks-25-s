# Project Documentation: RamHacks Website

This document provides a comprehensive overview of the project structure, configuration files, application logic, components, utilities, and development workflows for the RamHacks website.

## 1. Introduction

This project is the official website for RamHacks, a student-run hackathon organization at Farmingdale State College. It's built using the **TanStack Start** framework, leveraging **React 19** (with the React Compiler), **TanStack Router** for routing, and **TanStack Query** for data fetching. The UI is built with **Tailwind CSS v4** and the **shadcn/ui** component library. Data persistence is handled by **Drizzle ORM** with a PostgreSQL database. Authentication likely uses **Better Auth**. The project is containerized using **Docker** and includes extensive tooling for code quality, testing (Cypress and Playwright), and CI/CD via **GitHub Actions**. **Sentry** is integrated for error monitoring.

## 2. Project Structure Overview

```
.
├── .github/             # GitHub specific files (workflows, issue templates)
├── app/                 # Core application logic (TanStack Start)
│   ├── routes/          # File-based routing definitions
│   ├── api/             # API route handlers
│   ├── ...              # Client/Server entry points, router config
├── config/              # Application configuration values
├── cypress/             # Cypress End-to-End testing setup
├── lib/                 # Reusable code: UI components, hooks, utils, styles
│   ├── components/      # React components (UI library & custom)
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global CSS styles
│   └── utils/           # Utility functions
├── public/              # Static assets (images, icons, manifests)
├── .drizzle/            # Drizzle migration output (generated)
├── node_modules/        # Project dependencies (managed by Bun/npm/yarn)
├── .env.example         # Example environment variables
├── Dockerfile           # Instructions to build the Docker image
├── docker-compose.yml   # Docker Compose setup (e.g., for database)
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── app.config.ts        # TanStack Start application configuration (Vite, React)
├── drizzle.config.ts    # Drizzle ORM configuration
└── README.md            # Project overview and setup instructions
```

## 3. Detailed File & Directory Breakdown

### 3.1. Root Directory Files

* `.editorconfig`: Enforces consistent coding styles (indentation, line endings, etc.) across different editors.
  * *Content:* Sets line endings to `lf`, indent style to `space` (2 spaces), UTF-8 charset, trims trailing whitespace, and sets a max line length of 90.
* `.env.example`: Template for environment variables. Copy this to `.env` and fill in actual values for local development.
  * *Content:* Defines `NODE_ENV`, `VITE_BASE_URL`, and Sentry configuration variables (`SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, etc.).
* `.gitattributes`: Defines attributes for paths in Git (e.g., line ending normalization).
  * *Content:* Ensures all text files use `lf` line endings.
* `.gitignore`: Specifies intentionally untracked files that Git should ignore (e.g., `node_modules`, build artifacts, `.env`).
  * *Content:* Ignores dependencies, test coverage, build outputs (`.next`, `dist`, `.vinxi`), local environment files, IDE/editor folders, lock files, etc.
* `.ncurc.js`: Configuration for `npm-check-updates`, used to manage dependency updates.
  * *Content:* Enables auto-upgrading and rejects updates for the `read-pkg` package.
* `.npmignore`: Specifies files that should *not* be included when publishing the package to npm (if applicable). Useful for libraries, less critical for full applications unless parts are published.
* `.npmrc`: Configuration file for npm/Bun/pnpm/Yarn, often used for registry settings or package hoisting rules. (Content not provided, but likely sets package manager behavior).
* `.nvmrc`: Specifies the recommended Node.js version for the project, used by Node Version Manager (nvm).
  * *Content:* Recommends the latest stable `node`.
* `.prettierignore`: Specifies files that Prettier should *not* format.
  * *Content:* Ignores lock files and auto-generated route tree files.
* `.prettierrc`: Configuration file for Prettier, the code formatter.
  * *Content:* Sets tab width (2), enables semicolons, print width (90), uses double quotes, LF line endings, trailing commas, and enables Tailwind CSS and import organization plugins.
* `.yarnrc.yml`: Configuration file for Yarn package manager (alternative to npm/pnpm/bun).
  * *Content:* Specifies `node-modules` linker, meaning dependencies are installed in the standard `node_modules` directory. (Note: Duplicate `yarnrc.yml` exists at root).
* `Dockerfile` / `dockerfile`: Instructions for building a Docker image of the application. Defines the base image, dependencies, build steps, and runtime command.
  * *Content:* Uses a multi-stage build based on `node:22-bullseye-slim`, installs Bun, handles dependencies (`bun install`), builds the app (`bun run build`), and sets up a minimal production image.
* `README.md`: The main documentation file providing an overview, setup instructions, and key information about the project.
  * *Content:* Describes the project (TanStarter fork for RamHacks), lists the tech stack, provides setup steps (clone, install, env, db push, dev), highlights key scripts (`auth`, `db`, `ui`, `format`, `lint`), mentions utilities, and acknowledges sources.
* `app.config.ts`: Configuration file specifically for TanStack Start. Configures Vite, React Compiler, Sentry integration, PWA settings, and server presets.
  * *Content:* Integrates Sentry, adds Vite plugins (`tsConfigPaths`, `tailwindcss`, `MillionLint`, `VitePWA`), configures React Compiler (for React 19), sets sourcemaps, chunk size limits, and specifies the Vercel deployment preset. Includes PWA configuration via `vite-plugin-pwa`.
* `bun.lockb`: The lockfile generated by the Bun package manager, ensuring deterministic installs. (Binary file).
* `components.json`: Configuration file for `shadcn/ui`, specifying the style, component paths, and utility aliases.
  * *Content:* Uses "new-york" style, non-RSC, TSX, defines aliases for `components`, `utils`, `ui`, etc., and uses `lucide-react` for icons.
* `custom.d.ts`: Custom TypeScript declaration file. Used to declare types for modules that don't have their own types (e.g., image imports, CSS modules) and global type extensions.
  * *Content:* Declares modules for various asset types (png, svg, css, etc.) and extends global interfaces like `Document` and `Window`.
* `cypress.config.ts`: Configuration file for the Cypress end-to-end testing framework.
  * *Content:* Sets viewport dimensions, timeouts, enables video recording, disables file watching, configures retries, and sets up node events (likely for plugins).
* `docker-compose.yml`: Defines multi-container Docker applications. Used here primarily to set up a PostgreSQL database service for local development.
  * *Content:* Defines a `db` service using the `postgres:17.2-alpine` image, maps port 5432, sets up a volume for data persistence (`./db`), and configures database credentials.
* `drizzle.config.ts`: Configuration file for Drizzle Kit (the Drizzle ORM CLI tool) used for generating and managing database migrations.
  * *Content:* Specifies the output directory (`.drizzle`), schema location (`lib/server/schema/index.ts`), enables breakpoints, verbose logging, strict mode, sets the dialect to PostgreSQL, and reads DB credentials from `DATABASE_URL`.
* `env.d.ts`: TypeScript declaration file for environment variables, providing type safety.
  * *Content:* Declares the types for environment variables defined in `.env.example` (e.g., `NODE_ENV`, `VITE_BASE_URL`, Sentry vars).
* `eslint.config.js`: Configuration file for ESLint, the code linter. Defines linting rules and plugins.
  * *Content:* Uses recommended rules from ESLint JS, TypeScript ESLint, Prettier, TanStack Query/Router plugins. Configures React hooks rules and the React Compiler plugin. Specifies parser options and project path.
* `git-conventional-commits.yaml`: Defines rules and configuration for Conventional Commits, likely used with commit linting tools or semantic release.
  * *Content:* Specifies allowed commit types (`feat`, `fix`, etc.), scopes, release tag patterns, and changelog generation rules.
* `global-setup.ts`: Likely a setup file for testing frameworks (like Playwright or Vitest), executed once before tests run. (Content not provided, could involve setting up test environment, database seeding, etc.).
* `package.json`: Standard Node.js project manifest file. Lists project metadata, scripts, dependencies, and devDependencies.
  * *Content:* Defines project name, scripts (auth, build, db, dev, format, lint, start, ui), and lists all dependencies like React, TanStack libs, Drizzle, Tailwind, Shadcn UI, Sentry, testing tools, etc.
* `playwright.config.ts`: Configuration file for the Playwright end-to-end testing framework.
  * *Content:* Sets test directory, enables parallel runs, configures retries, reporters, base URL, tracing, defines browser projects (Chromium, Firefox, WebKit, Mobile, Edge, Chrome), and configures the local development web server.
* `renovate.json`: Configuration file for Renovate Bot, used for automating dependency updates.
  * *Content:* Extends base config, disables default package rules (likely handled by Dependabot), and enables vulnerability alerts.
* `reset.d.ts`: TypeScript declaration file likely used to import `@total-typescript/ts-reset` for improved type inference on built-in methods.
* `tsconfig.json`: The main TypeScript configuration file. Defines compiler options, included files, and path aliases.
  * *Content:* Includes all `.ts`/`.tsx` files, sets strict mode, ESNext module system, JSX settings, target (`ES2022`), module resolution (`Bundler`), includes types for Cypress/Cloudflare/Node, enables various strict checks, source maps, and defines the `~/*` path alias. Sets `sourceRoot` for better Sentry integration.
* `yarnrc.yml`: Duplicate Yarn configuration file at the root level. (Same content as the one inside `.yarnrc.yml`).

### 3.2. `.github/` Directory

* `ISSUE_TEMPLATE/`: Contains templates for creating GitHub issues.
  * `bug_report.md`: Standard template for reporting bugs.
  * `feature_request.md`: Standard template for requesting new features.
* `auto_assign.yml`: Configuration for automatically assigning reviewers to Pull Requests.
  * *Content:* Assigns 1 reviewer (`WomB0ComB0`) automatically.
* `dependabot.yml`: Configuration for Dependabot, GitHub's automated dependency update tool.
  * *Content:* Configures weekly checks for npm and GitHub Actions dependencies, limits open PRs, adds labels (`dependencies`, `github-actions`), and sets commit message prefixes (`chore`, `ci`).
* `workflows/`: Contains GitHub Actions workflow definitions for CI/CD.
  * `codeql-analysis.yml`: Runs CodeQL security analysis on pushes/PRs to `main` and weekly.
  * `playwright.yml`: Runs Playwright end-to-end tests on pushes/PRs to `master`/`main` or manually. Sets up Bun, installs dependencies, builds the app, installs Playwright browsers, runs tests, and uploads reports. Requires numerous secrets for environment variables.
  * `release.yml`: Handles automated releases using `semantic-release-action` on pushes to `main` or manual dispatch. Requires a `RELEASE_TOKEN`.
  * `sentry.yml`: Creates a Sentry release and uploads source maps on pushes to `main`. Requires Sentry secrets.
  * `testing.yml`: Runs general tests (likely unit/integration via `bun run test`) on pushes/PRs to `main`. Sets up Bun, installs dependencies, builds the app, and runs tests. Requires environment secrets.

### 3.3. `.vscode/` Directory

* `extensions.json`: Recommends VS Code extensions for this project (Prettier, ESLint, Tailwind CSS IntelliSense).
* `settings.json`: Defines workspace-specific VS Code settings.
  * *Content:* Sets generated files as read-only, configures file nesting for better explorer view, sets TS SDK path, enforces LF line endings, and sets Prettier as the default formatter for relevant file types.

### 3.4. `app/` Directory (TanStack Start Core)

* `api.ts`: Entry point for handling API requests within the TanStack Start framework. Uses the default file route handler.
* `client.tsx`: The main entry point for the client-side application. Initializes the TanStack Router, Query Client (implicitly via `createRouter`), Sentry, and hydrates the React application into the DOM.
* `global-middleware.ts`: Registers global middleware for TanStack Start, used here for Sentry server middleware.
* `route-tree.gen.ts` / `routeTree.gen.ts`: **Auto-generated files** by TanStack Router. Defines the application's route structure based on the files in `app/routes/`. **Do not edit manually.** (Note: two similar files exist, likely one is outdated or from a previous state).
* `router.tsx`: Creates and configures the TanStack Router instance and the TanStack Query `QueryClient`. Sets up default options for queries/mutations, error/not found components, and integrates the query client with the router. Defines the router type for TypeScript.
* `ssr.tsx`: The main entry point for the server-side rendering (SSR) process. Creates the router, initializes Sentry for the server, and uses the TanStack Start server handler.
* `routes/`: Directory containing the application's routes, following a file-based routing convention.
  * `__root.tsx`: The root layout component for the entire application. Sets up the basic HTML structure (`<html>`, `<head>`, `<body>`), includes global styles, scripts, TanStack Router/Query DevTools, and renders the main `<Outlet />`. Configures global `<head>` metadata (SEO, PWA). Integrates Sentry root route wrapping.
  * `_layout.tsx`: A layout route component. Wraps specific child routes, providing a shared layout structure. In this case, it seems minimal, just rendering an Outlet.
  * `api/`: Subdirectory for defining API endpoints.
    * `health/index.ts`: Defines a health check API endpoint at `/api/health` supporting GET, HEAD, and OPTIONS methods.
  * `index.tsx`: The component for the root path (`/`). Renders the main landing page components (`Navbar`, `Hero`, `About`, etc.). Includes logic for displaying user status and sign-in/out actions (though auth client seems missing in the provided snippet).

### 3.5. `config/` Directory

* `config.ts`: Defines application-level configuration constants.
  * *Content:* Exports an `app` object containing name, description, keywords, and OG image path for SEO and metadata.
* `index.ts`: Barrel file exporting everything from `config.ts`.

### 3.6. `cypress/` Directory

* `.eslintrc.js`: ESLint configuration specific to Cypress tests.
* `README.md` / `README.rst`: Documentation specific to the Cypress setup (likely generated by Cypress).
* `configs/`, `e2e/`, `fixtures/`, `plugins/`, `support/`, `types/`: Standard Cypress directories for configuration, test specs, mock data, plugins, custom commands/setup, and type definitions, respectively.
  * `tsconfig.json`: TypeScript configuration specifically for Cypress tests.
  * `types/window.d.ts`: Custom type declarations for the `window` object within Cypress tests.
* `index.ts`: Barrel file likely importing setup from other Cypress folders.

### 3.7. `lib/` Directory (Shared Code)

* `components/`: Contains React UI components.
  * `default-catch-boundary.tsx`: A component to catch and display errors that occur during rendering or data loading within TanStack Router. Includes Sentry integration.
  * `home/`: Components specific to the landing/home page.
    * `about.tsx`, `clubs.tsx`, `faq.tsx`, `footer.tsx`, `hero.tsx`, `navbar.tsx`, `schedule.tsx`, `sponsors.tsx`: Individual sections of the landing page.
    * `index.ts`: Barrel file exporting all home components.
  * `not-found.tsx`: Component displayed when a route is not found (404).
  * `safe-content.tsx`: A component likely used to render potentially unsafe HTML content after sanitizing it (using `DOMPurify`).
  * `theme-toggle.tsx`: A button component to toggle between light and dark themes.
  * `ui/`: Contains UI primitives, likely generated by/based on `shadcn/ui`. Includes common components like `accordion`, `button`, `card`, `dialog`, `input`, `table`, `tooltip`, etc.
* `hooks/`: Custom React hooks.
  * `index.ts`: Barrel file exporting hooks.
  * `use-mobile.ts`: Hook to detect if the application is being viewed on a mobile-sized screen.
  * `use-toast.ts`: Hook for managing and displaying toast notifications (likely integrates with `sonner` or a custom toast implementation).
* `styles/`: Global styles and CSS configuration.
  * `app.css`: Main CSS entry point. Imports Tailwind CSS, defines custom themes (light/dark variables using OKLCH), base styles, and potentially component-specific styles. Integrates `tailwindcss-animate`.
* `utils/`: Utility functions.
  * `cn.ts`: Helper function combining `clsx` and `tailwind-merge` for conditional and merged Tailwind class names.
  * `index.ts`: Barrel file exporting utilities.
  * `logger.ts`: A custom logging utility class (`Logger`) supporting different levels, contexts, colorization, and environments (client/server).
  * `seo.ts`: Helper function to generate meta tags for Search Engine Optimization based on input properties.
  * `xss.ts`: Utility functions for Cross-Site Scripting (XSS) prevention, including HTML and Markdown sanitization using `DOMPurify` and `marked`, URL sanitization, and input validation.

### 3.8. `public/` Directory (Static Assets)

* Contains files served directly by the web server without processing.
* `android/`, `ios/`, `windows11/`: Icons of various sizes for Progressive Web App (PWA) installation on different platforms.
* `assets/`: Project-specific assets.
  * `images/`: Image files like the logo (`logo.png`) and Open Graph image (`og.png`).
* `browserconfig.xml`: Configuration file for Microsoft Tiles (Windows).
* `favicon.ico`: The small icon displayed in browser tabs.
* `manifest.webmanifest`: The Web App Manifest file, defining PWA properties (name, icons, colors, display mode, etc.).
* `robots.txt`: Instructions for web crawlers (e.g., Googlebot) on which paths they can or cannot crawl.
* `sitemap.xml`: Provides a map of the website's pages for search engines.
* `sw.js`: Service Worker script, used for PWA offline capabilities and caching (content seems like placeholder/registration logic).

### 3.9. Miscellaneous

* `.drizzle/`: Directory where Drizzle Kit stores generated migration SQL files (usually ignored by Git unless team collaboration requires sharing migrations).

## 4. Key Technologies & Concepts

* **TanStack Start:** A meta-framework for building full-stack React applications, handling routing, SSR, API routes, and integrating seamlessly with other TanStack tools.
* **React 19:** The core UI library, utilizing the new React Compiler for potential performance optimizations.
* **TanStack Router:** Type-safe file-based routing solution integrated with TanStack Start.
* **TanStack Query:** Data fetching and caching library, used for managing server state.
* **Vite:** The build tool used by TanStack Start, configured in `app.config.ts`.
* **Tailwind CSS v4:** Utility-first CSS framework for styling. Likely configured via `@tailwindcss/vite` in `app.config.ts` and used in `lib/styles/app.css`.
* **shadcn/ui:** A collection of reusable UI components built using Radix UI and Tailwind CSS. Components are copied into the project (`lib/components/ui/`) via the CLI (`pnpm ui add ...`).
* **Drizzle ORM:** A TypeScript ORM for interacting with the SQL database (PostgreSQL in this case). Schema is defined likely in `lib/server/schema/`, and migrations managed by Drizzle Kit (`drizzle.config.ts`, `pnpm db ...`).
* **Better Auth:** (Assumed from `README.md`) An authentication library. Configuration likely exists within `lib/server/` or similar.
* **Bun:** Used as the package manager and runtime (indicated by `bun.lockb`, `bun install`/`bun run` in `package.json` and `Dockerfile`).
* **TypeScript:** Provides static typing for JavaScript. Configured in `tsconfig.json`.
* **ESLint & Prettier:** Used for code linting and formatting to maintain code quality and consistency.
* **Docker & Docker Compose:** Used for containerizing the application and its dependencies (like the database) for consistent development and deployment environments.
* **GitHub Actions:** Used for Continuous Integration and Continuous Deployment (CI/CD), automating testing, analysis, releases, and Sentry integration.
* **Cypress & Playwright:** End-to-end testing frameworks used to simulate user interactions and verify application behavior.
* **Sentry:** Error monitoring and performance tracking service, integrated via `@sentry/tanstackstart-react`.
* **PWA (Progressive Web App):** Configured via `vite-plugin-pwa` in `app.config.ts` and includes necessary manifest/icon files in `public/`.
* **Conventional Commits:** A specification for commit messages, likely enforced for automated changelog generation and semantic versioning (configured in `git-conventional-commits.yaml`).

## 5. Getting Started

(Refer to `README.md` for detailed steps, summarized here)

1. **Clone:** Clone the repository.
2. **Install Dependencies:** Run `bun install`.
3. **Environment Variables:** Copy `.env.example` to `.env` and populate the necessary values (database URL, Sentry DSN, potentially auth secrets).
4. **Database Setup (Local):**
    * Ensure Docker is running.
    * Start the database service: `docker-compose up -d`
    * Apply schema changes: `bun run db push` (or generate/apply migrations if using `drizzle-kit migrate`).
5. **Run Development Server:** `bun run dev`. Access at `http://localhost:3000`.

## 6. Important Scripts (`package.json`)

* `bun run dev`: Starts the development server with hot reloading.
* `bun run build`: Builds the application for production (using Vercel preset).
* `bun run start`: Starts the production server (after building).
* `bun run format`: Formats the codebase using Prettier.
* `bun run lint`: Lints the codebase using ESLint.
* `bun run db <command>`: Runs Drizzle Kit commands (e.g., `bun run db push`, `bun run db generate`, `bun run db migrate`).
* `bun run ui add <component>`: Adds a new shadcn/ui component to the project.
* `bun run test`: Runs all tests (Cypress and Playwright).
* `bun run cypress`: Opens the Cypress UI for interactive testing.
* `bun run cypress:run`: Runs Cypress tests headlessly.
* `bun run test:e2e`: Runs Playwright tests.
* `bun run auth:generate`: Regenerates the Better Auth schema file.

For a complete list of testing commands and detailed information about our testing infrastructure, see [TESTING.md](./TESTING.md).

## 7. Deployment

The application is configured for deployment to **Vercel** (as specified in `app.config.ts`). Deployment likely involves pushing to the `main` branch, which triggers the Vercel integration or a GitHub Actions workflow. Environment variables (database connection, Sentry keys, auth secrets) need to be configured in the Vercel project settings.

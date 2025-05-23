import { Link, createFileRoute, useRouter } from "@tanstack/react-router";
import { Navbar, Hero, About, Schedule, Clubs, Sponsors, FAQ, Footer } from "~/lib/components/home";
import ThemeToggle from "~/lib/components/theme-toggle";
import { Button } from "~/lib/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
  loader: ({ context }) => {
    return { user: context.user };
  },
});

function Landing() { 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Clubs />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

function Home() {
  const { user } = Route.useLoaderData();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-4xl font-bold">TanStarter</h1>
      <div className="flex items-center gap-2">
        This is an unprotected page:
        <pre className="rounded-md border bg-card p-1 text-card-foreground">
          routes/index.tsx
        </pre>
      </div>

      {user ? (
        <div className="flex flex-col gap-2">
          <p>Welcome back, {user.name}!</p>
          <Button type="button" asChild className="w-fit" size="lg">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
          <div>
            More data:
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>

          <Button
            onClick={async () => {
              await authClient.signOut();
              router.invalidate();
            }}
            type="button"
            className="w-fit"
            variant="destructive"
            size="lg"
          >
            Sign out
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p>You are not signed in.</p>
          <Button type="button" asChild className="w-fit" size="lg">
            <Link to="/signin">Sign in</Link>
          </Button>
        </div>
      )}

      <ThemeToggle />

      <a
        className="text-muted-foreground underline hover:text-foreground"
        href="https://github.com/dotnize/tanstarter"
        target="_blank"
        rel="noreferrer noopener"
      >
        dotnize/tanstarter
      </a>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Hero, About, Clubs, Sponsors, FAQ, Footer } from "~/lib/components/home";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Clubs />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

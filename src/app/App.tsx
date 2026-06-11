import { Nav } from "./portfolio-sections/Nav";
import { Hero } from "./portfolio-sections/Hero";
import { About } from "./portfolio-sections/About";
import { CaseStudies } from "./portfolio-sections/CaseStudies";
import { Process } from "./portfolio-sections/Process";
import { Contact } from "./portfolio-sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-(--color-background-page) text-(--color-text-primary)">
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

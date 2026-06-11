{
  /* MARKER-MAKE-KIT-INVOKED */
}
{
  /* MARKER-MAKE-KIT-DISCOVERY-READ */
}
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Process } from "./components/Process";
import { Contact } from "./components/Contact";

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

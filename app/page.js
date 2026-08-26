import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Toolbox from "@/components/Toolbox";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Toolbox />
        <Stats />
      </main>
      <Contact />
    </>
  );
}

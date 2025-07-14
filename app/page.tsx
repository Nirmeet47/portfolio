import About from "@/components/About";
import LandingPage from "@/components/Landing";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import  Contact  from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <LandingPage />
    <About />
    <TechStack />
    <Projects />
    <Contact/>
    </>
  );
}

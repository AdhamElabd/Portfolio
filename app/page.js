import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
 import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
 
  if (false) {
    throw new Error('Failed to fetch data')
  }

 
 
  return null;
};

export default async function Home() {
 
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
       <ContactSection />
    </div>
  )
};

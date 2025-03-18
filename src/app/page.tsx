import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQs from "@/components/sections/Faqs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQs />
      <Contact />
    </>
  );
}

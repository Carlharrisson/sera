import HeroSection from "@/components/sections/hero-section";
import WhatWeDoSection from "@/components/sections/what-we-do-section";
// import ProjectsSection from "@/components/sections/latest-projects-section";
// import TestimonialsSection from "@/components/sections/testimonials-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import FaqSection from "@/components/sections/faq-section";

export default function Home() {
  return (
    <main className="relative ">
      <HeroSection />
      <WhatWeDoSection />
      {/* <ProjectsSection /> */}
      {/* <TestimonialsSection /> */}
      <WhyChooseUsSection />
      <AboutSection />
      <ContactSection />
      <FaqSection />
    </main >
  );
}

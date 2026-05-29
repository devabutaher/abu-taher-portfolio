import dynamic from "next/dynamic";
import { About } from "@/components/about/About";
import { Hero } from "@/components/hero/Hero";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { Projects } from "@/components/projects/Projects";
import { ScrollIndicator } from "@/components/Scroll/Scroll";

// Dynamic imports for heavy components — loaded only when needed
const AuroraBackground = dynamic(
  () => import("@/components/hero/AuroraBackground"),
  { ssr: false },
);

const TechMarquee = dynamic(
  () => import("@/components/marquee/TechMarquee"),
);

const Experience = dynamic(
  () => import("@/components/experience/Experience"),
);

const Testimonial = dynamic(
  () => import("@/components/testimonial/Testimonial"),
);

const Contact = dynamic(
  () => import("@/components/Contact/Contact"),
);

const Footer = dynamic(
  () => import("@/components/Footer/Footer"),
);

export default function Home() {
  return (
    <ScrollIndicator>
      <AuroraBackground />
      <SideBar />
      <Heading />
      <main className="min-w-0 pl-[48px] pt-[50px] md:pl-[60px] md:pt-[70px]">
        <Hero />
        <About />
        <TechMarquee />
        <Projects />
        <Experience />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </ScrollIndicator>
  );
}

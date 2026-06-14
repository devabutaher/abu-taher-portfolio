import dynamic from "next/dynamic";
import { About } from "@/components/about/About";
import { Hero } from "@/components/hero/Hero";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { Projects } from "@/components/projects/Projects";
import { ScrollProgressBar } from "@/components/utils/ScrollProgressBar";

// Dynamic imports for heavy / client-only components
const AuroraBackground = dynamic(
  () => import("@/components/hero/AuroraBackground"),
  { ssr: false },
);
const TechMarquee  = dynamic(() => import("@/components/marquee/TechMarquee"));
const Experience   = dynamic(() => import("@/components/experience/Experience"));
const Certificates = dynamic(() => import("@/components/certificates/Certificates"));
const Blog         = dynamic(() => import("@/components/blog/Blog"));
const Testimonial  = dynamic(() => import("@/components/testimonial/Testimonial"));
const Contact      = dynamic(() => import("@/components/Contact/Contact"));
const Footer       = dynamic(() => import("@/components/Footer/Footer"));

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <AuroraBackground />
      <SideBar />
      <Heading />
      <main className="min-w-0 pl-[48px] pt-[50px] md:pl-[60px] md:pt-[70px]">
        <Hero />
        <About />
        <TechMarquee />
        <Projects />
        <Experience />
        <Certificates />
        <Blog />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

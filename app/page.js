import { About } from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { Projects } from "@/components/projects/Projects";
import ScrollIndicator from "@/components/scroll/Scroll";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <ScrollIndicator>
      <div className="grid [grid-template-columns:60px_1fr]">
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          {/* <Testimonial /> */}
          <Contact />
          <Footer />
        </main>
      </div>
    </ScrollIndicator>
  );
}

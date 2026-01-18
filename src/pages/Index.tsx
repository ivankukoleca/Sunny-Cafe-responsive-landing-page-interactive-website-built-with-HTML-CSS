import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Events />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

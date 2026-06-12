import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Claims from "@/components/Claims";
import WhoWeServe from "@/components/WhoWeServe";
import AboutStrip from "@/components/AboutStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Claims />
      <WhoWeServe />
      <AboutStrip />
      <Contact />
      <Footer />
    </main>
  );
}

import About from "@/components/About";
import Collaborations from "@/components/Collaborations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Moments from "@/components/Moments";
import Navbar from "@/components/Navbar";
import References from "@/components/References";
import Series from "@/components/Series";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#040404]">
      <Navbar />
      <Hero />
      <About />
      <References />
      <Collaborations />
      <Series />
      <Moments />
      <Footer />
    </main>
  );
}

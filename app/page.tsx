import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="pt-16 flex flex-col items-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Why />
      <Footer />
    </>
  );
}

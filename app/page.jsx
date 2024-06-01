import Image from "next/image";
import Hero from '@/components/Hero'
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import UmbralCritico from "@/components/sections/UmbralCritico";
import MetodoOperativo from "@/components/sections/MetodoOperativo";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RegulatoryTimeline from "@/components/sections/RegulatoryTimeline";
import CasesTeaser from "@/components/sections/CasesTeaser";
import OperatorTeaser from "@/components/sections/OperatorTeaser";
import ProtocolTeaser from "@/components/sections/ProtocolTeaser";
import ContactoTeaser from "@/components/sections/ContactoTeaser";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UmbralCritico />
        <MetodoOperativo />
        <ServicesGrid />
        <CasesTeaser />
        <OperatorTeaser />
        <RegulatoryTimeline />
        <ProtocolTeaser />
        <ContactoTeaser />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

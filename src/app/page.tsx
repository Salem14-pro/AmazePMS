import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ServicesSection } from "@/components/landing/services-section";
import { ClientsMarquee } from "@/components/landing/clients-marquee";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsMarquee />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

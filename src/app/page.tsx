import ArticleSection from "./components/ArticleSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <ServicesSection />
      <ProcessSection />
      <ArticleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

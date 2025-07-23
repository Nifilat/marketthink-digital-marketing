import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  PartnerSection,
  ArticleSection,
  ContactSection,
} from '@/sections/index';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PartnerSection />
      <ArticleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
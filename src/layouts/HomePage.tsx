import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  PartnerSection,
  ArticleSection,
  ContactSection,
} from '@/sections/index';
import Layout from './Layout';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <PartnerSection />
      <ServicesSection />
      <ProcessSection />
      <ArticleSection />
      <ContactSection />
    </Layout>
  );
}

import ArticleSection from "./components/ArticleSection";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <ArticleSection />
    </main>
  );
}

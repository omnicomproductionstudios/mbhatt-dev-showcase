import { SecurityProvider } from '@/components/SecurityProvider';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BannersSection } from '@/components/BannersSection';
import { WebsitesSection } from '@/components/WebsitesSection';
import { BrandsSection } from '@/components/BrandsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <SecurityProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <BannersSection />
          <WebsitesSection />
          <BrandsSection />
        </main>
        <Footer />
      </div>
    </SecurityProvider>
  );
};

export default Index;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsAndCertifications from "@/components/StatsAndCertifications";
import WhoWeAre from "@/components/WhoWeAre";
import InsightCards from "@/components/InsightCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientStoriesCarousel from "@/components/ClientStoriesCarousel";
import AwardsSection from "@/components/AwardsSection";
import CareersSection from "@/components/CareersSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsAndCertifications />
      <WhoWeAre />
      <InsightCards />
      <WhyChooseUs />
      
      {/* Client Stories Section Title */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto mobile-padding text-center">
          <div className="animate-fade-in">
            <h2 className="mobile-text-scale md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Innovation in Action
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Discover how we're transforming industries through cutting-edge technology solutions and strategic partnerships
            </p>
          </div>
        </div>
      </section>
      
      <ClientStoriesCarousel />
      {/* <AwardsSection /> */}
      <CareersSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

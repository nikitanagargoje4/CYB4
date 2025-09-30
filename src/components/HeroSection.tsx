import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/40 rounded-full blur-xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/25 rounded-full blur-2xl animate-bounce" style={{animationDuration: '15s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/30 rounded-full blur-xl animate-pulse" style={{animationDuration: '25s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent/35 rounded-full blur-2xl animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/5 right-1/5 w-32 h-32 border-2 border-accent/40 rotate-45 animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute bottom-1/5 left-1/5 w-24 h-24 border-2 border-primary/40 rotate-12 animate-pulse" style={{animationDuration: '18s'}}></div>
        <div className="absolute top-2/3 right-2/3 w-40 h-40 border-2 border-accent/30 rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container text-center max-w-6xl mx-auto mobile-padding">
          <div className="animate-fade-in">
            {/* Certification Badge */}
            <div className="mb-6 md:mb-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 md:px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-lg md:text-xl">🏆</span>
                <span className="text-xs md:text-sm text-white/90 font-medium">
                  ISO 27001 Ready • Microsoft Partner • MSME Registered
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 text-balance leading-tight">
              Empowering Businesses with
              <br />
              <span className="text-accent">IT, Cloud & Digital Solutions</span>
              <br />
              Globally
            </h1>
            
            {/* Services Line */}
            <div className="max-w-4xl mx-auto mb-4 md:mb-6 animate-slide-up">
              <p className="text-sm md:text-base lg:text-lg text-white/80 font-medium">
                End-to-End IT Services | Cloud & Cybersecurity | Digital Marketing | Consulting
              </p>
            </div>

            {/* Tagline */}
            <div className="max-w-3xl mx-auto mb-8 md:mb-10 animate-slide-up">
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                From Servers to SEO, We Scale Your Business 10x. Trusted IT & Digital Partner for Enterprises Worldwide.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="animate-slide-up">
              <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold touch-target group border-2 border-accent hover:border-accent/90 w-auto"
                data-testid="button-get-free-consultation"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
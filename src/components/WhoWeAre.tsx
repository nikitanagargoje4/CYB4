import { Target, Users, Lightbulb } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto mobile-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Founded in 2020, Cybaem Tech is your global IT solutions partner, driving digital transformation across industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Cybaem Tech</span> is a global IT solutions provider helping businesses 
              adopt digital transformation through cloud, cybersecurity, infrastructure management, and digital marketing services. 
              We serve startups, SMEs, and enterprises across industries with a mission to deliver scalable, secure, and sustainable 
              IT ecosystems that drive real business growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/50 mb-3">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Mission</h3>
                <p className="text-sm text-muted-foreground">Scalable, secure IT ecosystems</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/50 mb-3">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Clients</h3>
                <p className="text-sm text-muted-foreground">Startups to Enterprises</p>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/50 mb-3">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Innovation</h3>
                <p className="text-sm text-muted-foreground">Digital transformation</p>
              </div>
            </div>
          </div>

          {/* Right Column - Statistics Cards in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">2020</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Service Verticals</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-8 text-center backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

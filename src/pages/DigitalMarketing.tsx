import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import digitalTransformationHero from "@/assets/digital-transformation-hero.jpg";
import digitalMarketingServices from "@/assets/digital-marketing-services.jpg";
import techTeamCollaboration from "@/assets/tech-team-collaboration.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Digital Marketing Services | SEO, PPC, Social Media & Content</title>
        <meta name="description" content="Cybaem Tech: full-stack Digital Marketing Services including SEO, SEM/PPC, Social Media Marketing, Content Strategy, Email Marketing & Analytics for business growth." />
        <link rel="canonical" href="https://www.cybaemtech.com/digital-marketing" />
        <meta name="keywords" content="Digital Marketing, SEO, SEM, PPC, Social Media Marketing, Content Strategy, Email Marketing, Marketing Analytics & Reporting, Influencer, Conversion Rate Optimization (CRO), Cybaem Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Marketing Services | SEO, PPC, Social Media & Content" />
        <meta property="og:description" content="Drive conversions with Cybaem Tech’s Digital Marketing: SEO, SEM/PPC, Social Media Management, Content Strategy, Email Campaigns & Analytics." />
        <meta property="og:url" content="https://www.cybaemtech.com/digital-marketing" />
        <meta property="og:site_name" content="Cybaem Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services | SEO, PPC, Social Media & Content" />
        <meta name="twitter:description" content="Grow your brand with Cybaem Tech’s digital marketing: SEO, PPC, Social Media, Content, Email & Analytics to maximize ROI." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" preload="metadata" poster={digitalTransformationHero} onError={e => {
            // Hide video and show fallback image on error
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }}>
            <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback image */}
          <img src={digitalTransformationHero} alt="Digital marketing background" className="w-full h-full object-cover hidden" style={{
            display: 'none'
          }} />

          {/* Dark overlay for content visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/30 rounded-full blur-xl animate-spin" style={{
            animationDuration: '20s'
          }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-2xl animate-bounce" style={{
            animationDuration: '15s'
          }}></div>

          {/* Geometric shapes */}
          <div className="absolute top-1/5 right-1/5 w-32 h-32 border-2 border-accent/30 rotate-45 animate-spin" style={{
            animationDuration: '40s'
          }}></div>
          <div className="absolute bottom-1/5 left-1/5 w-24 h-24 border-2 border-primary/30 rotate-12 animate-pulse" style={{
            animationDuration: '18s'
          }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-lg">
                  Top Digital Marketing Services to Grow Your Business Online
                </h1>
                <p className="text-lg md:text-xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
                  Professional SEO Services, PPC Management & Social Media Marketing Solutions That Drive Real Results
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-start animate-slide-up">



                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white px-10 py-5 text-lg font-bold hover-glow"
                    onClick={() =>
                      window.open(
                        "https://cybaemtech.com/Digital%20Marketing%20deck.pdf",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    Download Brochure
                  </Button>




                </div>
              </div>
              <div className="animate-slide-up animate-delay-200 lg:flex lg:justify-end">
                {/* Content space - video is now the background */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-5 py-10">
        {/* Why Choose Our Services */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-primary pb-3 mb-10 text-center">
            Why Choose Our Professional Digital Marketing Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-lift card-interactive animate-slide-up animate-delay-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">🎯 Proven Digital Marketing Expertise</h3>
              <p className="text-white/80">
                Our <span className="bg-gradient-to-r from-primary/30 to-accent/30 px-2 py-1 rounded text-white">digital marketing agency</span> delivers measurable results with data-driven strategies. We specialize in SEO services for businesses, PPC advertising management, and comprehensive online marketing solutions that increase your ROI by up to 400%.
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-lift card-interactive animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold mb-4 text-primary">📊 Affordable Digital Marketing Solutions</h3>
              <p className="text-white/80">
                Get the <span className="bg-gradient-to-r from-primary/30 to-accent/30 px-2 py-1 rounded text-white">best digital marketing company</span> services without breaking your budget. Our competitive pricing starts at just ₹30,000/month, making professional digital marketing accessible for small businesses and startups.
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-lift card-interactive animate-slide-up animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">🚀 Complete Online Marketing Solutions</h3>
              <p className="text-white/80">
                From <span className="bg-gradient-to-r from-primary/30 to-accent/30 px-2 py-1 rounded text-white">SEO services</span> to social media advertising, we handle every aspect of your digital presence. Our full-service approach ensures consistent brand messaging and maximum market penetration.
              </p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-primary pb-3 mb-10 text-center">
            Our Comprehensive Digital Marketing Services Portfolio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <img src={digitalMarketingServices} alt="Digital marketing services visualization" className="w-full h-auto rounded-2xl shadow-2xl hover-lift" />
            </div>
            <div className="animate-slide-up animate-delay-200 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Search Engine Optimization (SEO Services for Businesses)</h3>
                <p className="text-white/80 mb-4">
                  Dominate search results with our <strong className="text-white">professional SEO services</strong>. We optimize your website for high-traffic keywords, improve your Google rankings, and drive organic traffic that converts. Our SEO strategies include technical audits, on-page optimization, link building, and local SEO to help you grow business online.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Comprehensive SEO audits and competitor analysis</li>
                  <li>Keyword research and content optimization</li>
                  <li>Technical SEO fixes and site speed optimization</li>
                  <li>Local SEO for increased visibility in your area</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Pay-Per-Click (PPC) Advertising Management</h3>
                <p className="text-white/80 mb-4">
                  Maximize your advertising budget with our expert <strong className="text-white">PPC management</strong> services. Our certified Google Ads specialists create high-converting campaigns that deliver immediate results and optimal return on investment.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Google Ads campaign setup and optimization</li>
                  <li>Facebook and Instagram advertising campaigns</li>
                  <li>Landing page optimization for higher conversions</li>
                  <li>A/B testing and performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Social Media Marketing Solutions</h3>
                <p className="text-white/80 mb-4">
                  Engage your audience with our comprehensive <strong className="text-white">social media marketing solutions</strong>. We create compelling content, manage your social presence, and run targeted social media advertising campaigns across all major platforms.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Content creation and social media management</li>
                  <li>Paid social media advertising campaigns</li>
                  <li>Community engagement and reputation management</li>
                  <li>Influencer marketing and partnership strategies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Content Marketing Strategies</h3>
                <p className="text-white/80 mb-4">
                  Build authority and drive conversions with strategic <strong className="text-white">content marketing</strong>. Our team creates valuable, SEO-optimized content that attracts your target audience and establishes your brand as an industry leader.
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Blog writing and SEO content creation</li>
                  <li>Email marketing campaigns and automation</li>
                  <li>Video content production and optimization</li>
                  <li>Lead magnets and conversion-focused content</li>
                </ul>
              </div>
            </div>
            <div className="animate-slide-up animate-delay-200">
              <img src={techTeamCollaboration} alt="Technology team collaboration" className="w-full h-auto rounded-2xl shadow-2xl hover-lift" />
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-card/10 backdrop-blur-sm p-10 rounded-xl text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Trusted by 500+ Businesses Worldwide</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-scale-in animate-delay-100">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="animate-scale-in animate-delay-200">
              <div className="text-4xl font-bold text-primary mb-2">400%</div>
              <p className="text-white/80">Average ROI Increase</p>
            </div>
            <div className="animate-scale-in animate-delay-300">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-white/80">Client Retention Rate</p>
            </div>
            <div className="animate-scale-in animate-delay-400">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-white/80">Customer Support</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-primary pb-3 mb-6 text-center">
            Digital Marketing Pricing - Affordable Packages for Every Business
          </h2>
          <p className="text-center text-white/80 mb-10 text-lg">
            Choose the perfect <span className="bg-gradient-to-r from-primary/30 to-accent/30 px-2 py-1 rounded text-white">digital marketing services</span> package for your business needs. All packages include setup, onboarding, and monthly performance reports.
          </p>

          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Complete Digital Marketing Service Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card/10 backdrop-blur-sm border-2 border-muted/20 rounded-xl p-8 text-center shadow-lg hover-lift animate-slide-up animate-delay-100">
              <h3 className="text-xl font-semibold text-white mb-4">Flexible Part-Time Solution</h3>
              <div className="text-3xl font-bold text-accent mb-6">Silver<span className="text-sm font-normal">(Starter Pack)</span></div>
              <ul className="text-left space-y-3 mb-8 text-white/80">
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Digital Marketing Specialist (11 days/month)</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Essential social media management</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Basic SEO optimization</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Photography support</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Bi-weekly strategy sessions</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Monthly performance reporting</li>
              </ul>
              <p className="text-sm text-white/60 mb-6"><strong>Perfect for:</strong> Startups and small businesses testing digital marketing effectiveness</p>
              <a
  href="https://wa.me/919028541383?text=Hi%20Cybaemtech%2C%20I%20am%20interested%20in%20Digital%20Marketings%20Flexible%20Part-Time%20Solution%20Silver(Starter%20Pack)"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-accent hover:bg-accent/90 hover-glow">
    Get Started
  </Button>
</a>


            </div>

            <div className="bg-card/10 backdrop-blur-sm border-4 border-primary rounded-xl p-8 text-center shadow-lg transform scale-105 hover-lift animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold text-white mb-4">Complete Digital Marketing Package</h3>
              <div className="text-3xl font-bold text-accent mb-6">Gold<span className="text-sm font-normal">(Popular Pack)</span></div>
              <ul className="text-left space-y-3 mb-8 text-white/80">
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Full social media management (Facebook, Instagram, LinkedIn)</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>8-10 professional posts per month</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Complete Google Ads management</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Comprehensive SEO optimization</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Monthly analytics & reports</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Strategy consultation & planning</li>
              </ul>
              <p className="text-sm text-white/60 mb-6"><strong>Perfect for:</strong> Established businesses ready for comprehensive digital growth</p>
              <a
  href="https://wa.me/919028541383?text=Hi%20Cybaemtech%2C%20I%20am%20interested%20in%20Digital%20Marketings%20Complete%20Digital%20Marketing%20Package%20Gold(Popular%20Pack)"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-primary hover:bg-primary/90 hover-glow">
    Most Popular
  </Button>
</a>


            </div>

            <div className="bg-card/10 backdrop-blur-sm border-2 border-muted/20 rounded-xl p-8 text-center shadow-lg hover-lift animate-slide-up animate-delay-300">
              <h3 className="text-xl font-semibold text-white mb-4">Dedicated Marketing Professional</h3>
              <div className="text-3xl font-bold text-accent mb-6">Platinum<span className="text-sm font-normal">(Premium Pack)</span></div>
              <ul className="text-left space-y-3 mb-8 text-white/80">
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Full-time Digital Marketing Executive (176 hours/month)</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Complete marketing activity ownership</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Professional photography coordination</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>All digital marketing verticals</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Monthly strategy meetings</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Flexible strategy adaptation</li>
              </ul>
              <p className="text-sm text-white/60 mb-6"><strong>Perfect for:</strong> Growing businesses requiring dedicated resource allocation</p>
              <a
  href="https://wa.me/919028541383?text=Hi%20Cybaemtech%2C%20I%20am%20interested%20in%20Digital%20Marketings%20Dedicated%20Marketing%20Professional%20Platinum(Premium%20Pack)"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full bg-accent hover:bg-accent/90 hover-glow">
    Get Premium
  </Button>
</a>


            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Professional Photography & Video Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/10 backdrop-blur-sm border-2 border-muted/20 rounded-xl p-8 shadow-lg hover-lift animate-slide-up animate-delay-100">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">Photography Services</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex justify-between border-b border-white/20 pb-2"><strong>Product Photography:</strong> <span>Charged per session (up to 5 products)</span></li>
                <li className="flex justify-between border-b border-white/20 pb-2"><strong>Individual Product Shots:</strong> <span>Charged per product</span></li>
                <li className="flex justify-between border-b border-white/20 pb-2"><strong>Corporate/Team Photography:</strong> <span>Charged per session</span></li>
                <li className="flex justify-between border-b border-white/20 pb-2"><strong>Event Photography:</strong> <span>Charged per event</span></li>
                <li className="flex justify-between border-b border-white/20 pb-2"><strong>Social Media Content Shoots:</strong> <span>Charged per session</span></li>
              </ul>
              <p className="text-sm text-white/60 italic mt-6">All photography includes professional editing, high-resolution delivery within 48-72 hours</p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border-2 border-muted/20 rounded-xl p-8 text-center shadow-lg hover-lift animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold text-white mb-4">Video Content Creation</h3>
              <div className="text-3xl font-bold text-accent mb-6">Pro-Video<span className="text-sm font-normal">(Professional Pack)</span></div>
              <ul className="text-left space-y-3 text-white/80">
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>2 comprehensive process videos</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>End-to-end production</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Professional editing</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Platform optimization</li>
                <li className="flex items-start"><span className="text-green-500 mr-3 font-bold">✓</span>Multiple format delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-primary pb-3 mb-10 text-center">
            What Our Clients Say About Our Digital Marketing Services
          </h2>
          <div className="space-y-6">
            <div className="bg-card/10 backdrop-blur-sm p-8 border-l-4 border-primary rounded-lg shadow-lg hover-lift animate-slide-up animate-delay-100">
              <p className="text-lg italic text-white/80 mb-4">
                "Their SEO services transformed our online presence. We saw a 300% increase in organic traffic within 6 months. The best digital marketing company we've worked with!"
              </p>
              <strong className="text-white">- Sarah Johnson, E-commerce Store Owner</strong>
            </div>
            <div className="bg-card/10 backdrop-blur-sm p-8 border-l-4 border-primary rounded-lg shadow-lg hover-lift animate-slide-up animate-delay-200">
              <p className="text-lg italic text-white/80 mb-4">
                "Affordable digital marketing that actually works. Their PPC management reduced our cost-per-click by 40% while doubling our conversions."
              </p>
              <strong className="text-white">- Mike Rodriguez, Restaurant Chain</strong>
            </div>
            <div className="bg-card/10 backdrop-blur-sm p-8 border-l-4 border-primary rounded-lg shadow-lg hover-lift animate-slide-up animate-delay-300">
              <p className="text-lg italic text-white/80 mb-4">
                "Professional team, excellent communication, and results that speak for themselves. Their social media marketing solutions helped us reach 50,000 new customers."
              </p>
              <strong className="text-white">- Lisa Chen, Fashion Brand</strong>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-primary pb-3 mb-10 text-center">
            Why We're the Best Digital Marketing Company for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-lift card-interactive animate-slide-up animate-delay-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">🎯 Data-Driven Digital Marketing Strategies</h3>
              <p className="text-white/80">
                Every campaign begins with thorough market research, competitor analysis, and strategic planning. We use advanced analytics to ensure maximum ROI and continuous optimization.
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-lift card-interactive animate-slide-up animate-delay-200">
              <h3 className="text-xl font-semibold mb-4 text-primary">🏆 Certified Digital Marketing Experts</h3>
              <p className="text-white/80">
                Our team holds certifications from Google, Facebook, and other leading platforms. We stay updated with the latest digital marketing trends and algorithm changes.
              </p>
            </div>
            <div className="bg-card/10 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-lift card-interactive animate-slide-up animate-delay-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">📈 Transparent Reporting & Communication</h3>
              <p className="text-white/80">
                Receive detailed monthly reports with clear metrics, insights, and actionable recommendations. Know exactly how your investment is performing.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="consultation" className="bg-card/10 backdrop-blur-sm p-10 rounded-xl text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            Don't let your competitors get ahead. Partner with our <strong className="text-white">digital marketing agency</strong> to create powerful online marketing solutions that drive real results for your business.
          </p>

          <h3 className="text-2xl font-semibold mb-6 text-primary">Next Steps:</h3>
          <ol className="text-left text-lg space-y-3 max-w-2xl mx-auto mb-8 text-white/80">
            <li><strong className="text-white">Choose Your Package:</strong> Select the digital marketing services that best fit your business needs</li>
            <li><strong className="text-white">Schedule Free Consultation:</strong> Book a detailed strategy call with our digital marketing experts</li>
            <li><strong className="text-white">Get Custom Strategy:</strong> Receive a tailored digital marketing plan for your industry</li>
            <li><strong className="text-white">Launch & Grow:</strong> Watch your online presence transform and revenue soar</li>
          </ol>

          <div className="flex flex-wrap justify-center gap-4 mb-8">



            <a
              href="https://cybaimtech-my.sharepoint.com/query?q=digita&searchScope=all&id=%2Fpersonal%2Fsujay%5Fpalande%5Fcybaemtech%5Fcom%2FDocuments%2FDigital%20Marketing%20deck%2Epdf&parentview=7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-5 text-lg font-bold hover-glow"
                onClick={() =>
                  window.open(
                    "https://cybaemtech.com/Digital%20Marketing%20deck.pdf",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Download Brochure
              </Button>


            </a>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white px-10 py-5 text-lg font-bold hover-lift text-gray-800"
              >
                Contact Us for Free Consultation
              </Button>
            </Link>

          </div>

          <p className="text-white/60">
            <strong className="text-white">Investment Details:</strong> Setup & Onboarding | Minimum 3-month commitment | 50% advance, 50% monthly payment
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
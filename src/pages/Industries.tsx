import { ArrowLeft, Factory, Heart, DollarSign, ShoppingCart, Cpu, ChevronRight, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import manufacturingImage from "@/assets/manufacturing-it.jpg";
import healthcareImage from "@/assets/healthcare-tech.jpg";
import financialImage from "@/assets/financial-services.jpg";
import retailImage from "@/assets/retail-ecommerce.jpg";
import technologyImage from "@/assets/technology-sector.jpg";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing IT Solutions",
      description: "Optimize production processes, implement ERP systems, and enhance supply chain management with our specialized manufacturing technology solutions.",
      color: "from-orange-500 to-red-500",
      image: manufacturingImage,
      features: ["ERP Implementation", "Supply Chain Optimization", "Process Automation", "Quality Management"]
    },
    {
      icon: Heart,
      title: "Healthcare Technology Services",
      description: "Develop HIPAA-compliant healthcare applications, implement EMR systems, and create telehealth solutions that improve patient care and operational efficiency.",
      color: "from-green-500 to-emerald-500",
      image: healthcareImage,
      features: ["HIPAA Compliance", "EMR Systems", "Telehealth Solutions", "Patient Care Optimization"]
    },
    {
      icon: DollarSign,
      title: "Financial Services IT",
      description: "Build secure fintech applications, implement compliance solutions, and create trading platforms that meet regulatory requirements and security standards.",
      color: "from-blue-500 to-cyan-500",
      image: financialImage,
      features: ["Fintech Applications", "Compliance Solutions", "Trading Platforms", "Security Standards"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce Solutions",
      description: "Develop omnichannel retail platforms, implement inventory management systems, and create customer engagement solutions that drive sales growth.",
      color: "from-purple-500 to-pink-500",
      image: retailImage,
      features: ["Omnichannel Platforms", "Inventory Management", "Customer Engagement", "Sales Growth"]
    },
    {
      icon: Cpu,
      title: "Technology Sector Services",
      description: "Support tech companies with cloud migration, DevOps implementation, and software development services that accelerate product development cycles.",
      color: "from-indigo-500 to-purple-500",
      image: technologyImage,
      features: ["Cloud Migration", "DevOps Implementation", "Software Development", "Product Acceleration"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Cybaem Tech | Industries: Manufacturing, Healthcare & BFSI</title>
        <meta name="description" content="Industries we serve: manufacturing IT solutions, healthcare technology, financial services (BFSI) IT, retail & e-commerce, and technology sector solutions." />
        <link rel="canonical" href="https://www.cybaemtech.com/industries" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Manufacturing IT Solutions, Healthcare Technology Services, Financial Services IT, BFSI IT, Retail and E-commerce Solutions, Technology Sector Services, Industry IT Services, Cybaem Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cybaem Tech | Industries: Manufacturing, Healthcare & BFSI" />
        <meta property="og:description" content="Manufacturing IT, healthcare tech, financial services (BFSI) IT, retail & e-commerce, and technology sector solutions." />
        <meta property="og:url" content="https://www.cybaemtech.com/industries" />
        <meta property="og:site_name" content="Cybaem Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybaem Tech | Industries: Manufacturing, Healthcare & BFSI" />
        <meta name="twitter:description" content="Manufacturing IT, healthcare tech, financial services (BFSI) IT, retail & e-commerce, and technology sector solutions." />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">        
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block animate-fade-in">
              Industries We Serve
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in">
              Comprehensive Technology Solutions{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Across Industries
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl animate-fade-in">
              Our goal is to deliver 360° value with our clients so they can reach new levels of performance across every industry sector.
            </p>
          </div>
        </div>
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {industries.map((industry, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{ animationDelay: `${index * 200}ms` }}>
              {/* Content Column */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Card className="bg-gray-900/50 border-0 hover:bg-gray-900/70 transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${industry.color} group-hover:scale-110 transition-transform duration-300`}>
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Zap className="w-3 h-3 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/enterprise-solutions#erp" className="w-full">
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              
              {/* Image Column */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${industry.color} text-white text-sm font-medium`}>
                        <industry.icon className="w-4 h-4 mr-2" />
                        {industry.title.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Driving Innovation Across{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                All Sectors
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
              Our comprehensive technology solutions span across industries, delivering measurable results and sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", icon: TrendingUp },
              { number: "150+", label: "Industry Clients", icon: Factory },
              { number: "99%", label: "Client Satisfaction", icon: Heart }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Let's discuss how our technology solutions can drive innovation and growth in your sector.
          </p>
          
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white border-0 px-8 py-3 text-lg animate-fade-in">
              Get Started Today
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Industries;
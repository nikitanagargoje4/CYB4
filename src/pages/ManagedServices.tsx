import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Clock, 
  TrendingUp,
  Settings,
  FileText,
  Users,
  Wrench,
  Download,
  Lock,
  Mail,
  Calendar,
  Archive,
  Smartphone,
  Globe,
  UserCheck,
  Settings2,
  HeadphonesIcon,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

// Import generated images
import managedInfrastructure from "@/assets/managed-infrastructure.jpg";
import emailHosting from "@/assets/email-hosting.jpg";
import onsiteSupport from "@/assets/onsite-support.jpg";
import { Link } from "react-router-dom";

const ManagedServices = () => {
  const [activeSection, setActiveSection] = useState("infrastructure");
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Intersection Observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Managed IT Infrastructure Services
  const infrastructureServices = [
    { icon: Server, title: "Server Management", description: "Complete server administration and optimization" },
    { icon: Shield, title: "Firewall & Network Security", description: "Advanced security protocols and monitoring" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions and migration services" },
    { icon: Database, title: "Data Backup & Recovery", description: "Automated backup systems and disaster recovery" },
    { icon: Clock, title: "24/7 Monitoring & Helpdesk Support", description: "Round-the-clock system monitoring and technical support" },
    { icon: TrendingUp, title: "Scalable Solutions", description: "Flexible infrastructure that grows with your business" },
    { icon: Settings, title: "End-to-End Management", description: "Complete IT lifecycle management and optimization" },
    { icon: FileText, title: "Monthly Health Check Reports", description: "Comprehensive system performance and security reports" },
    { icon: Users, title: "Technology Consulting", description: "Strategic IT planning and implementation guidance" },
    { icon: Wrench, title: "Preventive Maintenance", description: "Proactive system maintenance and optimization" },
    { icon: Download, title: "Patch Management", description: "Automated security updates and system patches" },
    { icon: Lock, title: "User Access Control", description: "Secure user management and access permissions" }
  ];

  // Email Hosting Services
  const emailServices = [
    { icon: Mail, title: "Business-Class Email Hosting", description: "Professional email solutions with enterprise features" },
    { icon: Shield, title: "Secure Email Communication", description: "Encrypted email with advanced security protocols" },
    { icon: Cloud, title: "Cloud-Based Mailboxes", description: "Scalable cloud email infrastructure" },
    { icon: Calendar, title: "Calendars & Collaboration", description: "Integrated calendar and collaboration tools" },
    { icon: Archive, title: "Email Backup & Archiving", description: "Automated backup and long-term email archiving" },
    { icon: Settings2, title: "Integration Support", description: "Seamless integration with existing business systems" },
    { icon: Smartphone, title: "Mobile & Web Access", description: "Access email from any device, anywhere" },
    { icon: Globe, title: "Migration Services", description: "Smooth transition from existing email systems" },
    { icon: UserCheck, title: "Admin Panel Access", description: "Comprehensive administrative control and management" }
  ];

  // On-Premises Support Features
  const onPremisesFeatures = [
    {
      title: "Dedicated On-Site Engineers",
      description: "Professional technical experts working directly at your location",
      benefits: [
        "Immediate response to technical issues",
        "Face-to-face consultation and support",
        "Deep understanding of your infrastructure",
        "Customized solutions for your environment"
      ]
    },
    {
      title: "Customised Support Plans",
      description: "Tailored support packages designed for your specific business needs",
      benefits: [
        "Flexible service level agreements",
        "Scalable support based on your requirements",
        "Cost-effective pricing models",
        "Priority response times",
        "Regular on-site maintenance schedules"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black dark">
      <Helmet>
        <title>Cybaem Tech | Managed IT: Server, Cloud, Security & Helpdesk</title>
        <meta name="description" content="Managed IT: server & cloud, firewall/security, backup & recovery, 24/7 monitoring/helpdesk, patching & reports, email hosting & migration, on-site engineers." />
        <link rel="canonical" href="https://www.cybaemtech.com/managed-services" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Server Management, Firewall & Network Security, Cloud Infrastructure, Data Backup & Recovery, 24/7 Monitoring & Helpdesk Support, Scalable Solutions, End-to-End Management, Monthly Health Check Reports, Technology Consulting, Preventive Maintenance, Patch Management, User Access Control, Business-Class Email Hosting, Secure Email Communication, Cloud-Based Mailboxes, Calendars & Collaboration, Email Backup & Archiving, Integration Support, Mobile & Web Access, Migration Services, Admin Panel Access, Dedicated On-Site Engineers, Customised Support Plans" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cybaem Tech | Managed IT: Server, Cloud, Security & Helpdesk" />
        <meta property="og:description" content="End-to-end managed IT: server & cloud, security, backup & recovery, 24/7 monitoring/helpdesk, patching & reports, email hosting/migration, on-site engineers." />
        <meta property="og:url" content="https://www.cybaemtech.com/managed-services" />
        <meta property="og:site_name" content="Cybaem Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybaem Tech | Managed IT: Server, Cloud, Security & Helpdesk" />
        <meta name="twitter:description" content="Server & cloud, security, backup & recovery, 24/7 monitoring/helpdesk, patching & reports, email hosting/migration, on-site engineers." />
      </Helmet>
      
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Header />
      
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-black overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animate-delay-300" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
              <Badge variant="outline" className="mb-6 border-primary text-primary hover-glow">
                Managed Services
              </Badge>
            </div>
            
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-slide-up animate-delay-200' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Complete IT Infrastructure
                <span className="text-primary animate-glow"> Management</span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive managed services including 24/7 infrastructure monitoring, 
                professional email hosting, and dedicated on-premises support for your business.
              </p>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${heroInView ? 'animate-scale-in animate-delay-600' : 'opacity-0'}`}>
              <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-lift group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              
              <a 
  href="https://wa.me/919028541383?text=Hi%20CybaemTech%2C%20I%20am%20interested%20in%20Complete%20IT%20Infrastructure%20Management%20services" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    variant="outline" 
    className="border-white text-white hover:bg-white hover:text-black hover-magnetic"
  >
    Talk to a Managed Services Expert
  </Button>
</a>

            </div>
            
            {/* Floating Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 ${heroInView ? 'animate-slide-up animate-delay-800' : 'opacity-0'}`}>
              {[
                { number: "99.9%", label: "Uptime Guarantee" },
                { number: "24/7", label: "Support Available" },
                { number: "500+", label: "Businesses Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center hover-magnetic">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Service Categories Navigation */}
      <section ref={servicesRef} className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${servicesInView ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of managed IT services
              </p>
            </div>
            
            <div className={`flex flex-col md:flex-row justify-center mb-12 gap-4 transition-all duration-1000 ${servicesInView ? 'animate-slide-up animate-delay-300' : 'opacity-0'}`}>
              {[
                { 
                  id: "infrastructure", 
                  label: "IT Infrastructure", 
                  count: 12,
                  icon: Server,
                  description: "Complete infrastructure management"
                },
                { 
                  id: "email", 
                  label: "Email Hosting", 
                  count: 9,
                  icon: Mail,
                  description: "Professional email solutions"
                },
                { 
                  id: "onpremises", 
                  label: "On-Premises Support", 
                  count: 2,
                  icon: HeadphonesIcon,
                  description: "Dedicated on-site assistance"
                }
              ].map((category, index) => (
                <Button
                  key={category.id}
                  variant={activeSection === category.id ? "default" : "outline"}
                  onClick={() => setActiveSection(category.id)}
                  className={`group relative px-8 py-6 text-left transition-all duration-300 hover-lift ${
                    activeSection === category.id 
                      ? "bg-primary text-white border-primary" 
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <category.icon className={`h-6 w-6 ${activeSection === category.id ? 'text-white' : 'text-primary'}`} />
                    <div>
                      <div className="font-semibold text-lg">
                        {category.label} ({category.count})
                      </div>
                      <div className={`text-sm ${activeSection === category.id ? 'text-gray-200' : 'text-gray-400'}`}>
                        {category.description}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Managed IT Infrastructure Services */}
      {activeSection === "infrastructure" && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Hero Image Section */}
              <div className="relative mb-16 overflow-hidden rounded-3xl">
                <div className="relative h-64 md:h-96">
                  <img 
                    src={managedInfrastructure} 
                    alt="Managed IT Infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white animate-fade-in">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        IT Infrastructure & Services
                      </h2>
                      <p className="text-xl md:text-2xl">
                        Complete infrastructure management with 24/7 monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {infrastructureServices.map((service, index) => (
                  <Card 
                    key={index} 
                    className={`bg-gray-900 border-gray-800 card-interactive hover-lift group animate-fade-in animate-delay-${(index % 6 + 1) * 100}`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Additional Features */}
              <div className="mt-16 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { icon: CheckCircle, label: "99.9% Uptime" },
                    { icon: Shield, label: "Enterprise Security" },
                    { icon: Clock, label: "24/7 Monitoring" },
                    { icon: Star, label: "Expert Support" }
                  ].map((feature, index) => (
                    <div key={index} className="flex flex-col items-center hover-magnetic animate-scale-in animate-delay-300">
                      <feature.icon className="h-12 w-12 text-primary mb-3 animate-float" />
                      <span className="text-white font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Email Hosting Services */}
      {activeSection === "email" && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Hero Image Section */}
              <div className="relative mb-16 overflow-hidden rounded-3xl">
                <div className="relative h-64 md:h-96">
                  <img 
                    src={emailHosting} 
                    alt="Email Hosting Services"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white animate-fade-in">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Email Hosting Services
                      </h2>
                      <p className="text-xl md:text-2xl">
                        Professional business email with enterprise-grade security
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {emailServices.map((service, index) => (
                  <Card 
                    key={index} 
                    className={`bg-gray-900 border-gray-800 card-interactive hover-lift group animate-slide-in-left animate-delay-${(index % 6 + 1) * 100}`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {service.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Email Features Highlight */}
              <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Why Choose Our Email Hosting?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { value: "99.9%", label: "Email Uptime" },
                    { value: "10GB+", label: "Storage per Mailbox" },
                    { value: "24/7", label: "Email Support" },
                    { value: "256-bit", label: "SSL Encryption" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center hover-magnetic animate-scale-in animate-delay-400">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced On-Premises Support */}
      {activeSection === "onpremises" && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Hero Image Section */}
              <div className="relative mb-16 overflow-hidden rounded-3xl">
                <div className="relative h-64 md:h-96">
                  <img 
                    src={onsiteSupport} 
                    alt="On-Premises Support"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white animate-fade-in">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        On-Premises Support
                      </h2>
                      <p className="text-xl md:text-2xl">
                        Dedicated technical expertise at your location
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {onPremisesFeatures.map((feature, index) => (
                  <Card 
                    key={index} 
                    className={`bg-gray-900 border-gray-800 card-interactive hover-lift group animate-slide-in-${index === 0 ? 'left' : 'right'} animate-delay-300`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          {index === 0 ? (
                            <HeadphonesIcon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                          ) : (
                            <Briefcase className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                          )}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-white text-2xl mb-3 group-hover:text-primary transition-colors">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-gray-300 text-lg leading-relaxed">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                        <ul className="space-y-3">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-3 group-hover:translate-x-2 transition-transform">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 leading-relaxed">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <Link to="/contact">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all group-hover:scale-105">
                          Contact Our Team
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Support Comparison Table */}
              <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Response Time Guarantees</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { type: "Critical Issues", time: "< 1 Hour", description: "System down, security breach" },
                    { type: "High Priority", time: "< 4 Hours", description: "Performance issues, minor outages" },
                    { type: "Standard Support", time: "< 24 Hours", description: "General maintenance, questions" }
                  ].map((tier, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-black border border-gray-700 hover-lift animate-scale-in animate-delay-500">
                      <div className="text-2xl font-bold text-primary mb-2">{tier.time}</div>
                      <div className="text-lg font-semibold text-white mb-2">{tier.type}</div>
                      <div className="text-gray-300 text-sm">{tier.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Why Choose Our Managed Services */}
      <section ref={benefitsRef} className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float animate-delay-400" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${benefitsInView ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose Our <span className="text-primary">Managed Services?</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the difference with our comprehensive approach to IT management and 
                discover why hundreds of businesses trust us with their technology infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: Clock, 
                  title: "24/7 Support", 
                  description: "Round-the-clock monitoring and technical assistance with guaranteed response times",
                  stats: "< 15 min response"
                },
                { 
                  icon: Shield, 
                  title: "Enhanced Security", 
                  description: "Enterprise-grade security protocols and compliance with industry standards",
                  stats: "99.99% secure"
                },
                { 
                  icon: TrendingUp, 
                  title: "Scalable Solutions", 
                  description: "Infrastructure that grows with your business needs and adapts to changes",
                  stats: "500+ scalable deployments"
                },
                { 
                  icon: Users, 
                  title: "Expert Team", 
                  description: "Certified professionals with extensive experience and ongoing training",
                  stats: "50+ certified experts"
                }
              ].map((benefit, index) => (
                <Card 
                  key={index} 
                  className={`bg-black border-gray-700 text-center card-interactive hover-lift group transition-all duration-1000 ${
                    benefitsInView ? `animate-scale-in animate-delay-${(index + 1) * 200}` : 'opacity-0'
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors mb-4">
                      <benefit.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform animate-float" />
                    </div>
                    <CardTitle className="text-white text-xl group-hover:text-primary transition-colors">
                      {benefit.title}
                    </CardTitle>
                    <div className="text-primary font-bold text-lg">{benefit.stats}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className={`mt-20 text-center transition-all duration-1000 ${benefitsInView ? 'animate-slide-up animate-delay-800' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-8">Trusted by Industry Leaders</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                {["Fortune 500", "SMB Leaders", "Tech Startups", "Healthcare"].map((segment, index) => (
                  <div key={index} className="text-center hover-magnetic">
                    <div className="text-4xl font-bold text-primary mb-2">{index * 25 + 100}+</div>
                    <div className="text-gray-300 text-sm">{segment}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float animate-delay-500" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your 
                <span className="text-primary animate-glow"> IT Infrastructure?</span>
              </h2>
            </div>
            
            <div className="animate-slide-up animate-delay-300">
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Let our managed services team handle your IT infrastructure while you focus on growing your business. 
                Join hundreds of satisfied clients who trust us with their technology needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-scale-in animate-delay-600">
              <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-lift group px-8 py-4 text-lg">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
             <a 
  href="https://cybaemtech.com/Managed-IT-Infrastructure-CyberSecurity-and-Cloud-Services.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    variant="outline" 
    className="border-white text-white hover:bg-white hover:text-black hover-magnetic px-8 py-4 text-lg"
  >
    Download Service Brochure
  </Button>
</a>

            </div>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up animate-delay-800">
              {[
                { 
                  title: "Call Us Now", 
                  info: "+91 9028541383",
                  description: "Speak with our experts"
                },
                { 
                  title: "Email Support", 
                  info: "info@cybaemtech.com",
                  description: "Get detailed information"
                },
                { 
                  title: "Response Time", 
                  info: "< 15 minutes",
                  description: "For urgent inquiries"
                }
              ].map((contact, index) => (
                <div key={index} className="text-center hover-magnetic">
                  <div className="text-lg font-semibold text-white mb-2">{contact.title}</div>
                  <div className="text-primary font-bold text-xl mb-1">{contact.info}</div>
                  <div className="text-gray-400 text-sm">{contact.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedServices;
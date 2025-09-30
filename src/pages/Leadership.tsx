import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Award, Star, Trophy, Users, Shield, Globe } from "lucide-react";
import { Helmet } from "react-helmet";
import technologyPartners from "@/assets/technology-partners.jpg";
import industryExpertise from "@/assets/industry-expertise.jpg";
import globalNetwork from "@/assets/global-network.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Leadership = () => {
  // Awards data
  const recentAwards = [{
    year: "2024",
    title: "Technology Innovation Award",
    organization: "Global Tech Excellence",
    description: "Recognized for groundbreaking AI solutions in enterprise digital marketing",
    category: "Technology"
  }, {
    year: "2024",
    title: "Best Workplace Culture",
    organization: "Corporate Excellence Institute",
    description: "Honored for creating an inclusive and innovative workplace environment",
    category: "Workplace"
  }, {
    year: "2023",
    title: "Cybersecurity Excellence Award",
    organization: "Security Industry Association",
    description: "Acknowledged for exceptional cybersecurity solutions and threat mitigation",
    category: "Security"
  }, {
    year: "2023",
    title: "Digital Marketing Leader",
    organization: "Business Technology Awards",
    description: "Recognized as a leading provider of digital marketing services",
    category: "Business"
  }];
  const industryAwards = [{
    icon: <Trophy className="h-8 w-8 text-cyan-400" />,
    title: "Top Technology Consulting Firm",
    description: "Ranked among the top 10 technology consulting firms globally",
    year: "2024"
  }, {
    icon: <Star className="h-8 w-8 text-purple-400" />,
    title: "Customer Excellence Award",
    description: "Recognized for outstanding client satisfaction and service delivery",
    year: "2024"
  }, {
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    title: "Security Solutions Provider of the Year",
    description: "Awarded for innovative cybersecurity solutions and implementations",
    year: "2023"
  }, {
    icon: <Globe className="h-8 w-8 text-green-400" />,
    title: "Global Impact Award",
    description: "Honored for positive impact across international markets",
    year: "2023"
  }];
  const certifications = [{
    name: "ISO 27017:2015",
    description: "Information Security Management System",
    category: "Security"
  }, {
    name: "ISO 27001:2022",
    description: "Quality Management System",
    category: "Quality"
  }];
  const mediaFeatures = [{
    publication: "TechCrunch",
    title: "CybaemTech: Pioneering the Future of Enterprise AI",
    date: "March 2024",
    type: "Feature Article"
  }, {
    publication: "Forbes",
    title: "The Rise of Ethical AI in Business Transformation",
    date: "February 2024",
    type: "Industry Analysis"
  }, {
    publication: "Harvard Business Review",
    title: "Digital Leadership in the Post-Pandemic World",
    date: "January 2024",
    type: "Case Study"
  }, {
    publication: "Wired",
    title: "The Security-First Approach to Cloud Migration",
    date: "December 2023",
    type: "Expert Opinion"
  }];
  const executives = [{
    name: "Rohan Bhosale",
    linkedin: "https://www.linkedin.com/in/rohan-bhosale-a1835719/",
    title: "Founder & CEO",
    role: "Global IT Strategy & Digital Marketing",
    experience: "18+",
    subtitle: "Leading digital marketing initiatives across Fortune 500 companies",
    specializations: ["Cloud Architecture", "Digital Strategy", "Enterprise Solutions"],
    image: "/lovable-uploads/rohan_bhosale.jpg",
    accentColor: "212 77% 45%",
    // Blue
    quote: "Innovation is not just about technology; it's about transforming possibilities into reality."
  }, {
    name: "Akshay Navale",
    linkedin: "https://www.linkedin.com/in/akshay-navle-2929a245/",
    title: "Chief Technology Officer",
    role: "AI Strategy & Product Leadership | Driving Innovation & Scalable Tech Solutions",
    experience: "15+",
    subtitle: "Architecting next-generation technology solutions & leading innovation teams",
    specializations: ["AI/ML", "Cybersecurity", "Cloud Infrastructure"],
    image: "/lovable-uploads/an2.png",
    accentColor: "160 77% 45%",
    // Teal
    quote: "The future belongs to those who embrace AI-Tech as a force for positive change."
  }, {
    name: "Yash Bhalekar",
    linkedin: "https://www.linkedin.com/in/yash-bhalekar-4366b3277/",
    title: "Director",
    role: "Business Development",
    experience: "12+",
    subtitle: "Driving financial excellence and strategic growth across global operations",
    specializations: ["FinTech Solutions", "Investment Strategy", "Risk Management"],
    image: "/lovable-uploads/yb.png",
    accentColor: "45 77% 45%",
    // Orange
    quote: "Financial innovation drives technological possibilities and sustainable growth."
  }, {
    name: "Sachin Aghao",
    linkedin: "https://www.linkedin.com/in/sachin-aghao-ba991619/",
    title: "Senior Business Development",
    role: "Global Market Expansion",
    experience: "10+",
    subtitle: "Expanding global partnerships and driving business growth across emerging markets",
    specializations: ["Market Strategy", "Partnership Development", "Global Sales"],
    image: "/lovable-uploads/sachin_aghao.jpg",
    accentColor: "280 77% 45%",
    // Purple
    quote: "Success in global markets comes from understanding local needs with global solutions."
  }];
  return <div className="min-h-screen bg-black text-white overflow-hidden">
    <Helmet>
      <title>Leadership | Cybaem Tech: Rohan Bhosale & Leadership Team</title>
      <meta name="description" content="Cybaem Tech leadership: Rohan Bhosale (CEO), Akshay Navale (CTO), Yash Bhalekar (Director), Sachin Aghao (Sr BD) & Pramod Lohgaonkar (Digital Marketing)." />
      <link rel="canonical" href="https://www.cybaemtech.com/leadership" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="Cybaem Tech Leadership, Rohan Bhosale, Akshay Navale, Yash Bhalekar, Sachin Aghao, Pramod Lohgaonkar, CEO, CTO, Director, Senior Business Development, Digital Marketing Specialist, Cloud Architecture, Digital Strategy, Enterprise Solutions, AI ML, Cybersecurity, FinTech, Global Sales" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Leadership | Cybaem Tech: Rohan Bhosale & Leadership Team" />
      <meta property="og:description" content="Meet the leaders guiding Cybaem Tech across cloud, AI/ML, cybersecurity, enterprise solutions, business development and digital marketing." />
      <meta property="og:url" content="https://www.cybaemtech.com/leadership" />
      <meta property="og:site_name" content="Cybaem Tech" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Leadership | Cybaem Tech: Rohan Bhosale & Leadership Team" />
      <meta name="twitter:description" content="Leaders across cloud, AI/ML, cybersecurity, enterprise solutions, BD and digital marketing." />
    </Helmet>

    <Header />

    {/* Hero Section */}
    <section className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glowing effect behind title */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-3xl"></div>

          <h1 className="relative text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
            Leadership & Recognition
          </h1>
          <p className="relative text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our visionary leaders and discover the awards that recognize our excellence in technology innovation, digital marketing, and industry leadership.
          </p>
        </div>
      </div>
    </section>

    {/* Executive Leadership */}
    <section className="py-20 bg-black border-gold relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({
            length: 144
          }).map((_, i) => <div key={i} className="border border-primary/20"></div>)}
        </div>
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {executives.map((executive, index) => <div key={index} className={`group card-interactive hover-lift bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 animate-fade-in animate-delay-${index * 200 + 200}`} style={{
              '--accent-color': executive.accentColor
            } as React.CSSProperties}>
              {/* Header with Photo and Experience Badge */}
              <div className="flex items-start gap-6 mb-6">
                {/* Hexagonal Photo Frame */}
                <div className="relative">
                  <div
                    className="w-32 h-32 relative overflow-hidden animate-glow rounded-full"
                    style={{
                      backgroundColor: `hsl(${executive.accentColor} / 0.1)`,
                      borderRadius: '50%'
                    }}
                  >

                    <img src={executive.image} alt={executive.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg animate-pulse" style={{
                    backgroundColor: `hsl(${executive.accentColor})`
                  }}>
                    {executive.experience}Y
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {executive.name}
                  </h3>
                  <div className="text-lg font-semibold mb-1" style={{
                    color: `hsl(${executive.accentColor})`
                  }}>
                    {executive.title}
                  </div>
                  <p className="text-sm text-muted-foreground">{executive.role}</p>
                </div>
              </div>

              {/* Subtitle Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {executive.subtitle}
              </p>

              {/* Specializations */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {executive.specializations.map((spec, specIndex) => <span key={specIndex} className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105" style={{
                    backgroundColor: `hsl(${executive.accentColor} / 0.1)`,
                    borderColor: `hsl(${executive.accentColor} / 0.3)`,
                    color: `hsl(${executive.accentColor})`
                  }}>
                    {spec}
                  </span>)}
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-4 pl-4 mb-6" style={{
                borderColor: `hsl(${executive.accentColor})`
              }}>
                <p className="text-sm italic text-muted-foreground">
                  "{executive.quote}"
                </p>
              </div>

              {/* Footer with LinkedIn */}
              <div className="flex justify-between items-center pt-4 border-t border-border/50">
                <div className="text-xs text-muted-foreground">
                  {executive.experience} years of experience
                </div>
                <div className="hover-magnetic p-2 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-lg" style={{
                  backgroundColor: `hsl(${executive.accentColor} / 0.1)`,
                  border: `1px solid hsl(${executive.accentColor} / 0.3)`
                }}>
                  <a href={executive.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" style={{
                      color: `hsl(${executive.accentColor})`
                    }} />
                  </a>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </section>

    {/* Leadership Philosophy */}
    <section className="py-16 bg-black ">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-teal-400">Our Leadership Philosophy</h2>
          <p className="text-lg mb-8 text-slate-50">
            At CybaemTech, our leadership philosophy is built on transparency, innovation, and servant leadership.
            We believe that great leaders create more leaders, and our approach focuses on empowering our teams
            to achieve extraordinary results while maintaining the highest ethical standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-400">Lead by Example</h3>
              <p className="text-slate-50">
                Our leaders demonstrate the values and behaviors we expect from our entire organization.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-400">Empower Others</h3>
              <p className="text-slate-50">
                We believe in empowering our teams with the tools, resources, and autonomy they need to succeed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-teal-400">Drive Innovation</h3>
              <p className="text-slate-50">
                We foster a culture of innovation where new ideas are welcomed and failure is seen as learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Premier Partnerships */}
    <section className="py-16 bg-gradient-to-br from-slate-900 via-black to-slate-800">
      {/* Glowing background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-40 bg-gradient-to-r from-teal-400/30 via-blue-400/20 to-purple-400/30 blur-2xl opacity-40"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-teal-300 tracking-tight animate-pulse">
            Premier Partnerships
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            We collaborate with global technology leaders and industry experts to deliver
            innovative IT services that exceed client expectations.
          </p>

          {/* Partnership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: technologyPartners,
                title: "Technology Partners",
                desc: "Strategic alliances with top technology providers ensuring cutting-edge solutions for cloud, cybersecurity, and digital transformation."
              },
              {
                image: industryExpertise,
                title: "Industry Expertise",
                desc: "Collaboration with domain experts across healthcare, finance, retail, and manufacturing to deliver specialized solutions."
              },
              {
                image: globalNetwork,
                title: "Global Network",
                desc: "Worldwide partnerships enabling seamless project delivery, 24/7 support, and access to global talent pools."
              }
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-black/80 border border-slate-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 hover:border-teal-400/50"
              >
                <div className="mb-4 h-52 rounded-lg overflow-hidden flex items-center justify-center bg-slate-900">
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-300">
                  {partner.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Partner Logos Grid */}
          {/* <div className="mt-4 mb-16">
        <div className="flex justify-center mb-8">
          <span className="inline-block w-24 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 rounded-full opacity-60"></span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {[
            {
              src: "/lovable-uploads/Logo1.webp",
              alt: "Microsoft"
            },
            {
              src: "/lovable-uploads/Logo2.webp",
              alt: "Dell"
            },
            {
              src: "/lovable-uploads/Logo3.webp",
              alt: "HP"
            },
            {
              src: "/lovable-uploads/Logo4.webp",
              alt: "Lenovo"
            },
            {
              src: "/lovable-uploads/Logo5.webp",
              alt: "AWS"
            },
            {
              src: "/lovable-uploads/Logo6.webp",
              alt: "Azure"
            },
            {
              src: "/lovable-uploads/Logo7.webp",
              alt: "Fortinet"
            },
            {
              src: "/lovable-uploads/Logo8.webp",
              alt: "Sophos"
            },
            {
              src: "/lovable-uploads/Logo9.webp",
              alt: "ESET"
            },
            {
              src: "/lovable-uploads/Logo10.webp",
              alt: "Tata Tele Business Services"
            },
            {
              src: "/lovable-uploads/Logo11.webp",
              alt: "Mass"
            },
          ].map((partner, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 border border-gray-800"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-32 h-32 object-contain rounded-xl bg-transparent"
                style={{ background: "transparent" }}
              />
              <span className="mt-4 text-base font-semibold text-gray-200">{partner.alt}</span>
            </div>
          ))}
        </div>
      </div> */}

          {/* Why Partner Section */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-lg mb-4">
            <h3 className="text-2xl font-bold mb-6 text-center text-teal-300">Why Partner With CybaemTech?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: "Proven Track Record",
                  desc: "18+ years of delivering IT solutions to 75+ clients worldwide."
                },
                {
                  title: "Innovation First",
                  desc: "Early adoption of cutting-edge tech and custom solution development."
                },
                {
                  title: "Scalable Solutions",
                  desc: "Flexible IT infrastructure that evolves with business needs."
                },
                {
                  title: "24/7 Support",
                  desc: "Round-the-clock technical support and managed services."
                }
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold mb-2 text-teal-400">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Divider and extra space before Certifications */}
    <div className="my-16 flex justify-center">
      <span className="inline-block w-32 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 rounded-full opacity-70"></span>
    </div>

    {/* Certifications */}
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-teal-400">Certifications & Partnerships</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* ISO 27001:2022 Card */}
            <Card className="w-full md:w-[600px] max-w-[600px] min-h-[480px] bg-slate-800/60 border-slate-700 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 text-center hover:bg-slate-800/80 transition-all duration-300">
              <div className="mb-4">
                <img src="/lovable-uploads/ISO/27001.jpg" alt="ISO 27001:2022 Logo" className="w-20 h-20 object-contain mx-auto rounded-xl" />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-bold text-white mb-2">ISO 27001:2022</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  <span className="font-semibold text-blue-300">Information Security Management System (ISMS)</span><br />
                  This certification is the international standard for managing information security. It provides a robust framework for establishing, implementing, maintaining, and continually improving a system to protect sensitive information.<br /><br />
                  <span className="font-semibold text-blue-300">What it means for you:</span> The ISO 27001:2022 certification assures our clients that Cybaem has a formal, systematic approach to managing risks to data confidentiality, integrity, and availability. It means we have a comprehensive system in place to identify potential threats, assess their impact, and implement controls to mitigate them. Your data is protected by a global standard of excellence.<br /><br />
                  <span className="font-semibold text-blue-300">What it is NOT:</span> This certification is focused purely on the security of information assets. While our IT operations are a part of this, the certification does not validate our processes for service delivery, incident management, or change management, which are separate aspects of our overall service quality.
                </CardDescription>
              </CardHeader>
            </Card>
            {/* ISO 27017:2015 Card */}
            <Card className="w-full md:w-[600px] max-w-[600px] min-h-[480px] bg-slate-800/60 border-slate-700 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 text-center hover:bg-slate-800/80 transition-all duration-300">
              <div className="mb-4">
                <img src="/lovable-uploads/ISO/27017.png" alt="ISO 27017:2015 Logo" className="w-20 h-20 object-contain mx-auto rounded-xl" />
              </div>
              <CardHeader className="p-0 mb-2">
                <CardTitle className="text-2xl font-bold text-white mb-2">ISO 27017:2015</CardTitle>
                <CardDescription className="text-gray-300 text-base">
                  <span className="font-semibold text-blue-300">Cloud Security Controls</span><br />
                  Building upon the foundation of ISO 27001, this certification is a code of practice specifically for information security controls in a cloud computing environment. It provides additional guidance and controls for both cloud service providers and customers.<br /><br />
                  <span className="font-semibold text-blue-300">What it means for you:</span> As a provider of cloud services, this certification demonstrates our robust security measures tailored for the cloud. It signifies that we have specific controls in place for critical aspects of cloud security, such as data segregation, securing virtual environments, and handling security incidents within a cloud context. This gives you confidence that our cloud offerings meet the highest security standards.<br /><br />
                  <span className="font-semibold text-blue-300">What it is NOT:</span> Like ISO 27001, the ISO 27017 certification is an extension of our security framework and does not cover the full scope of our service management processes. Its focus remains on the unique security challenges and requirements of cloud computing.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          {/* Dual Certification Advantage Box */}
          <div className="mt-10 bg-slate-900/80 rounded-2xl p-8 shadow-lg text-center max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Our Dual Certification Advantage</h4>
            <p className="text-gray-200 text-base">
              By holding both the <span className="font-semibold text-blue-300">ISO 27001:2022</span> and <span className="font-semibold text-blue-300">ISO 27017:2015</span> certifications, Cybaem provides a layered assurance of security. We not only have a comprehensive system for protecting all sensitive information (ISO 27001), but we also have specialized, robust controls in place to secure your data in our cloud environments (ISO 27017). These certifications are a testament to our ongoing commitment to security and our promise to be a trusted partner in your success.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Media Coverage */}
    {/* <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Media Coverage</h3>
          <div className="space-y-6">
            {mediaFeatures.map((feature, index) => <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300 hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-cyan-400 font-medium">
                      {feature.publication}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">{feature.type}</Badge>
                    <p className="text-sm text-gray-400 mt-1">{feature.date}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>)}
          </div>
        </div>
      </div>
    </section> */}





    <Footer />
  </div>;
};
export default Leadership;
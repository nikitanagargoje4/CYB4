import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Shield, Zap, Heart, Award, Building, Target, TrendingUp, Calendar, MapPin, Lightbulb, Trophy, Handshake, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AdvancedTimeline from "@/components/AdvancedTimeline";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-black dark">
      <Helmet>
        <title>About Cybaem Tech | IT, Cloud, AI & Cybersecurity</title>
        <meta name="description" content="Get to know Cybaem Tech- your IT partner for Managed IT Support, Cloud & DevOps, AI & Data Analytics, Cybersecurity, and Digital Marketing across Global." />
        <link rel="canonical" href="https://www.cybaemtech.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Cybaem Tech About, Managed IT Support, Cloud & DevOps, AI & Data Analytics, Cybersecurity Services, Digital Marketing, IT Company India, Pune, Hinjewadi" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Cybaem Tech | IT, Cloud, AI & Cybersecurity" />
        <meta property="og:description" content="Learn who we are and how we deliver Managed IT, Cloud & DevOps, AI & Data, Cybersecurity and Digital Marketing solutions that help businesses scale." />
        <meta property="og:url" content="https://www.cybaemtech.com/about" />
        <meta property="og:site_name" content="Cybaem Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Cybaem Tech | IT, Cloud, AI & Cybersecurity" />
        <meta name="twitter:description" content="Your IT partner for Managed IT, Cloud & DevOps, AI & Data, Cybersecurity and Digital Marketing." />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary">
              Leading Technology Solutions Provider | 75+ Satisfied Clients
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              CYBAEM TECH PVT. LTD. is a premier global technology solutions company specializing in innovative IT infrastructure management, software development services, and cloud computing solutions. Founded in 2020 by industry veteran Rohan Bhosale, our experienced team delivers tailored IT solutions that help enterprises optimize operations, enhance security, and achieve scalable business growth.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence and cutting-edge technology has made us the preferred IT partner for 75+ clients across diverse industries. From startup ventures to established enterprises, we provide comprehensive technology consulting, managed IT services, and digital marketing solutions that keep businesses ahead in today's competitive digital landscape.
            </p>
            <a 
              href="https://wa.me/919028541383?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services%20and%20solutions." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="mt-4">
                Learn More About Our Solutions
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Founded in 2020</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Established by industry veteran Rohan Bhosale with a vision to transform businesses through innovative technology solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">75+ Satisfied Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Serving diverse industries with comprehensive technology consulting and managed IT services that drive business growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    From startup ventures to established enterprises, we provide scalable solutions that keep businesses competitive in the digital landscape.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

{/* Core Values */}
      {/* <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We prioritize security in every solution we deliver, ensuring your business data and operations remain protected.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We embrace cutting-edge technology and innovative approaches to solve complex business challenges.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Client Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We build lasting partnerships with our clients, understanding their unique needs and delivering tailored solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our clients trust us to deliver consistent, reliable solutions that support their business operations 24/7.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">Global Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We bring a global perspective to local challenges, leveraging international best practices and expertise.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}


{/* Core Values */}
<section className="pt-4 pb-12 md:pt-8 md:pb-64 bg-gradient-to-b from-black via-indigo-900 to-black flex flex-col items-center">
  <div className="text-center mb-16 md:mb-24 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
  </div>
  <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[420px] md:max-w-[600px] lg:max-w-[700px] aspect-square">
    {/* Center Orb - Bigger & Brighter */}
    <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center
      w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px]
      bg-gradient-to-br from-white via-blue-100 to-white
      backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]
      border border-white/50 z-20">
      <img
        src="/lovable-uploads/Business_Acumen.png"
        alt="Core Values Word Cloud"
        className="max-w-[90%] h-auto drop-shadow-2xl relative z-10"
      />
    </div>
    {/* Cards in a circle */}
    {/* Top */}
    <div className="absolute left-1/2 top-[-5%] -translate-x-1/2 z-10">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-40 sm:w-44 md:w-48">
        <CardHeader className="p-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white text-base md:text-lg text-center">Security First</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-200 text-sm md:text-base text-center">
            We prioritize security in every solution we deliver.
          </p>
        </CardContent>
      </Card>
    </div>
    {/* Top Left */}
    <div className="absolute left-[5%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-10">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-40 sm:w-44 md:w-48">
        <CardHeader className="p-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white text-base md:text-lg text-center">Global Perspective</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-200 text-sm md:text-base text-center">
            Bringing global expertise to local challenges.
          </p>
        </CardContent>
      </Card>
    </div>
    {/* Top Right */}
    <div className="absolute left-[95%] top-[35%] -translate-x-1/2 -translate-y-1/2 z-10">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-40 sm:w-44 md:w-48">
        <CardHeader className="p-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white text-base md:text-lg text-center">Innovation</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-200 text-sm md:text-base text-center">
            Embracing cutting-edge technology for business.
          </p>
        </CardContent>
      </Card>
    </div>
    {/* Bottom Left */}
    <div className="absolute left-[5%] top-[85%] -translate-x-1/2 -translate-y-1/2 z-10">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-40 sm:w-44 md:w-48">
        <CardHeader className="p-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white text-base md:text-lg text-center">Reliability</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-200 text-sm md:text-base text-center">
            Consistent, reliable solutions for business operations.
          </p>
        </CardContent>
      </Card>
    </div>
    {/* Bottom Right */}
    <div className="absolute left-[95%] top-[85%] -translate-x-1/2 -translate-y-1/2 z-10">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-40 sm:w-44 md:w-48">
        <CardHeader className="p-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
            <Users className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white text-base md:text-lg text-center">Client Partnership</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-200 text-sm md:text-base text-center">
            We build lasting partnerships with our clients.
          </p>
        </CardContent>
      </Card>
    </div>
    {/* Bottom */}
    <div className="absolute left-1/2 top-[140%] -translate-x-1/2 -translate-y-full z-10">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg w-40 sm:w-44 md:w-48 mb-16 md:mb-24">
        <CardHeader className="p-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
            <Award className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-white text-base md:text-lg text-center">Excellence</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-gray-200 text-sm md:text-base text-center">
            Delivering high-quality solutions that exceed expectations.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>



      {/* Our Journey Timeline */}
      <AdvancedTimeline />

      {/* Company Statistics */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">CYBAEM TECH by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">75+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Let's discuss how CYBAEM TECH can help you optimize operations, enhance security, and achieve scalable business growth.
            </p>
            <Link to="/contact">
            <Button variant="default" size="lg">
              Contact Us Today
            </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
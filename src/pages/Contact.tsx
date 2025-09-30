import { useEffect, useState } from "react";
import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Mail, Phone, MapPin, Clock, Send, Globe, Building } from "lucide-react";
import { Mail, Phone, MapPin, Clock, Send, Globe, Building, RotateCcw } from "lucide-react";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import { FaXTwitter } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouPage from "@/components/ThankYou";
import { toast } from "sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Shield, Users, Award, HeadphonesIcon } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  sourcePage: z.string().optional(),
  captcha: z.string().min(1, "Please solve the captcha"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const whyChooseReasons = [
  {
    icon: CheckCircle,
    title: "Free 30-minute strategy session",
    description: "Get expert consultation at no cost to understand your business needs.",
  },
  {
    icon: Shield,
    title: "Certified experts & consultants",
    description: "Work with industry-certified professionals with proven track records.",
  },
  {
    icon: Users,
    title: "Flexible scheduling worldwide",
    description: "Book consultations at your convenience across different time zones.",
  },
  {
    icon: Award,
    title: "Customized solution roadmap",
    description: "Receive tailored recommendations specific to your business requirements.",
  },
];

const faqs = [
  {
    question: "How quickly will you respond?",
    answer: "We typically respond to all inquiries within 2-4 business hours. For urgent matters, please call us directly at +91 90 2854 1383.",
  },
  {
    question: "Do you offer a free initial consultation?",
    answer: "Yes, we provide a complimentary 30-minute consultation to understand your requirements and discuss how our services can benefit your business.",
  },
  {
    question: "Can you sign an NDA before we share details?",
    answer: "Absolutely. We understand the importance of confidentiality and are happy to sign a Non-Disclosure Agreement before discussing your project details.",
  },
  {
    question: "What engagement models do you support?",
    answer: "We offer flexible engagement models including project-based, dedicated team, staff augmentation, and managed services to suit your specific needs and budget.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-deployment support including maintenance, updates, monitoring, and technical assistance based on agreed SLAs.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve various industries including healthcare, finance, e-commerce, manufacturing, education, and government sectors with tailored technology solutions.",
  },
];

const whereWeServeIndia = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad"];
const whereWeServeGlobal = ["USA", "UK", "Canada", "Australia", "UAE"];

const contactFormRightInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Suratwala Mark Plazzo, Hinjawadi, Pune, Maharashtra 411057",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-9028541383",
    link: "tel:+919028541383",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@cybaemtech.com",
    link: "mailto:sales@cybaemtech.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "24/7",
  },
];

const socialLinks = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", url: "https://www.facebook.com/cybaemtech/", label: "Facebook" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg", url: "https://x.com/Cybaem_Tech", label: "X (Twitter)" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", url: "https://in.linkedin.com/company/cybaemtech?trk=public_post_follow-view-profile", label: "LinkedIn" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", url: "https://www.instagram.com/cybaemtech/", label: "Instagram" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", url: "https://wa.me/+919028541383", label: "WhatsApp" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png", url: "https://www.youtube.com/@cybaemtech", label: "YouTube" },
];

const Contact = () => {
  const [sourcePage, setSourcePage] = useState<string>("");
  const [captchaText, setCaptchaText] = useState<string>("");
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      sourcePage: "",
      captcha: "",
    },
  });

  const generateCaptcha = () => {
    // Generate random 6-character string
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    
    // Draw captcha on canvas
    setTimeout(() => drawCaptcha(result), 100);
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set background
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw text with distortion
    ctx.font = 'bold 24px Arial';
    ctx.textBaseline = 'middle';
    
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
    
    for (let i = 0; i < text.length; i++) {
      ctx.save();
      
      // Random color for each character
      ctx.fillStyle = colors[i % colors.length];
      
      // Position with some randomness
      const x = 20 + i * 25 + Math.random() * 10 - 5;
      const y = canvas.height / 2 + Math.random() * 10 - 5;
      
      // Rotate character slightly
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
    
    // Add noise lines
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
    
    // Add noise dots
    ctx.fillStyle = '#6b7280';
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  useEffect(() => {
    // Capture source page information
    const referrer = document.referrer || "Direct";
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source") || referrer;
    setSourcePage(source);
    form.setValue("sourcePage", source);
    
    // Generate initial captcha
    generateCaptcha();
  }, [form]);

  const onSubmit = async (data: ContactFormData) => {
    // Verify captcha
    if (data.captcha.toUpperCase() !== captchaText) {
      alert("Incorrect captcha answer. Please try again.");
      generateCaptcha();
      form.setValue("captcha", "");
      return;
    }

    try {
      // Simulate form submission for demo purposes
      // In production, replace this with actual API call
      console.log("Form submitted:", data);

      setShowThankYou(true);

      // Scroll to top of ThankYou page after rendering
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);

      
      const response = await fetch("https://www.cybaemtech.com/cybaem_contact/contact_v2.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          captcha: undefined, // Don't send captcha to server
        }),
      });

      if (response.ok) {
        setShowThankYou(true);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        alert("Something went wrong. Please try again.");
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleBackToForm = () => {
    setShowThankYou(false);
    form.reset();
    generateCaptcha();
  };

  // Show thank you page if form was successfully submitted
  if (showThankYou) {
    return <ThankYouPage onBack={handleBackToForm} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1c]">
      <Helmet>
        <title>Contact Cybaem Tech | IT, Cloud, Managed Services & Security</title>
        <meta
          name="description"
          content="Contact Cybaem Tech for IT, Cloud, AI & Cybersecurity. Address: Suratwala Mark Plazzo, Hinjawadi, Pune 411057. Email: sales@cybaemtech.com. Call: +91 9028541383."
        />
        <link rel="canonical" href="https://www.cybaemtech.com/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Cybaem Tech | IT, Cloud, Managed Services & Security" />
        <meta
          property="og:description"
          content="Address: Suratwala Mark Plazzo, Hinjawadi, Pune 411057. Email: sales@cybaemtech.com. Call: +91 9028541383."
        />
        <meta property="og:url" content="https://www.cybaemtech.com/contact" />
        <meta property="og:site_name" content="Cybaem Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Cybaem Tech | IT, Cloud, Managed Services & Security" />
        <meta
          name="twitter:description"
          content="Address: Suratwala Mark Plazzo, Hinjawadi, Pune 411057. Email: sales@cybaemtech.com. Call: +91 9028541383."
        />
      </Helmet>

      <Header />

      {/* Enhanced Animated Background matching brand colors */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-transparent rounded-b-full blur-2xl opacity-80 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tr from-teal-500/30 via-blue-500/20 to-transparent rounded-t-full blur-2xl opacity-70 animate-float"></div>
        <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-500/15 rounded-full blur-2xl opacity-60 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/25 to-teal-400/10 rounded-full blur-2xl opacity-40 animate-bounce"></div>
      </div>

      {/* Hero Section - Updated to match CybaemTech blue brand theme */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-cyan-900 shadow-2xl z-10">
        {/* Brand-inspired gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-teal-500/20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/20 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 drop-shadow-2xl">
              Let's Build <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent drop-shadow-glow">Something</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium drop-shadow-lg">
              At Cybaem Tech, we transform challenges into growth. Whether you need Cloud Migration, AI Integration, DevOps, IT Support, or Digital Marketing — we're just one message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="bg-gradient-to-r from-blue-500 via-cyan-600 to-teal-600 hover:from-blue-600 hover:via-cyan-700 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-cyan-400/40 border-0"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message & Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-cyan-300 text-cyan-100 hover:bg-cyan-300 hover:text-blue-900 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-blue-800/60 via-cyan-800/60 to-teal-800/60 backdrop-blur-sm"
              >
                <a href="tel:+919028541383">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-bold">Call Now: +91-9028-541-383</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Enhanced glossy overlays matching brand */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/15 via-cyan-100/5 to-transparent rounded-b-3xl blur-lg"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-gradient-to-t from-white/10 via-blue-100/5 to-transparent rounded-t-3xl blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-teal-400/10 rounded-full blur-3xl opacity-60"></div>
        </div>
      </section>

      {/* Contact Information Cards (Commented Out) */}
      {/*
      <section className="py-12 md:py-16">
        <div className="container mx-auto mobile-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 md:hover:transform md:hover:scale-105 hover:shadow-xl md:hover:shadow-2xl hover:shadow-primary/20 group touch-card"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-3 md:mb-4 flex justify-center">
                    <div className="p-2 md:p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 md:mb-3 text-sm md:text-base">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-xs md:text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Contact Form and Office Locations */}
      <section id="contact-form" className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Quick Contact <span className="text-primary">Form</span>
            </h2> 
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-gray-900/80 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Request a Free Consultation
                </CardTitle>
                <p className="text-gray-400 text-sm mt-2">
                  Fill out the form and our experts will reach out within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gray-800 border-gray-700 text-white focus:border-primary/50 focus:ring-primary/20"
                                placeholder="Enter your name"
                                autoComplete="name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Company</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gray-800 border-gray-700 text-white focus:border-primary/50 focus:ring-primary/20"
                                placeholder="Your company name"
                                autoComplete="organization"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-gray-800 border-gray-700 text-white focus:border-primary/50 focus:ring-primary/20"
                                placeholder="your.email@company.com"
                                autoComplete="email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone Number *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-gray-800 border-gray-700 text-white focus:border-primary/50 focus:ring-primary/20"
                                placeholder="+91 98765 43210"
                                autoComplete="tel"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-primary/50">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-800 border-gray-700">
                              <SelectItem value="cloud-solutions" className="text-white">Cloud Solutions</SelectItem>
                              <SelectItem value="cybersecurity" className="text-white">Cybersecurity Services</SelectItem>
                              <SelectItem value="enterprise-solutions" className="text-white">Enterprise Solutions</SelectItem>
                              <SelectItem value="digital-marketing" className="text-white">Digital Marketing</SelectItem>
                              <SelectItem value="ai-data-analytics" className="text-white">AI & Data Analytics</SelectItem>
                              <SelectItem value="managed-services" className="text-white">Managed Services</SelectItem>
                              <SelectItem value="other" className="text-white">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Project Details</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="bg-gray-800 border-gray-700 text-white focus:border-primary/50 focus:ring-primary/20 min-h-[120px]"
                              placeholder="Describe your requirements, timeline, and any specific challenges..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="captcha"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            Security Check: Enter the text shown in the image *
                          </FormLabel>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <canvas
                                ref={canvasRef}
                                width={180}
                                height={60}
                                className="border border-gray-600 rounded bg-gray-800"
                              />
                              <Button
                                type="button"
                                variant="default"
                                size="sm"
                                onClick={() => {
                                  generateCaptcha();
                                  form.setValue("captcha", "");
                                }}
                                className="bg-gray-700 hover:bg-gray-600 text-white rounded-full px-4 py-2 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600 hover:border-gray-500"
                              >
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Refresh Captcha
                              </Button>
                            </div>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                className="bg-gray-800 border-gray-700 text-white focus:border-primary/50 focus:ring-primary/20 max-w-[200px] uppercase"
                                placeholder="Enter captcha text"
                                maxLength={6}
                                onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                                autoComplete="off"
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      Request Free Consultation
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                    <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-300 text-sm">Free Consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-300 text-sm">24h Response Time</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-300 text-sm">Expert Team</span>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Form Right Side Section - Updated to match brand colors */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 border-blue-500 text-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {contactFormRightInfo.map((info, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <info.icon className="w-5 h-5 text-cyan-100 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-cyan-50">{info.label}</h4>
                          {info.link ? (
                            <a href={info.link} className="text-sm text-cyan-100 hover:text-white transition-colors block">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-cyan-100">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-cyan-400">
                    <h4 className="font-semibold text-cyan-50 mb-3">Follow Us</h4>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-300/30"
                          aria-label={social.label}
                        >
                          <img 
                            src={social.logo} 
                            alt={social.label}
                            className="w-6 h-6 object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-sm"
                          />
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                            {social.label}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Map Section */}
              <Card className="bg-gray-900/80 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Find Us on Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-56 md:h-72 rounded-xl overflow-hidden border border-gray-800 shadow-lg shadow-primary/20 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.635261367137!2d73.74575887496471!3d18.59047548251667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b71e64b665df%3A0xf2de2df843c281ce!2sCybaem%20Tech!5e0!3m2!1sen!2sin!4v1758686264653!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CybaemTech Pune Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Consultation (already present below, so removed from above) */}

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto mobile-padding">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our services and processes.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-white hover:text-primary text-left py-4 md:py-6">
                    <span className="text-base md:text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Where We Serve Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto mobile-padding">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Where We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We're here, prepared to serve businesspeople for most business services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">India</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {whereWeServeIndia.map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold text-white">Global</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {whereWeServeGlobal.map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why teams choose Cybaem Tech */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto mobile-padding">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Why teams choose <span className="text-primary">Cybaem Tech</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through proven expertise, transparent practices, and unwavering commitment to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Customer-driven delivery with exceptional tech",
                description: "We prioritize your business needs while delivering cutting-edge technology solutions.",
              },
              {
                icon: Shield,
                title: "Transparent value security teams rely on",
                description: "Our security practices are transparent, reliable, and trusted by enterprise teams worldwide.",
              },
              {
                icon: Award,
                title: "Certified Cloud Profiles and security experts",
                description: "Our team holds industry certifications and deep expertise in cloud and security domains.",
              },
              {
                icon: Users,
                title: "Specialized practice and deep communications",
                description: "We maintain clear communication channels and specialized teams for each technology domain.",
              },
              {
                icon: HeadphonesIcon,
                title: "24/7 availability options for defined SLA",
                description: "Round-the-clock support with clearly defined service level agreements for peace of mind.",
              },
            ].map((reason, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-4">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors w-fit">
                      <reason.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ready When You Are CTA - Updated with brand colors */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto mobile-padding">
          <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/30 transition-all duration-300">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready when you are
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
                Start your journey with us today and experience why over 100+ companies trust us with their digital transformation.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  document.querySelector("form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
              >
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
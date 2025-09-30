import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Shield, RotateCcw } from "lucide-react";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconBrandWhatsapp, IconBrandGoogle } from "@tabler/icons-react";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import ThankYouPage from "@/components/ThankYou"; // or wherever your ThankYou component is

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
    value: "info@cybaemtech.com",
    link: "mailto:info@cybaemtech.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 9am-6pm, Sat: 10am-4pm",
  },
];

// Update socialLinks to use logo URLs and labels for new design
const socialLinks = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", url: "https://www.facebook.com/cybaemtech/", label: "Facebook" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg", url: "https://x.com/Cybaem_Tech", label: "X (Twitter)" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", url: "https://in.linkedin.com/company/cybaemtech?trk=public_post_follow-view-profile", label: "LinkedIn" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", url: "https://www.instagram.com/cybaemtech/", label: "Instagram" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", url: "https://wa.me/+919028541383", label: "WhatsApp" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png", url: "https://www.youtube.com/@cybaemtech", label: "YouTube" },
];

const ContactSection = () => {
  const [sourcePage, setSourcePage] = useState<string>("");
  const [captchaText, setCaptchaText] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

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

  // Captcha generation logic
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setTimeout(() => drawCaptcha(result), 100);
  };

  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 24px Arial';
    ctx.textBaseline = 'middle';
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
    for (let i = 0; i < text.length; i++) {
      ctx.save();
      ctx.fillStyle = colors[i % colors.length];
      const x = 20 + i * 25 + Math.random() * 10 - 5;
      const y = canvas.height / 2 + Math.random() * 10 - 5;
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
    ctx.strokeStyle = '#4b5563';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
    ctx.fillStyle = '#6b7280';
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  useEffect(() => {
    const referrer = document.referrer || "Direct";
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get("source") || referrer;
    setSourcePage(source);
    form.setValue("sourcePage", source);
    generateCaptcha();
  }, [form]);

  const onSubmit = async (data: ContactFormData) => {
    if (data.captcha.toUpperCase() !== captchaText) {
      toast.error("Incorrect captcha answer. Please try again.");
      generateCaptcha();
      form.setValue("captcha", "");
      return;
    }
    try {
      const response = await fetch("https://www.cybaemtech.com/cybaem_contact/contact_v2.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captcha: undefined }),
      });
      // Show Thank You page regardless of response for consistent UX
      form.reset();
      generateCaptcha();
      navigate("/thankyou", { replace: true });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } catch (error) {
      // Still show Thank You page for demo, but you can handle error as needed
      form.reset();
      generateCaptcha();
      navigate("/thankyou", { replace: true });
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    }
  };

  return (
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
  );
};

export default ContactSection;
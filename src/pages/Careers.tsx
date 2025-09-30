import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { toast } from "@/components/ui/use-toast";
import { Search, MapPin, Clock, Users, Code, Brain, Shield, Briefcase, Award, Play, ArrowRight, Plus } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Careers = () => {
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/data/jobs.json", { headers: { "Cache-Control": "no-cache" } });
        const data = await res.json();
        setAllJobs(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Failed to load jobs.json", e);
        toast({ title: "Error loading jobs", description: "Could not load job listings. Please try again later.", variant: "destructive" });
      } finally {
        setLoadingJobs(false);
      }
    };
    load();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedExperienceRanges, setSelectedExperienceRanges] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<"Newest" | "Oldest" | "Relevance">("Newest");
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(filteredJobs.length / pageSize);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Zapier webhook
  const [webhookUrl, setWebhookUrl] = useState("");
  useEffect(() => {
    const stored = localStorage.getItem("zapierWebhookUrl");
    if (stored) setWebhookUrl(stored);
  }, []);
  const saveWebhook = () => {
    const url = webhookUrl.trim();
    if (!url) {
      toast({ title: "Webhook URL required", description: "Paste your Zapier webhook URL.", variant: "destructive" });
      return;
    }
    localStorage.setItem("zapierWebhookUrl", url);
    toast({ title: "Saved", description: "Zapier webhook URL saved locally." });
  };

  // Helpers for filters
  const toggleType = (type: string) => {
    setSelectedTypes(prev => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type); else next.add(type);
      return next;
    });
  };
  const toggleExperience = (range: string) => {
    setSelectedExperienceRanges(prev => {
      const next = new Set(prev);
      if (next.has(range)) next.delete(range); else next.add(range);
      return next;
    });
  };
  const parseExperienceYears = (exp: string) => {
    const match = exp.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const clearFilters = () => {
    setSelectedDepartment("All");
    setLocationQuery("");
    setSelectedTypes(new Set());
    setSelectedExperienceRanges(new Set());
    setSearchTerm("");
    setSortBy("Newest");
  };

  // Compute filtered jobs on every change
  useEffect(() => {
    let result = allJobs.filter(job => {
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.description.toLowerCase().includes(search) ||
        job.skills.some((s: string) => s.toLowerCase().includes(search));

      const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;

      const matchesLocation = !locationQuery || job.location.toLowerCase().includes(locationQuery.toLowerCase());

      const matchesType = selectedTypes.size === 0 || selectedTypes.has(job.type);

      const years = parseExperienceYears(job.experience);
      const matchesExperience =
        selectedExperienceRanges.size === 0 ||
        Array.from(selectedExperienceRanges).some(range => {
          switch (range) {
            case "0-2 years":
              return years <= 2;
            case "2-5 years":
              return years >= 2 && years <= 5;
            case "5-10 years":
              return years >= 5 && years <= 10;
            case "10+ years":
              return years >= 10;
            default:
              return true;
          }
        });

      return matchesSearch && matchesDepartment && matchesLocation && matchesType && matchesExperience;
    });

    if (sortBy === "Newest") result.sort((a, b) => b.id - a.id);
    if (sortBy === "Oldest") result.sort((a, b) => a.id - b.id);

    setFilteredJobs(result);
  }, [allJobs, searchTerm, selectedDepartment, locationQuery, selectedTypes, selectedExperienceRanges, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDepartment, locationQuery, selectedTypes, selectedExperienceRanges, sortBy]);

  // Application dialog state
  const [applyOpen, setApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const teamTestimonials = [
    {
      name: "Sarah Chen",
      role: "Senior AI Engineer",
      quote: "The freedom to innovate and work on cutting-edge projects is incredible. Every day brings new challenges and opportunities to grow.",
      image: "/lovable-uploads/5c70f72d-844c-4444-931d-c70721750d75.png",
      years: "3 years with CybaemTech"
    },
    {
      name: "Michael Rodriguez",
      role: "Cloud Solutions Architect",
      quote: "The collaborative environment and support from leadership makes this the best place I've worked. We truly make an impact.",
      image: "/lovable-uploads/77cb2418-56bd-44ad-8bfd-3651e3cdb2c0.png",
      years: "5 years with CybaemTech"
    },
    {
      name: "Emily Johnson",
      role: "Cybersecurity Consultant",
      quote: "Working here has accelerated my career beyond what I thought possible. The learning opportunities are endless.",
      image: "/lovable-uploads/b8079874-8ce3-4eb4-b9de-d8455fa88779.png",
      years: "2 years with CybaemTech"
    }
  ];

  const handleOpenApply = (job: any) => {
  // Show message instead of opening dialog
  window.alert('Please note: We are not currently accepting applications through this portal. The listed positions are for placeholder purposes only!');
  };

  const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1] || "");
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    if (!webhookUrl) {
      toast({
        title: "Zapier webhook missing",
        description: "Please set your Zapier webhook URL above.",
        variant: "destructive",
      });
      return;
    }

    if (!applicantName || !applicantEmail || !resumeFile) {
      toast({
        title: "Missing fields",
        description: "Name, email and resume are required.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicantEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (resumeFile.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Max file size is 10MB.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const base64 = await fileToBase64(resumeFile);
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          send_to: "info@cybaemtech.com",
          timestamp: new Date().toISOString(),
          triggered_from: window.location.href,
          job: {
            id: selectedJob.id,
            title: selectedJob.title,
            department: selectedJob.department,
            location: selectedJob.location,
            type: selectedJob.type,
            experience: selectedJob.experience,
          },
          applicant: {
            name: applicantName,
            email: applicantEmail,
            phone: applicantPhone,
          },
          resume: {
            filename: resumeFile.name,
            mimeType: resumeFile.type || "application/octet-stream",
            base64,
          },
        }),
      });

      toast({
        title: "Request sent",
        description: "Application sent to Zapier. Check your Zap history to confirm delivery.",
      });
      setApplyOpen(false);
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
      setResumeFile(null);
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast({
        title: "Error",
        description: "Failed to send application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Cybaem Tech Careers | IT Support, Data, ML & Engineering</title>
        <meta name="description" content="Join Cybaem Tech - open roles: Finance Analyst, Tech Writer, Mobile Dev, Data & Solutions Engineers, ML Engineer, IT Support, CSM, HR & Marketing Pune." />
        <link rel="canonical" href="https://www.cybaemtech.com/careers" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Finance Analyst, Technical Writer, Mobile Developer, Data Engineer, Solutions Engineer, Machine Learning Engineer, IT Support Specialist, Customer Success Manager, HR Generalist, Marketing Manager, Careers, Jobs, Cybaem Tech, Pune, Remote" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cybaem Tech Careers | Finance, Data, ML & Engineering" />
        <meta property="og:description" content="We’re hiring: Finance Analyst, Tech Writer, Mobile Dev, Data/Solutions Engineers, ML Engineer, IT Support, CSM, HR & Marketing (Pune/Remote)." />
        <meta property="og:url" content="https://www.cybaemtech.com/careers" />
        <meta property="og:site_name" content="Cybaem Tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybaem Tech Careers | Finance, Data, ML & Engineering" />
        <meta name="twitter:description" content="Open roles: Finance Analyst, Tech Writer, Mobile Dev, Data/Solutions Engg, ML Engg, IT Support, CSM, HR & Marketing (Pune/Remote)." />
      </Helmet>
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/40 rounded-full blur-xl animate-spin" style={{
          animationDuration: '20s'
        }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/25 rounded-full blur-2xl animate-bounce" style={{
          animationDuration: '15s'
        }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/30 rounded-full blur-xl animate-pulse" style={{
          animationDuration: '25s'
        }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent/35 rounded-full blur-2xl animate-spin" style={{
          animationDuration: '30s',
          animationDirection: 'reverse'
        }}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/5 right-1/5 w-32 h-32 border-2 border-accent/40 rotate-45 animate-spin" style={{
          animationDuration: '40s'
        }}></div>
          <div className="absolute bottom-1/5 left-1/5 w-24 h-24 border-2 border-primary/40 rotate-12 animate-pulse" style={{
          animationDuration: '18s'
        }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto text-center animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
                JOIN OUR
                <br />
                <span className="text-accent">REVOLUTION</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                Build the future of technology with a team that values innovation, excellence, and your personal growth. Shape tomorrow's solutions today.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold hover-lift group border-2 border-accent animate-slide-up">
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in">
          
        </div>
      </section>

       <section className="py-20 bg-gradient-to-b from-black via-primary/5 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12 animate-fade-in">Our Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
              step: 1,
              title: "Apply Online",
              desc: "Submit your application through our careers portal"
            }, {
              step: 2,
              title: "Initial Review",
              desc: "Our team reviews your application and qualifications"
            }, {
              step: 3,
              title: "Interview Process",
              desc: "Technical and cultural fit interviews with our team"
            }, {
              step: 4,
              title: "Welcome Aboard",
              desc: "Join our team and start your journey with us"
            }].map((item, index) => <div key={index} className="text-center animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center hover-lift">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Job Search with Dark Theme */}
      

      {/* Featured Positions Section - Accenture Style */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          {/* Search Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready To Explore?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Find your next opportunity
            </p>
            
            {/* Search Bar */}
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-6 w-6" />
                <Input
                  type="text"
                  placeholder="Try searching using a descriptive phrase or sentence describing your perfect job..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card/10 backdrop-blur-sm border-primary/20 text-white placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Zapier Webhook Settings */}
            {/* <div className="max-w-3xl mx-auto mb-8 text-left">
              <Label htmlFor="webhook" className="text-sm text-muted-foreground">Zapier Webhook URL</Label>
              <div className="mt-2 flex gap-2">
                <Input
                  id="webhook"
                  type="url"
                  placeholder="https://hooks.zapier.com/hooks/catch/XXXX/YYYY/"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  className="bg-card/10 border-primary/20 text-white placeholder:text-muted-foreground"
                />
                <Button type="button" variant="secondary" onClick={saveWebhook}>
                  Save
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                We'll send applications to this webhook. Configure your Zap to email info@cybaemtech.com.
              </p>
            </div> */}
          </div>

          {/* Results Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-card/10 backdrop-blur-sm border-primary/20 sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-white">
                      Clear filters
                    </Button>
                  </div>

                  {/* Location Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium text-white mb-3">Location</h4>
                    <div className="space-y-2">
                      <Input
                        placeholder="Search locations"
                        value={locationQuery}
                        onChange={(e) => setLocationQuery(e.target.value)}
                        className="h-10 bg-card/10 border-primary/20 text-white placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  {/* Area of Interest Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium text-white mb-3">Area of Interest</h4>
                    <div className="space-y-2">
                      {["All", "Technology", "Consulting", "Security", "Sales", "AI & Data", "Operations"].map((filter) => (
                        <label key={filter} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="area"
                            checked={selectedDepartment === filter}
                            onChange={() => setSelectedDepartment(filter)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm text-muted-foreground hover:text-white transition-colors">
                            {filter}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium text-white mb-3">Job Type</h4>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedTypes.has(type)}
                            onChange={() => toggleType(type)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm text-muted-foreground hover:text-white transition-colors">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Experience Filter */}
                  <div>
                    <h4 className="font-medium text-white mb-3">Experience</h4>
                    <div className="space-y-2">
                      {["0-2 years", "2-5 years", "5-10 years", "10+ years"].map((exp) => (
                        <label key={exp} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedExperienceRanges.has(exp)}
                            onChange={() => toggleExperience(exp)}
                            className="w-4 h-4 text-primary"
                          />
                          <span className="text-sm text-muted-foreground hover:text-white transition-colors">
                            {exp}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-white">
                  <span className="text-2xl font-bold">{filteredJobs.length}</span>
                  <span className="text-muted-foreground ml-2">Results</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span>Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-card/10 border border-primary/20 rounded px-3 py-1 text-white"
                  >
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Relevance</option>
                  </select>
                </div>
              </div>

              {/* Job Cards */}
              <Accordion type="single" collapsible className="space-y-4">
                {paginatedJobs.map((job) => (
                  <AccordionItem
                    key={job.id}
                    value={`job-${job.id}`}
                    className="card-interactive bg-card/10 backdrop-blur-sm border-primary/20 hover-lift transition-all duration-300 hover:bg-card/20 rounded-md"
                  >
                    <AccordionTrigger className="px-6 py-4 [&>svg]:hidden">
                      <div className="w-full flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-white hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground text-sm space-x-4 mb-3">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span>|</span>
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </span>
                            <span>|</span>
                            <span>Experience: {job.experience}</span>
                          </div>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>
                        <div className="ml-6">
                          <div className="h-10 w-10 rounded-md border border-primary/40 flex items-center justify-center text-primary">
                            <Plus className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="px-6 pb-6 text-white/90 space-y-4">
                        <div>
                          <h4 className="font-semibold">About the role</h4>
                          <p className="text-sm text-muted-foreground mt-1">{job.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Key skills</h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {job.skills.map((s: string) => (
                              <span key={s} className="text-xs px-2 py-1 rounded border border-primary/30 text-primary/90">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="mr-4">Salary: {job.salary}</span>
                          <span>Department: {job.department}</span>
                        </div>
                        <div className="pt-2">
                          <Button onClick={() => handleOpenApply(job)}>
                            Apply
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Pagination */}
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage((p) => Math.max(1, p - 1));
                        }}
                        className={`bg-transparent text-white border border-white ${currentPage === 1 || totalPages === 0 ? "pointer-events-none opacity-50" : ""}`}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          size="default"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          className={`bg-transparent text-white border border-white ${page === currentPage ? "bg-white/10" : ""}`}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage((p) => Math.min(totalPages || 1, p + 1));
                        }}
                        className={`bg-transparent text-white border border-white ${currentPage === totalPages || totalPages === 0 ? "pointer-events-none opacity-50" : ""}`}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>

              {/* Application Dialog */}
              <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
                    <DialogDescription>
                      Submit your details and upload your resume. We'll route it to our HR team.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="applicant-name">Full name</Label>
                        <Input id="applicant-name" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} required />
                      </div>
                      <div>
                        <Label htmlFor="applicant-email">Email</Label>
                        <Input type="email" id="applicant-email" value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="applicant-phone">Phone</Label>
                        <Input type="tel" id="applicant-phone" value={applicantPhone} onChange={(e) => setApplicantPhone(e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="resume">Resume (PDF/DOC/DOCX, max 10MB)</Label>
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                    </div>

                    <DialogFooter>
                      <Button type="button" variant="ghost" onClick={() => setApplyOpen(false)} disabled={submitting}>
                        Cancel
                      </Button>
                      <Button type="submit" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Departments with Dark Theme */}
      

      {/* Company Culture Video Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in">Life at CybaemTech</h2>
            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-slide-up">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="h-16 w-16 text-white mx-auto mb-4" />
                  <p className="text-white text-lg">Company Culture Video</p>
                  <p className="text-white/70">Coming Soon</p>
                </div>
              </div>
              <p className="text-white/80 text-lg">
                Discover what makes CybaemTech a great place to work - from our collaborative culture to our commitment to innovation and employee growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials with Dark Theme */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">What Our Team Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamTestimonials.map((testimonial, index) => <Card key={index} className="card-interactive bg-card/10 backdrop-blur-sm border border-white/10 hover-lift animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <CardTitle className="text-lg text-center text-white">{testimonial.name}</CardTitle>
                    <CardDescription className="text-center text-accent font-medium">
                      {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 text-center mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm text-white/60 text-center">
                      {testimonial.years}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Process with Dark Theme */}
      {/* <section className="py-20 bg-gradient-to-b from-black via-primary/5 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12 animate-fade-in">Our Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
              step: 1,
              title: "Apply Online",
              desc: "Submit your application through our careers portal"
            }, {
              step: 2,
              title: "Initial Review",
              desc: "Our team reviews your application and qualifications"
            }, {
              step: 3,
              title: "Interview Process",
              desc: "Technical and cultural fit interviews with our team"
            }, {
              step: 4,
              title: "Welcome Aboard",
              desc: "Join our team and start your journey with us"
            }].map((item, index) => <div key={index} className="text-center animate-slide-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center hover-lift">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Careers;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Awards from "./pages/Awards";
import Careers from "./pages/Careers";
import LifeAtCybaemTech from "./pages/LifeAtCybaemTech";
import Industries from "./pages/Industries";
import ManagedServices from "./pages/ManagedServices";
import NotFound from "./pages/NotFound";
import CloudSolutions from "./pages/CloudSolutions";
import CybersecurityServices from "./pages/CybersecurityServices";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import DigitalMarketing from "./pages/DigitalMarketing";
import AIDataAnalytics from "./pages/AIDataAnalytics";
import Contact from "./pages/Contact";
import ITAugmentation from "./pages/ITAugmentation";
import ScrollToTop from "@/components/ScrollToTop";
import Blog from "./pages/Blog";
import BlogPost from "./components/BlogPost";
import ThankYou from "./components/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/awards" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/life-at-cybaemtech" element={<LifeAtCybaemTech />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/cybersecurity-services" element={<CybersecurityServices />} />
          <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ai-data-analytics" element={<AIDataAnalytics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/it-augmentation" element={<ITAugmentation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/thankyou" element={<ThankYou onBack={function (): void {
            throw new Error("Function not implemented.");
          } } />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

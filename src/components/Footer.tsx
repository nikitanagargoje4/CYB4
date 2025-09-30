import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", url: "https://www.facebook.com/cybaemtech/", label: "Facebook" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg", url: "https://x.com/Cybaem_Tech", label: "X (Twitter)" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", url: "https://in.linkedin.com/company/cybaemtech?trk=public_post_follow-view-profile", label: "LinkedIn" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", url: "https://www.instagram.com/cybaemtech/", label: "Instagram" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", url: "https://wa.me/+919028541383", label: "WhatsApp" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png", url: "https://www.youtube.com/@cybaemtech", label: "YouTube" },
];

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 md:py-10 border-t border-gray-700">
    <div className="container max-w-7xl mx-auto mobile-padding">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
        
        {/* Company Info + Social Icons */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/lovable-uploads/footerlogo.png" alt="CybaemTech Logo" className="h-40 md:h-16 w-auto" />
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Beyond Limits. Transforming businesses through innovative technology solutions and strategic digital partnerships.
          </p>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 bg-white/90 hover:bg-white backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20"
                aria-label={social.label}
              >
                <img 
                  src={social.logo} 
                  alt={social.label}
                  className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-110 drop-shadow-sm"
                />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
            <Button
              size="sm"
              variant="outline"
              onClick={() => (window.location.href = "/contact?source=footer-cta")}
              className="border-white/20 hover:bg-white transition-all duration-300 touch-target text-gray-900"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Solutions</h3>
          <ul className="space-y-2">
            {["cloud-solutions", "enterprise-solutions", "cybersecurity-services", "ai-data-analytics", "digital-transformation", "managed-services"].map((path) => (
              <li key={path}>
                <a href={`/${path}`} className="text-white/80 hover:text-accent text-sm transition-colors block py-0.5">
                  {path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries Section */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Industries</h3>
          <ul className="space-y-2">
            {["manufacturing", "healthcare", "finance", "retail", "education", "technology"].map((id) => (
              <li key={id}>
                <a href={`/industries#${id}`} className="text-white/80 hover:text-accent text-sm transition-colors block py-0.5">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            {["about", "leadership", "careers", "news", "case-studies", "support"].map((path) => (
              <li key={path}>
                <a href={`/${path}`} className="text-white/80 hover:text-accent text-sm transition-colors block py-0.5">
                  {path.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="bg-white/20 mb-4" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        <div className="text-sm text-white/60">© {new Date().getFullYear()} CybaemTech. All rights reserved.</div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
            <a key={label} href="#" className="text-white/60 hover:text-accent transition-colors touch-target">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
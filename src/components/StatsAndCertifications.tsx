import { Shield, Award, CheckCircle, Star, Cloud, User } from "lucide-react";

const StatsAndCertifications = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Countries Served" },
    { value: "24/7", label: "Support Available" },
    { value: "4.8 ⭐", label: "Client Satisfaction" },
  ];

  const certifications = [
    {
      icon: Shield,
      title: "ISO 27001 Ready",
      subtitle: "Security Standard",
    },
    {
      icon: User,
      title: "Microsoft Partner",
      subtitle: "Cloud Solutions",
    },
    {
      icon: CheckCircle,
      title: "MSME Registered",
      subtitle: "UDYAM-MH-26-0207684",
    },
    {
      icon: Shield,
      title: "SSL Secured",
      subtitle: "Website Protection",
    },
    {
      icon: Star,
      title: "4.8/5 Rating",
      subtitle: "Global Clients",
    },
    {
      icon: Cloud,
      title: "AWS Certified",
      subtitle: "Cloud Infrastructure",
    },
  ];

  return (
    <section className="relative bg-black py-12 md:py-16 overflow-hidden">
      {/* Stats Section - Simple inline display */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Trusted & Certified by Leading Organizations
          </h2>
          <div className="w-20 h-0.5 bg-blue-500 mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="group relative p-5 md:p-6 rounded-xl bg-[#1e3a5f] border border-blue-900/50 cursor-pointer"
                data-testid={`cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-blue-500/30">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-blue-400 group-hover:text-blue-300 transition-all duration-300" />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-white/60">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsAndCertifications;

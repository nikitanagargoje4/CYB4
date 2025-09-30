import { CheckCircle, Clock, User } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "10+ Global Service Verticals",
      description: "Comprehensive IT solutions covering all your business needs from cloud to cybersecurity",
      badge: "14 Core Services",
    },
    {
      icon: Clock,
      title: "24/7 Support & Remote Monitoring",
      description: "Round-the-clock technical support and proactive monitoring across all time zones",
      badge: "99.9% Uptime",
    },
    {
      icon: User,
      title: "Certified Experts",
      description: "Cloud, Cybersecurity, and Microsoft 365 certified professionals at your service",
      badge: "50+ Certifications",
    },
  ];

  return (
    <section className="relative bg-black py-16 md:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses worldwide for our expertise, reliability, and results-driven approach
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative p-8 md:p-10 rounded-xl bg-[#1e3a5f] border border-blue-900/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/20 border border-primary/30 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-blue-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Badge */}
                <div className="inline-block">
                  <span className="text-sm font-medium text-primary group-hover:text-blue-300 transition-colors duration-300">
                    {reason.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

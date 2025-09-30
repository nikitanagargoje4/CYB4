// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { useInView } from "react-intersection-observer";
// import { useState } from "react";

// const insights = [
//   {
//     badge: "RESEARCH REPORT",
//     title: "4 critical actions to take now to strengthen your cyber defenses",
//     description: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year's State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
//     image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=600&h=800",
//     link: "State of Cybersecurity Resilience 2025"
//   },
//   {
//     badge: "RESEARCH REPORT", 
//     title: "Powering sustainable AI",
//     description: "By 2030, AI-powered data centers will consume as much electricity as Canada and more water than the UK. Their carbon emissions could account for 3.4% of global emissions, an 11-fold increase in a decade.",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600&h=800",
//     link: "Powering sustainable AI"
//   },
//   {
//     badge: "RESEARCH REPORT",
//     title: "Resilience redefined: From readiness to reinvention", 
//     description: "Resilience appears to be rebounding to post-pandemic highs, but the gains mask a deeper vulnerability. Increased volatility requires adaptative resilience for competitiveness and growth.",
//     image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600&h=800",
//     link: "Resilience redefined"
//   },
//   {
//     badge: "RESEARCH REPORT",
//     title: "Trying to scale AI? You're going to need to think big. And act bigger.",
//     description: "The race to reinvent with generative AI is well underway. The time to determine if you're leading or being left behind is now. Discover the front-runners' guide to scaling AI.",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=800",
//     link: "Seizing the AI advantage"
//   }
// ];

// const InsightCards = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section className="py-12 md:py-20 bg-white">
//       <div className="container mx-auto mobile-padding">
//         <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
//           {insights.map((insight, index) => (
//             <InsightCard 
//               key={index} 
//               insight={insight} 
//               index={index}
//               inView={inView}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const InsightCard = ({ insight, index, inView }: { insight: any, index: number, inView: boolean }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Card 
//       className={`group cursor-pointer overflow-hidden border-none shadow-lg bg-white transition-all duration-500 md:duration-700 transform touch-card ${
//         inView 
//           ? 'translate-y-0 opacity-100' 
//           : 'translate-y-8 md:translate-y-12 opacity-0'
//       }`}
//       style={{ 
//         transitionDelay: `${index * 100}ms`,
//         willChange: 'transform, opacity'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onTouchStart={() => setIsHovered(true)}
//       onTouchEnd={() => setIsHovered(false)}
//     >
//       <div className="aspect-[3/4] overflow-hidden relative">
//         <img 
//           src={insight.image} 
//           alt={insight.title}
//           loading="lazy"
//           className={`w-full h-full object-cover transition-all duration-500 md:duration-700 ${
//             isHovered 
//               ? 'md:scale-110 md:rotate-1 scale-105' 
//               : 'scale-100 rotate-0'
//           }`}
//           style={{ willChange: 'transform' }}
//         />
//         <div className={`absolute inset-0 transition-all duration-300 md:duration-500 ${
//           isHovered 
//             ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' 
//             : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
//         }`}></div>
        
//         {/* Animated Badge */}
//         <div className={`absolute top-3 left-3 md:top-4 md:left-4 transition-all duration-300 ${
//           isHovered ? 'md:scale-105 md:-translate-y-1' : 'scale-100 translate-y-0'
//         }`}>
//           <Badge 
//             variant="secondary" 
//             className={`bg-white/90 text-black text-xs font-semibold transition-all duration-300 px-2 py-1 ${
//               isHovered ? 'shadow-lg bg-white' : ''
//             }`}
//           >
//             {insight.badge}
//           </Badge>
//         </div>
        
//         {/* Hover Overlay with Content Preview */}
//         <div className={`absolute inset-0 flex items-end p-4 md:p-6 transition-all duration-300 md:duration-500 ${
//           isHovered ? 'opacity-100' : 'opacity-0'
//         }`}>
//           <div className={`text-white transform transition-all duration-200 md:duration-300 md:delay-150 ${
//             isHovered ? 'translate-y-0' : 'translate-y-2 md:translate-y-4'
//           }`}>
//             <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 line-clamp-2">
//               {insight.title}
//             </h4>
//             <p className="text-xs md:text-sm opacity-90 line-clamp-2 md:line-clamp-3">
//               {insight.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default InsightCards;


import React, { useState, useEffect, useRef } from 'react';

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
    title: "Digital Transformation & Consulting",
    description: "Digital strategy, business optimization, and change management solutions to modernize your operations and drive sustainable growth.",
    gradient: "from-purple-600 via-blue-600 to-cyan-500",
    glowColor: "rgba(147, 51, 234, 0.4)",
    link: "/digital-marketing",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        <circle cx="12" cy="10" r="3"/>
        <path d="M7 19.07C8.46 20.65 10.18 21.5 12 21.5s3.54-.85 5-2.43"/>
      </svg>
    ),
    title: "Cybersecurity Services",
    description: "Security assessment, managed services, and compliance management to protect your digital assets and maintain regulatory standards.",
    gradient: "from-red-500 via-pink-500 to-rose-400",
    glowColor: "rgba(239, 68, 68, 0.4)",
    link: "/cybersecurity-services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    title: "Cloud Solutions & Infrastructure",
    description: "Cloud migration, multi-cloud management, and infrastructure as code to optimize your technology stack and reduce operational costs.",
    gradient: "from-blue-500 via-teal-500 to-green-400",
    glowColor: "rgba(59, 130, 246, 0.4)",
    link: "/cloud-solutions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
        <polyline points="7.5,19.79 7.5,14.6 3,12"/>
        <polyline points="21,12 16.5,14.6 16.5,19.79"/>
      </svg>
    ),
    title: "Enterprise Solutions",
    description: "Application development, system integration, and DevOps automation to streamline your business processes and enhance productivity.",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.4)",
    link: "/enterprise-solutions",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18zM21 14H3c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
      </svg>
    ),
    title: "AI & Data Analytics",
    description: "Artificial intelligence, machine learning, and business intelligence solutions to unlock insights and automate decision-making processes.",
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    glowColor: "rgba(99, 102, 241, 0.4)",
    link: "/ai-data-analytics",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Managed Services",
    description: "24/7 monitoring, support, and disaster recovery solutions to ensure your systems run smoothly and your business stays operational.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    glowColor: "rgba(16, 185, 129, 0.4)",
    link: "/managed-services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "IT Augmentation",
    description: "Scale your tech teams with global talent to accelerate project delivery and fill critical skill gaps in your organization.",
    gradient: "from-violet-600 via-fuchsia-500 to-pink-400",
    glowColor: "rgba(139, 92, 246, 0.4)",
    link: "/it-augmentation",
  },
];

const SolutionCard: React.FC<{ solution: typeof solutions[0]; index: number }> = ({ solution, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleCardClick = () => {
    window.location.href = solution.link;
  };

  return (
    <div
      className="solution-card group"
      style={{
        minWidth: '380px',
        height: '500px',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '32px',
        padding: '40px 32px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isHovered ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? `0 40px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.2), 0 0 60px ${solution.glowColor}`
          : '0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(148, 163, 184, 0.1)',
        animationDelay: `${index * 0.2}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${solution.glowColor}, transparent 50%)`,
          borderRadius: '32px',
        }}
      />

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        style={{
          background: `linear-gradient(45deg, ${solution.glowColor}, transparent, ${solution.glowColor})`,
          padding: '2px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animation: isHovered ? `float-particle-${i} 3s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Icon container with advanced effects */}
      <div
        className="relative mb-8"
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '28px',
          background: `linear-gradient(135deg, ${solution.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').map(color => {
            const colorMap: { [key: string]: string } = {
              'purple-600': '#9333ea', 'blue-600': '#2563eb', 'cyan-500': '#06b6d4',
              'red-500': '#ef4444', 'pink-500': '#ec4899', 'rose-400': '#fb7185',
              'blue-500': '#3b82f6', 'teal-500': '#14b8a6', 'green-400': '#4ade80',
              'orange-500': '#f97316', 'amber-500': '#f59e0b', 'yellow-400': '#facc15',
              'indigo-600': '#4f46e5', 'purple-600': '#9333ea', 'pink-500': '#ec4899',
              'emerald-500': '#10b981', 'teal-500': '#14b8a6', 'cyan-400': '#22d3ee',
              'violet-600': '#8b5cf6', 'fuchsia-500': '#d946ef', 'pink-400': '#f472b6',
            };
            return colorMap[color] || '#3b82f6';
          }).join(', ')})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: isHovered ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)',
          boxShadow: isHovered 
            ? `0 20px 60px ${solution.glowColor}, inset 0 0 20px rgba(255, 255, 255, 0.1)`
            : `0 15px 40px ${solution.glowColor}`,
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            color: 'white',
            transition: 'all 0.6s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          }}
        >
          {solution.icon}
        </div>

        {/* Rotating ring */}
        <div
          className="absolute inset-0 rounded-[28px] border-2 border-white/20"
          style={{
            animation: isHovered ? 'spin 2s linear infinite' : 'none',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="text-2xl font-bold mb-6 leading-tight"
          style={{
            color: isHovered ? '#f1f5f9' : '#e2e8f0',
            transition: 'all 0.6s ease',
            textShadow: isHovered ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none',
          }}
        >
          {solution.title}
        </h3>

        <p
          className="text-base leading-relaxed mb-8"
          style={{
            color: isHovered ? '#cbd5e1' : '#94a3b8',
            transition: 'all 0.6s ease',
          }}
        >
          {solution.description}
        </p>

        {/* CTA Button */}
        <button
          className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-base transition-all duration-600 relative overflow-hidden"
          style={{
            background: isHovered 
              ? `linear-gradient(135deg, ${solution.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').map(color => {
                  const colorMap: { [key: string]: string } = {
                    'purple-600': '#9333ea', 'blue-600': '#2563eb', 'cyan-500': '#06b6d4',
                    'red-500': '#ef4444', 'pink-500': '#ec4899', 'rose-400': '#fb7185',
                    'blue-500': '#3b82f6', 'teal-500': '#14b8a6', 'green-400': '#4ade80',
                    'orange-500': '#f97316', 'amber-500': '#f59e0b', 'yellow-400': '#facc15',
                    'indigo-600': '#4f46e5', 'purple-600': '#9333ea', 'pink-500': '#ec4899',
                    'emerald-500': '#10b981', 'teal-500': '#14b8a6', 'cyan-400': '#22d3ee',
                    'violet-600': '#8b5cf6', 'fuchsia-500': '#d946ef', 'pink-400': '#f472b6',
                  };
                  return colorMap[color] || '#3b82f6';
                }).join(', ')})`
              : 'rgba(148, 163, 184, 0.1)',
            color: isHovered ? 'white' : '#e2e8f0',
            border: `2px solid ${isHovered ? 'transparent' : 'rgba(148, 163, 184, 0.2)'}`,
            transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
            boxShadow: isHovered ? `0 10px 30px ${solution.glowColor}` : 'none',
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          Explore Solution
          <span
            className="ml-3 transition-transform duration-600"
            style={{
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
};

const InsightCards: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollProgress(prev => (prev + 0.1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450; // Width of one card plus gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const toggleAutoScroll = () => {
    setIsAutoScrollPaused(!isAutoScrollPaused);
  };
  return (
    <>
      <style>{`
        @keyframes float-particle-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(-180deg); opacity: 0.8; }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-12px) rotate(90deg); opacity: 0.9; }
        }
        @keyframes float-particle-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-18px) rotate(-90deg); opacity: 0.7; }
        }
        @keyframes float-particle-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-14px) rotate(270deg); opacity: 1; }
        }
        @keyframes float-particle-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-16px) rotate(-270deg); opacity: 0.8; }
        }

        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes autoScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-380px * 7 - 8px * 6)); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }

        .solutions-scroll {
          animation: autoScroll 42s linear infinite;
        }

        .solutions-scroll:hover,
        .solutions-scroll.paused {
          animation-play-state: paused;
        }

        /* Hide scrollbar */
        .solutions-scroll::-webkit-scrollbar {
          display: none;
        }

        .solution-card {
          animation: slideInUp 0.8s ease-out both;
        }

        /* Mesh gradient background */
      `}</style>

      <div
        className="min-h-screen overflow-x-hidden relative"
        style={{
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          background: '#0D0D0D',
        }}
      >

        <div className="relative z-10 py-20">
          {/* Header */}
          <div className="text-center mb-20 px-8">
            <div
              className="inline-block mb-6 px-6 py-3 rounded-full text-sm font-semibold"
              style={{
                background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))',
                border: '1px solid rgba(147, 51, 234, 0.3)',
                color: '#e2e8f0',
                backdropFilter: 'blur(20px)',
                animation: 'slideInDown 0.8s ease-out',
              }}
            >
              ✨ Comprehensive Technology Solutions
            </div>

            <h1
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 50%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'slideInDown 0.8s ease-out 0.2s both',
              }}
            >
              Transform Your
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #9333ea, #3b82f6, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Digital Future
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
              style={{
                color: '#94a3b8',
                animation: 'slideInUp 0.8s ease-out 0.4s both',
              }}
            >
              Discover our comprehensive suite of technology solutions designed to accelerate your business growth,
              enhance security, and drive innovation across every aspect of your digital transformation journey.
            </p>
          </div>

          <div className="relative overflow-hidden py-12">
            <div className="solutions-scroll flex gap-8 px-8">
              {/* First set */}
              {solutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} index={index} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {solutions.map((solution, index) => (
                <SolutionCard key={`duplicate-${index}`} solution={solution} index={index} />
              ))}
            </div>

            {/* Navigation Arrows - Centered Below Cards */}
            {/* <div className="flex justify-center items-center gap-8 mt-16">
              <button
                onClick={() => handleManualScroll('left')}
                className="group flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))',
                  border: '2px solid rgba(147, 51, 234, 0.3)',
                  color: '#e2e8f0',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4))';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(147, 51, 234, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)';
                }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>

              <button
                onClick={() => handleManualScroll('right')}
                className="group flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))',
                  border: '2px solid rgba(147, 51, 234, 0.3)',
                  color: '#e2e8f0',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.4))';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(147, 51, 234, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)';
                }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div> */}
            {/* Scroll indicator */}
            {/* <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"
              style={{
                color: '#64748b',
                fontSize: '0.9rem',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                Hover to pause • Auto-scrolling showcase
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightCards;
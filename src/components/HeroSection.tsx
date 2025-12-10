import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const tabs = [
  "Thinking Machines x OpenAI Collaboration",
  "Who we are",
  "Our GenAI Model Evaluation Framework",
  "Data Governance: The Foundation of AI Excellence",
];

// Tab 0: OpenAI Collaboration content
const OpenAICollabContent = () => {
  const stats = [
    { value: "10,000+", label: "professionals trained" },
    { value: "3,450+", label: "co-built AI assistants" },
    { value: "~1.5 hours", label: "proven time savings" },
  ];

  return (
    <div className="relative container mx-auto px-8 md:px-28 lg:px-16 pt-16 md:pt-24">
      <div className="max-w-2xl">
        {/* Badge */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-coral text-sm font-medium tracking-wide uppercase">
            Collaboration Announcement
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-display text-4xl md:text-4xl lg:text-5xl font-light text-foreground mt-4 leading-tight animate-slide-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Thinking Machines × OpenAI
        </h1>

        {/* Subheading */}
        <h2
          className="font-display text-xl lg:text-2xl font-light text-coral mt-5 animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Transformative AI, delivered by deep tech practitioners
        </h2>

        {/* Description */}
        <p
          className="text-white text-base max-w-2xl mt-5 leading-relaxed font-light animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          As OpenAI's first boutique consulting partner in Asia-Pacific, we
          merge world-class AI innovation with practical strategy, training, and
          implementation—helping leaders achieve real results, faster.
        </p>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-6 md:gap-10 mt-8 animate-slide-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-normal text-foreground">
                {stat.value}
              </span>
              <span className="text-white text-sm mt-1 font-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mt-10 animate-slide-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <Button variant="coral" size="lg" className="group text-sm">
            Inquire for a free ChatGPT Enterprise Training
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="coral-outline"
            size="lg"
            className="group text-sm border-white"
          >
            Read our story
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Geometric graphic for "Who we are" tab
const WhoWeAreGraphic = () => (
  <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
    {/* Dotted grid pattern */}
    <div className="absolute inset-0">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,1)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>

    {/* Main circle */}
    <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
      {/* Large coral circle */}
      <circle cx="200" cy="180" r="160" fill="hsl(6 86% 57%)" />

      {/* Triangle (house roof) - peach/salmon color */}
      <polygon points="200,80 280,180 120,180" fill="#f5a89a" />

      {/* Rectangle (house body) - cream/off-white */}
      <rect x="130" y="180" width="140" height="120" fill="#fef3e2" />

      {/* Small bottom accent - peach */}
      <rect
        x="180"
        y="300"
        width="80"
        height="40"
        fill="#f5a89a"
        opacity="0.8"
      />
    </svg>
  </div>
);

// Tab 1: Who we are content
const WhoWeAreContent = () => {
  return (
    <div className="relative container mx-auto px-6 md:px-28 lg:px-16 pt-24 md:pt-24">
      <div className="max-w-xl">
        {/* Badge */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-white text-xl md:text-base font-light tracking-wide">
            Enterprise Data and AI Consulting
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-display text-4xl md:text-4xl font-light text-foreground mt-4 leading-tight animate-slide-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Building Data and AI solutions for transformative business impact
        </h1>

        {/* Description */}
        <p
          className="text-white/90 text-lg md:text-base max-w-xl mt-5 leading-relaxed font-light animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Thinking Machines is a trusted partner in accelerating data-driven
          transformation from data foundations to advanced Generative AI. We
          transform your strategic vision into reality with solutions that drive
          clear, quantifiable outcomes.
        </p>

        {/* CTA Button */}
        <div
          className="flex flex-wrap gap-4 mt-24 animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Button variant="coral" size="lg" className="group text-sm">
            Talk to our consultants
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Graphic */}
      <WhoWeAreGraphic />
    </div>
  );
};

// Book/Document graphic for GenAI Framework tab
const GenAIBookGraphic = () => (
  <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[380px] h-[480px]">
    {/* Dotted grid pattern */}
    <div className="absolute inset-0 -right-20 -top-10">
      <svg width="120%" height="120%" className="opacity-40">
        <pattern
          id="dots-genai"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.5)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots-genai)" />
      </svg>
    </div>

    {/* Book mockup */}
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <div
        className="w-[280px] h-[380px] rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px rgba(99, 102, 241, 0.2)",
        }}
      >
        {/* Book cover content */}
        <div className="p-6 h-full flex flex-col">
          {/* Top decorative lines */}
          <div className="space-y-1 mb-6">
            <div className="h-1 w-16 bg-indigo-400/40 rounded"></div>
            <div className="h-1 w-24 bg-indigo-400/30 rounded"></div>
            <div className="h-1 w-20 bg-indigo-400/20 rounded"></div>
          </div>

          {/* 3D bars illustration */}
          <div className="flex-1 flex items-center justify-center mb-6">
            <svg viewBox="0 0 120 80" className="w-full h-32 opacity-80">
              {/* 3D metallic bars */}
              <defs>
                <linearGradient id="bar1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64748b" />
                  <stop offset="50%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="bar2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
              <rect
                x="10"
                y="20"
                width="15"
                height="50"
                rx="2"
                fill="url(#bar1)"
                transform="skewY(-10)"
              />
              <rect
                x="30"
                y="10"
                width="15"
                height="60"
                rx="2"
                fill="url(#bar2)"
                transform="skewY(-10)"
              />
              <rect
                x="50"
                y="25"
                width="15"
                height="45"
                rx="2"
                fill="url(#bar1)"
                transform="skewY(-10)"
              />
              <rect
                x="70"
                y="5"
                width="15"
                height="65"
                rx="2"
                fill="url(#bar2)"
                transform="skewY(-10)"
              />
              <rect
                x="90"
                y="15"
                width="15"
                height="55"
                rx="2"
                fill="url(#bar1)"
                transform="skewY(-10)"
              />
            </svg>
          </div>

          {/* Logo placeholder */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-white"
                fill="currentColor"
              >
                <circle cx="12" cy="8" r="3" />
                <circle cx="7" cy="14" r="2.5" />
                <circle cx="17" cy="14" r="2.5" />
              </svg>
            </div>
            <span className="text-white/60 text-xs">Thinking Machines</span>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h4 className="text-white text-sm font-semibold leading-tight">
              The Enterprise GenAI App Builder's Model Evaluation Framework
            </h4>
          </div>

          {/* Bottom info */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <p className="text-white/40 text-xs">March 2025</p>
            <p className="text-white/30 text-[10px] mt-1">
              By Stephanie Sy, Evan Livelo, Carson Cheng, and Kayle Arwino
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Tab 2: GenAI Model Evaluation Framework
const GenAIFrameworkContent = () => {
  return (
    <div className="relative container mx-auto px-6 md:px-28 lg:px-16 pt-24 md:pt-24">
      <div className="max-w-xl">
        {/* Badge */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-white text-xl md:text-base font-light tracking-wide">
            Turn GenAI uncertainty into confidence
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-display text-4xl md:text-4xl font-light text-foreground mt-4 leading-tight animate-slide-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Build GenAI solutions your organization can actually trust
        </h1>

        {/* Description */}
        <p
          className="text-white/90 text-lg md:text-base max-w-xl mt-5 leading-relaxed font-light animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          We've guided dozens of organizations through the complexities of GenAI
          to clear, measurable success. Now, we're sharing the exact roadmap we
          use to build GenAI solutions that earn trust and deliver measurable
          results from day one.
        </p>

        {/* CTA Button */}
        <div
          className="flex flex-wrap gap-4 mt-24 animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Button variant="coral" size="lg" className="group text-sm">
            Get your GenAI confidence blueprint
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Book Graphic */}
      <GenAIBookGraphic />
    </div>
  );
};

// Stacked rectangles graphic for Data Governance tab
const DataGovernanceGraphic = () => (
  <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
    {/* Dotted grid pattern */}
    <div className="absolute inset-0 -right-10 -top-10">
      <svg width="120%" height="120%" className="opacity-40">
        <pattern
          id="dots-governance"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.5)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots-governance)" />
      </svg>
    </div>

    {/* Stacked rectangles */}
    <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
      <defs>
        <linearGradient id="teal1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="teal2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
        <linearGradient id="teal3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#99f6e4" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <linearGradient id="cream" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3e2" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>

      {/* Bottom rectangle - darkest teal */}
      <rect x="60" y="250" width="280" height="60" rx="4" fill="url(#teal1)" />

      {/* Second from bottom - medium teal */}
      <rect x="80" y="180" width="240" height="60" rx="4" fill="url(#teal2)" />

      {/* Third from bottom - light teal */}
      <rect x="100" y="110" width="200" height="60" rx="4" fill="url(#teal3)" />

      {/* Top rectangle - cream/white */}
      <rect x="120" y="40" width="160" height="60" rx="4" fill="url(#cream)" />
    </svg>
  </div>
);

// Tab 3: Data Governance
const DataGovernanceContent = () => {
  return (
    <div className="relative container mx-auto px-6 md:px-28 lg:px-16 pt-24 md:pt-24">
      <div className="max-w-xl">
        {/* Badge */}
        <div
          className="animate-slide-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="text-white text-xl md:text-base font-light tracking-wide">
            Turn data chaos into strategic confidence
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-display text-4xl md:text-4xl font-light text-foreground mt-4 leading-tight animate-slide-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Why data governance is the foundation of business excellence
        </h1>

        {/* Description */}
        <p
          className="text-white/90 text-lg md:text-base max-w-xl mt-5 leading-relaxed font-light animate-slide-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Understand exactly why effective Data Governance isn't just
          compliance—it's your organization's key to trusted decisions,
          efficient operations, and tangible business value across every
          department.
        </p>

        {/* CTA Button */}
        <div
          className="flex flex-wrap gap-4 mt-24 animate-slide-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <Button variant="coral" size="lg" className="group text-sm">
            Make your data work for you
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Graphic */}
      <DataGovernanceGraphic />
    </div>
  );
};

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <OpenAICollabContent />;
      case 1:
        return <WhoWeAreContent />;
      case 2:
        return <GenAIFrameworkContent />;
      case 3:
        return <DataGovernanceContent />;
      default:
        return <OpenAICollabContent />;
    }
  };

  // Background colors for each tab
  const getBackgroundColor = () => {
    switch (activeTab) {
      case 0:
        return "#860000"; // Dark red for OpenAI Collaboration
      case 1:
        return "#860000"; // Dark red for Who we are
      case 2:
        return "#1f0060"; // Dark purple for GenAI Framework
      case 3:
        return "#004437"; // Dark teal for Data Governance
      default:
        return "#860000";
    }
  };

  return (
    <section
      className="relative pt-10 pb-20 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {/* Background Image - only show on tab 0 */}
      {activeTab === 0 && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
      )}

      {/* Floating shapes - only show on tab 0 */}
      {activeTab === 0 && (
        <div className="hidden md:block absolute top-1/3 right-[15%] animate-float">
          <div className="w-48 h-48 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full text-coral/80">
              <circle cx="50" cy="30" r="20" fill="currentColor" />
              <circle
                cx="30"
                cy="65"
                r="16"
                fill="currentColor"
                opacity="0.8"
              />
              <circle
                cx="70"
                cy="65"
                r="16"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Content with transition */}
      <div key={activeTab} className="animate-fade-in mb-12 md:mb-6">
        {renderContent()}
      </div>

      {/* Bottom navigation - Mobile: title + arrows, Desktop: tabs */}
      <div className="absolute bottom-0 left-0 right-0 border-white ">
        <div className="container mx-auto px-6">
          {/* Mobile navigation */}
          <div className="flex md:hidden items-center justify-between py-4">
            <span className="text-white text-sm font-medium">
              {tabs[activeTab]}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setActiveTab(
                    activeTab === 0 ? tabs.length - 1 : activeTab - 1
                  )
                }
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white/60 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setActiveTab(
                    activeTab === tabs.length - 1 ? 0 : activeTab + 1
                  )
                }
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-white/60 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex overflow-x-auto scrollbar-hide  ">
            {tabs.map((item, index) => (
              <button
                key={item}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-white/20 ${
                  index !== 0 ? "border-l" : ""
                } ${index !== tabs.length - 1 ? "border-r" : ""} ${
                  activeTab === index
                    ? "text-foreground border-b border-b-white"
                    : "text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

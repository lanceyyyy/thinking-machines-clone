import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "10,000+", label: "professionals trained" },
  { value: "3,450+", label: "co-built AI assistants" },
  { value: "~1.5 hours", label: "proven time savings" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-coral/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Floating shapes */}
      <div className="absolute top-1/3 right-[15%] animate-float">
        <div className="w-32 h-32 md:w-48 md:h-48 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full text-coral/80">
            <circle cx="50" cy="30" r="20" fill="currentColor" />
            <circle cx="30" cy="65" r="16" fill="currentColor" opacity="0.8" />
            <circle cx="70" cy="65" r="16" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-16 md:pt-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="text-coral text-sm font-medium tracking-wide uppercase">
              Collaboration Announcement
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 leading-tight animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Thinking Machines × OpenAI
          </h1>

          {/* Subheading */}
          <h2 
            className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-coral mt-6 animate-slide-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            Transformative AI, delivered by deep tech practitioners
          </h2>

          {/* Description */}
          <p 
            className="text-muted-foreground text-base md:text-lg max-w-2xl mt-6 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            As OpenAI's first boutique consulting partner in Asia-Pacific, we merge world-class AI innovation with practical strategy, training, and implementation—helping leaders achieve real results, faster.
          </p>

          {/* Stats */}
          <div 
            className="flex flex-wrap gap-8 md:gap-12 mt-10 animate-slide-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm mt-1">
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
            <Button variant="coral" size="lg" className="group">
              Inquire for a free ChatGPT Enterprise Training
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="coral-outline" size="lg" className="group">
              Read our story
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom navigation tabs */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              "Thinking Machines x OpenAI Collaboration",
              "Who we are",
              "Our GenAI Model Evaluation Framework",
              "Data Governance: The Foundation of AI Excellence",
            ].map((item, index) => (
              <button
                key={item}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
                  index === 0
                    ? "text-foreground border-coral"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-coral/50"
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

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#860000] px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern
            id="cta-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* X pattern */}
            <line
              x1="0"
              y1="0"
              x2="60"
              y2="60"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="60"
              y1="0"
              x2="0"
              y2="60"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="30"
              y1="0"
              x2="30"
              y2="60"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="30"
              x2="60"
              y2="30"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-xl">
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-normal text-white leading-tight">
            Propel yourself into the next generation of business innovation
          </h2>

          {/* CTA Button */}
          <div className="mt-10">
            <Button variant="coral" size="lg" className="group text-sm">
              Talk to our consultants
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

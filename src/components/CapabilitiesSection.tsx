import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Generative AI",
    description:
      "From intimidating technology to confident action. Learn, build, and buy Generative AI smarter and with confidence.",
  },
  {
    title: "Data Governance",
    description:
      "Transform data chaos into strategic advantage. Establish secure, compliant foundations for business and AI innovation.",
  },
  {
    title: "Data Analytics",
    description:
      "From gut feelings to data-driven certainty. Make intelligent decisions at speed and scale with the power of data.",
  },
  {
    title: "Data Engineering",
    description:
      "Build the foundations for breakthrough insights. Enable your organization to harness scalable, secure platforms for transformation.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Move from uncertainty to strategic clarity. Unlock transformative business impact with predictive AI.",
  },
];

// Sparkle/star icon component
const SparkleIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-12 h-12"
    fill="none"
    stroke="white"
    strokeWidth="1"
  >
    {/* Center vertical line */}
    <line x1="24" y1="4" x2="24" y2="44" />
    {/* Center horizontal line */}
    <line x1="4" y1="24" x2="44" y2="24" />
    {/* Diagonal lines */}
    <line x1="10" y1="10" x2="38" y2="38" />
    <line x1="38" y1="10" x2="10" y2="38" />
    {/* Inner shorter lines */}
    <line x1="24" y1="12" x2="24" y2="36" strokeWidth="0.5" />
    <line x1="12" y1="24" x2="36" y2="24" strokeWidth="0.5" />
    {/* Dots at the ends */}
    <circle cx="24" cy="4" r="1.5" fill="white" stroke="none" />
    <circle cx="24" cy="44" r="1.5" fill="white" stroke="none" />
    <circle cx="4" cy="24" r="1.5" fill="white" stroke="none" />
    <circle cx="44" cy="24" r="1.5" fill="white" stroke="none" />
    <circle cx="10" cy="10" r="1" fill="white" stroke="none" />
    <circle cx="38" cy="10" r="1" fill="white" stroke="none" />
    <circle cx="10" cy="38" r="1" fill="white" stroke="none" />
    <circle cx="38" cy="38" r="1" fill="white" stroke="none" />
  </svg>
);

export const CapabilitiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1f0060] px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-4xl font-normal text-white mb-16">
          Our Capabilities
        </h2>

        {/* Grid Layout - 3 columns on first row, 2 on second */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <SparkleIcon />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-medium text-white mb-4">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {capability.description}
              </p>

              {/* Learn more link */}
              <a
                href="#"
                className="inline-flex items-center text-white text-sm font-medium group mt-auto"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const consultants = [
  { name: "Consultant 1", image: "/consultants/1.jpg" },
  { name: "Consultant 2", image: "/consultants/2.jpg" },
  { name: "Consultant 3", image: "/consultants/3.jpg" },
  { name: "Consultant 4", image: "/consultants/4.jpg" },
  { name: "Consultant 5", image: "/consultants/5.jpg" },
  { name: "Consultant 6", image: "/consultants/6.jpg" },
  { name: "Consultant 7", image: "/consultants/7.jpg" },
  { name: "Consultant 8", image: "/consultants/8.jpg" },
  { name: "Consultant 9", image: "/consultants/9.jpg" },
  { name: "Consultant 10", image: "/consultants/10.jpg" },
  { name: "Consultant 11", image: "/consultants/11.jpg" },
];

const partnerLogos = [
  { name: "ADB", image: "/second-logo/adb.png" },
  {
    name: "Asian Institute of Management",
    image: "/second-logo/Asian-Institute-of-Management-logo.png",
  },
  { name: "Deloitte", image: "/second-logo/deloitte-logo.png" },
  { name: "EY", image: "/second-logo/ey-logo.png" },
  { name: "KPMG", image: "/second-logo/kpmg-logo.png" },
  { name: "Microsoft", image: "/second-logo/legit-microsoft.png" },
  { name: "IQBS", image: "/second-logo/logo-iqbs.png" },
  {
    name: "Megawide",
    image: "/second-logo/megawide_construction_corporation_logo.jpeg",
  },
  { name: "Yale", image: "/second-logo/yale.jpeg" },
];

// Thinking Machines logo SVG for the last grid item
const ThinkingMachinesLogo = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <g stroke="#ef4631" strokeWidth="2" fill="none">
      {/* X pattern made of lines */}
      <line x1="20" y1="20" x2="80" y2="80" />
      <line x1="80" y1="20" x2="20" y2="80" />
      <line x1="30" y1="20" x2="70" y2="80" />
      <line x1="70" y1="20" x2="30" y2="80" />
      <line x1="40" y1="20" x2="60" y2="80" />
      <line x1="60" y1="20" x2="40" y2="80" />
      <line x1="50" y1="15" x2="50" y2="85" />
      <line x1="15" y1="50" x2="85" y2="50" />
      <line x1="25" y1="35" x2="75" y2="65" />
      <line x1="75" y1="35" x2="25" y2="65" />
    </g>
  </svg>
);

export const ConsultantsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Photo Grid */}
          <div className="grid grid-cols-4 gap-3">
            {consultants.map((consultant, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-gray-200 overflow-hidden"
              >
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Show placeholder on error
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/150x200?text=Photo";
                  }}
                />
              </div>
            ))}
            {/* Last item - Thinking Machines Logo */}
            <div className="aspect-[3/4] bg-white flex items-center justify-center p-4">
              <ThinkingMachinesLogo />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 leading-tight">
              Our senior consultants turn complex business challenges into
              AI-powered success
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              Organizations partner with us to solve their biggest data
              problems. Together, we create clarity, build confidence, and
              deliver AI solutions teams genuinely embrace—transforming how they
              serve customers and make decisions.
            </p>

            <div className="mt-8">
              <Button
                variant="coral-outline"
                size="lg"
                className="group border-coral text-coral hover:bg-coral hover:text-white"
              >
                How can we help you?
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-10 md:h-12 object-contain"
                  onError={(e) => {
                    // Show placeholder text on error
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-400 font-medium text-sm">${partner.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

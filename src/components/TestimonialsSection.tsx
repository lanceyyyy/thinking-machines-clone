import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Thinking Machines has been a key partner for EastWest Bank in adopting and productionalizing AI. [...] Adopting AI for its bank operations has allowed our staff more time to focus on more value-adding tasks, boosting productivity. Thinking Machines' consultative approach was critical in translating business needs into human-centered AI workflows.",
    name: "Isabelle Yap",
    title: "Senior AVP and Executive Director",
    image: "/testimonials/isabelle.jpg",
    logo: "/testimonials/eastwest-logo.png",
    logoAlt: "EastWest Bank",
  },
  {
    quote:
      "The team at Thinking Machines helped us transform our data infrastructure and implement AI solutions that have significantly improved our operational efficiency. Their expertise in both technical implementation and business strategy made them an invaluable partner.",
    name: "John Santos",
    title: "Chief Technology Officer",
    image: "/testimonials/john.jpg",
    logo: "/testimonials/company-logo.png",
    logoAlt: "Partner Company",
  },
  {
    quote:
      "Working with Thinking Machines was a game-changer for our organization. They understood our unique challenges and delivered solutions that exceeded our expectations. The AI-powered tools they built have become essential to our daily operations.",
    name: "Maria Garcia",
    title: "VP of Operations",
    image: "/testimonials/maria.jpg",
    logo: "/testimonials/partner-logo.png",
    logoAlt: "Partner Organization",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Quote Card */}
        <div className="bg-[#e8f0fa] p-8 md:p-12 lg:p-16 rounded-sm">
          {/* Quote Mark */}
          <div className="text-coral text-5xl font-serif leading-none mb-6">
            "
          </div>

          {/* Quote Text */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-gray-900 leading-relaxed font-normal">
            {currentTestimonial.quote}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-coral">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/56x56?text=Photo";
                  }}
                />
              </div>
              {/* Name and Title */}
              <div>
                <p className="font-medium text-gray-900">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            {/* Company Logo */}
            <div className="hidden md:block">
              <img
                src={currentTestimonial.logo}
                alt={currentTestimonial.logoAlt}
                className="h-10 object-contain"
                onError={(e) => {
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-gray-500 font-medium">${currentTestimonial.logoAlt}</span>`;
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

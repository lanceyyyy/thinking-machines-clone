import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [{ label: "Home", href: "/" }];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled past threshold for background
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-200"
          : "bg-transparent border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-coral flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <circle cx="12" cy="8" r="4" />
                <circle cx="6" cy="16" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Thinking
              </span>
              <span
                className={`font-display font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Machines
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 text-sm font-medium ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              className={
                isScrolled
                  ? "border-coral text-coral hover:bg-coral hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              }
            >
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden mt-4 pb-4 border-t pt-4 ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 text-sm font-medium ${
                    isScrolled
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className={`w-fit ${
                  isScrolled
                    ? "border-coral text-coral hover:bg-coral hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-900"
                }`}
              >
                Contact us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

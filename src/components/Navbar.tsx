import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Generative AI", href: "#genai" },
  { label: "Stories", href: "#stories" },
  { label: "Company", href: "#company" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-coral flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <circle cx="6" cy="16" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-foreground text-lg leading-tight">Thinking</span>
              <span className="font-display font-bold text-foreground text-lg leading-tight">Machines</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="sm">
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="w-fit">
                Contact us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

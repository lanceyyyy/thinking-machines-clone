import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CourseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-coral text-sm font-medium tracking-wide uppercase">
              Free online course
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
              Second Brain, Real Results: How to Work with AI at an Executive Level
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-coral/20 border-2 border-coral overflow-hidden flex items-center justify-center">
                <span className="font-display font-bold text-coral text-xl">SS</span>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Instructor:</p>
                <p className="font-semibold text-foreground">Stephanie Sy</p>
                <p className="text-muted-foreground text-sm">
                  Founder and CEO of Thinking Machines
                </p>
                <p className="text-muted-foreground text-sm">
                  Stanford alumni and ex-Google
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-sm text-foreground">Forbes 30 Under 30</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6V12L16 14" />
                </svg>
                <span className="text-sm text-foreground">MIT Tech Review Innovator</span>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Build your second brain with AI
            </h3>
            <p className="text-muted-foreground mt-2">
              Get access to our executive-level AI course today.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Company</label>
                <input
                  type="text"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all"
                  placeholder="Your company"
                />
              </div>
              <Button variant="coral" size="lg" className="w-full group mt-4">
                Get Free Access
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

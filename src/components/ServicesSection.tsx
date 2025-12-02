import { Database, Brain, BarChart3, Shield, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Generative AI Solutions",
    description: "Custom LLM implementations, RAG systems, and AI assistants tailored to your business needs.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and infrastructure to power your AI initiatives.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable business intelligence and predictive models.",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description: "Establish frameworks for data quality, security, and compliance at scale.",
  },
  {
    icon: Zap,
    title: "AI Training & Workshops",
    description: "Upskill your teams with hands-on training from industry practitioners.",
  },
  {
    icon: Users,
    title: "Strategic Consulting",
    description: "Roadmap development and implementation strategy for AI transformation.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="capabilities" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-coral text-sm font-medium tracking-wide uppercase">
            Our Capabilities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            End-to-end AI & Data Solutions
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            From strategy to implementation, we help organizations unlock the full potential of their data and AI investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-coral/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/20 transition-colors">
                <service.icon className="w-7 h-7 text-coral" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

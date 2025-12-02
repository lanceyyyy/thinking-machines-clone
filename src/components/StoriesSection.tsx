import { ArrowRight } from "lucide-react";

const stories = [
  {
    category: "Case Study",
    title: "Solar Energy Potential Analysis for Clark",
    description: "Mapping solar panel opportunities using satellite imagery and machine learning.",
    tag: "Energy",
  },
  {
    category: "Framework",
    title: "GenAI Model Evaluation Framework",
    description: "A comprehensive approach to evaluating generative AI and agentic RAG applications.",
    tag: "AI/ML",
  },
  {
    category: "Insights",
    title: "Data Governance Best Practices",
    description: "Building the foundation for AI excellence through robust data governance.",
    tag: "Governance",
  },
];

export const StoriesSection = () => {
  return (
    <section id="stories" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-coral text-sm font-medium tracking-wide uppercase">
              Stories & Insights
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
              From Our Work
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-coral font-medium mt-4 md:mt-0 hover:underline"
          >
            View all stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <a
              key={story.title}
              href="#"
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-coral/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-coral/20 via-accent/20 to-navy-light relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-coral/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6 text-coral" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-coral text-xs font-medium uppercase tracking-wide">
                    {story.category}
                  </span>
                  <span className="px-2 py-1 bg-secondary rounded-full text-xs text-muted-foreground">
                    {story.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-coral transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const partners = [
  "OpenAI",
  "Google Cloud",
  "Microsoft",
  "AWS",
  "Databricks",
  "Snowflake",
];

export const PartnersSection = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Trusted by leading organizations and partnered with
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-muted-foreground/60 font-display font-semibold text-lg md:text-xl hover:text-foreground transition-colors duration-300"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const partners = [
  {
    name: "ADB",
    image: "/second-logo/adb.png",
  },
  {
    name: "Asian Institute of Management",
    image: "/second-logo/Asian-Institute-of-Management-logo.png",
  },
  {
    name: "Deloitte",
    image: "/second-logo/deloitte-logo.png",
  },
  {
    name: "EY",
    image: "/second-logo/ey-logo.png",
  },
  {
    name: "KPMG",
    image: "/second-logo/kpmg-logo.png",
  },
  {
    name: "Microsoft",
    image: "/second-logo/legit-microsoft.png",
  },
  {
    name: "IQBS",
    image: "/second-logo/logo-iqbs.png",
  },
  {
    name: "Megawide",
    image: "/second-logo/megawide_construction_corporation_logo.jpeg",
  },
  {
    name: "Yale",
    image: "/second-logo/yale.jpeg",
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-900 mb-12">
          Trusted by partners
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-12 flex items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-full w-auto object-contain max-w-[180px]"
                onError={(e) => {
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="border border-gray-200 rounded px-4 py-3 h-full flex items-center justify-center">
                        <span class="text-gray-500 text-sm font-medium text-center">${partner.name}</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

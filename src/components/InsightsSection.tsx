const insights = [
  {
    type: "featured",
    category: "Client Success Stories",
    categoryColor: "bg-coral",
    title:
      "From Policy to Practice: How BPI Transformed Branch Operations with GenAI for 3x Faster & Better Responses",
    image: "/insights/bpi.jpg",
    logo: "/insights/bpi-logo.png",
    logoAlt: "BPI",
  },
  {
    type: "small",
    category: "Insights",
    categoryColor: "bg-blue-900",
    title:
      "Thinking Machines Holds an Exclusive Gen AI Workshop for Ayala Group",
    image: "/insights/keyboard.jpg",
  },
  {
    type: "small",
    category: "Resources",
    categoryColor: "bg-blue-900",
    title: "Making the Business Case for Data Governance",
    image: "/insights/data-lines.jpg",
  },
  {
    type: "horizontal",
    category: "Client Success Stories",
    categoryColor: "bg-purple-700",
    title: "70% Productivity Increase",
    subtitle: "with a GPT-powered Marketing Assistant",
    image: "/insights/pattern.jpg",
    logo: "/insights/focus-global-logo.png",
    logoAlt: "Focus Global",
  },
];

export const InsightsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f4eae0] px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-900 mb-12">
          Latest Insights
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:grid-rows-[auto_auto]">
          {/* Left Column - Featured Card */}
          <div className="row-span-2 min-h-[500px] lg:min-h-[600px]">
            <a href="#" className="block group h-full">
              <div className="bg-white  overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="flex-1 min-h-[70%] bg-gray-200 overflow-hidden">
                  <img
                    src={insights[0].image}
                    alt={insights[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/800x600?text=BPI+Event";
                    }}
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span
                    className={`${insights[0].categoryColor} text-white text-xs font-medium px-3 py-1 rounded w-fit`}
                  >
                    {insights[0].category}
                  </span>
                  <h3 className="font-display text-xl font-medium text-gray-900 mt-4 leading-tight group-hover:text-coral transition-colors">
                    {insights[0].title}
                  </h3>
                  {/* Logo */}
                  <div className="mt-auto pt-4">
                    <img
                      src={insights[0].logo}
                      alt={insights[0].logoAlt}
                      className="h-8 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column - Top Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 2 */}
            <a href="#" className="block group">
              <div className="bg-white  overflow-hidden h-full">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={insights[1].image}
                    alt={insights[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/400x300?text=Keyboard";
                    }}
                  />
                </div>
                <div className="p-4">
                  <span
                    className={`${insights[1].categoryColor} text-white text-xs font-medium px-3 py-1 rounded`}
                  >
                    {insights[1].category}
                  </span>
                  <h3 className="font-display text-sm font-medium text-gray-900 mt-3 leading-tight group-hover:text-coral transition-colors">
                    {insights[1].title}
                  </h3>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a href="#" className="block group">
              <div className="bg-white  overflow-hidden h-full">
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={insights[2].image}
                    alt={insights[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/400x300?text=Data+Lines";
                    }}
                  />
                </div>
                <div className="p-4">
                  <span
                    className={`${insights[2].categoryColor} text-white text-xs font-medium px-3 py-1 rounded`}
                  >
                    {insights[2].category}
                  </span>
                  <h3 className="font-display text-sm font-medium text-gray-900 mt-3 leading-tight group-hover:text-coral transition-colors">
                    {insights[2].title}
                  </h3>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column - Bottom Row - Horizontal Card */}
          <a href="#" className="block group h-full">
            <div className="bg-white  overflow-hidden flex h-full min-h-[200px]">
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <span
                  className={`${insights[3].categoryColor} text-white text-xs font-medium px-3 py-1 rounded w-fit`}
                >
                  {insights[3].category}
                </span>
                <h3 className="font-display text-xl font-medium text-gray-900 mt-3 leading-tight group-hover:text-coral transition-colors">
                  {insights[3].title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {insights[3].subtitle}
                </p>
                {/* Logo */}
                <div className="mt-4">
                  <img
                    src={insights[3].logo}
                    alt={insights[3].logoAlt}
                    className="h-6 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
              {/* Image */}
              <div className="w-1/3 bg-gray-200 overflow-hidden">
                <img
                  src={insights[3].image}
                  alt={insights[3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/300x200?text=Pattern";
                  }}
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

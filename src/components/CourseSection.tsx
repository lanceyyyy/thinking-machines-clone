import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const learningPoints = [
  'How to use ChatGPT as a practical "second brain" to save time and work smarter',
  "The three must-have skills for AI fluency in today's workplace",
  "When off-the-shelf AI tools are enough—and when custom systems are worth it",
  "Proven adoption patterns that help large organizations move from pilots to real impact",
];

export const CourseSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    howDidYouFind: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 md:py-24 bg-white px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-7 gap-12 lg:gap-12">
          {/* Left Content - 3/4 width */}
          <div className="lg:col-span-5">
            <h1 className="font-display text-3xl md:text-4xl  font-normal text-gray-900 leading-tight">
              Second Brain, Real Results: How to Work with AI at an Executive
              Level
            </h1>

            {/* Instructor */}
            <div className="mt-8">
              <p className="text-gray-900 font-medium mb-4">Instructor:</p>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden flex-shrink-0">
                  <img
                    src="/instructor.jpg"
                    alt="Stephanie Sy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Stephanie Sy</p>
                  <p className="text-gray-600 text-sm">
                    Founder and CEO of Thinking Machines
                  </p>
                  <p className="text-gray-600 text-sm">
                    Stanford alumni and ex-Google
                  </p>
                </div>

                {/* Awards */}
                <div className="hidden md:block ml-auto">
                  <p className="text-gray-900 text-sm font-medium mb-2">
                    Awards
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-16 bg-gray-100 rounded flex items-center justify-center text-[8px] text-gray-500">
                      INNOVATION
                    </div>
                    <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center text-[8px] text-gray-500">
                      30
                    </div>
                    <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center text-[8px] text-gray-500">
                      CEBIT
                    </div>
                    <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center text-[8px] text-gray-500">
                      AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-black text-sm mt-8 leading-relaxed">
              In just 20 minutes, discover how to go beyond "asking ChatGPT a
              question" and start using generative AI as a serious partner in
              your work. Stephanie Sy, CEO of Thinking Machines Data Science,
              draws on a decade of experience helping enterprises roll out AI to
              show you what's possible today—from building your own "second
              brain" with off-the-shelf tools, to scaling secure, compliant
              systems inside large organizations. This course is practical,
              candid, and designed to help leaders cut through the hype and
              focus on what drives business impact.
            </p>

            {/* What you'll learn */}
            <div className="mt-8">
              <p className="font-semibold text-sm text-black mb-4">
                What you'll learn:
              </p>
              <ul className="space-y-3">
                {learningPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-coral flex items-center justify-center flex-shrink-0 ">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-black text-xs">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trusted by */}
            <div className="mt-8">
              <p className="text-gray-900 font-medium mb-4">Trusted by</p>
              <div className="flex items-center gap-6 flex-wrap">
                <img
                  src="/first-logo/Asian-Institute-of-Management-logo.png"
                  alt="Asian Institute of Management"
                  className="h-14 object-contain "
                />
                <img
                  src="/first-logo/ey-logo.png"
                  alt="EY"
                  className="h-14 object-contain "
                />
                <img
                  src="/first-logo/megawide_construction_corporation_logo.jpeg"
                  alt="Megawide Construction"
                  className="h-14 object-contain "
                />
                <img
                  src="/first-logo/yale.jpeg"
                  alt="Yale"
                  className="h-14 object-contain "
                />
              </div>
            </div>
          </div>

          {/* Right Form - 1/4 width */}
          <div className="lg:col-span-2">
            <div className="bg-white  shadow-sm">
              <h2 className="font-display text-xl  text-gray-900 mb-2">
                Build your second brain with AI
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Get access to our executive-level AI course today.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-900">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-900">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4  bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-900">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4  bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-900">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4  bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-900">
                    Job title
                  </label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) =>
                      setFormData({ ...formData, jobTitle: e.target.value })
                    }
                    className="w-full px-4  bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-900">
                    How did you find us?
                  </label>
                  <select
                    value={formData.howDidYouFind}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        howDidYouFind: e.target.value,
                      })
                    }
                    className="w-full px-4 py-1 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors appearance-none cursor-pointer text-xs"
                  >
                    <option value="">Select from dropdown</option>
                    <option value="google">Google Search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed">
                  By filling out this form, you consent to receive updates via
                  email about our events and services, including our newsletter.
                </p>

                <Button
                  type="submit"
                  variant="coral"
                  className="w-full text-sm"
                  size="lg"
                >
                  Start learning today
                </Button>

                <p className="text-gray-500 text-xs ">
                  Never share sensitive information (credit card numbers, social
                  security numbers, passwords) through this form.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

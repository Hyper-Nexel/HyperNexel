// src/pages/DigitalMarketingPage.jsx
import React from "react";

const DigitalMarketingPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Digital Reach */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Abstract network, data streams, or a world map with connections */}
        <div className="absolute h-[100vh] inset-0 bg-cover bg-center">
          {/* Overlay for readability */}
          <img
            src="/heroimages/marketing-hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-40"
          />{" "}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Maximize Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500">
              Digital Impact
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Driving targeted traffic and converting visitors into loyal
            customers with data-driven strategies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-indigo-500 to-indigo-600 text-gray-900
                       hover:from-indigo-600 hover:to-indigo-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Grow My Online Presence
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* The Strategy & ROI Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Strategic Growth for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-400">
                Digital Age
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Digital marketing is about reaching the right people, at the right
              time, with the right message. We develop integrated strategies
              that combine the power of search, social media, content, and paid
              advertising to maximize your ROI.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our approach is always data-driven, ensuring every campaign is
              optimized for peak performance and tangible results.
            </p>
          </div>
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
            {/* Placeholder for an image of analytics dashboard or a target with arrows */}
            <div className="flex justify-center items-center h-48 bg-gray-800 rounded-lg">
              <span className="text-5xl text-indigo-500">
                [ANALYTICS_DASHBOARD_SVG]
              </span>
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Data-driven insights leading to optimal campaign
              performance.*
            </p>
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Channels Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-400">
                Digital Marketing Services
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A full spectrum of digital strategies to enhance your brand's
              online presence and generate leads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Search Engine Marketing (SEM)",
                description:
                  "Paid advertising campaigns on search engines like Google to get instant visibility.",
              },
              {
                icon: "💬",
                title: "Social Media Marketing (SMM)",
                description:
                  "Engaging your audience on platforms like Facebook, Instagram, LinkedIn, and X.",
              },
              {
                icon: "✍️",
                title: "Content Marketing",
                description:
                  "Creating valuable, relevant content to attract and retain a clearly defined audience.",
              },
              {
                icon: "📧",
                title: "Email Marketing",
                description:
                  "Building and nurturing customer relationships through effective email campaigns.",
              },
              {
                icon: "🎯",
                title: "Conversion Rate Optimization (CRO)",
                description:
                  "Turning website visitors into customers by optimizing your digital assets.",
              },
              {
                icon: "📈",
                title: "Analytics & Reporting",
                description:
                  "Transparent tracking and comprehensive reports to measure success and identify opportunities.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md
                                         hover:border-indigo-600 transition-colors duration-300 transform hover:-translate-y-1" // Changed border hover
              >
                <div className="text-4xl mb-4 text-indigo-500">{item.icon}</div>{" "}
                {/* Changed icon color */}
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Reused/Modified) */}
      <section className="relative bg-gray-950 text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent" />{" "}
          {/* Changed background gradient */}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready to Dominate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500">
              Digital Landscape?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's craft a winning digital marketing strategy tailored for your
            success.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-indigo-500 to-indigo-600 text-gray-900
                       hover:from-indigo-600 hover:to-indigo-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6" // Changed CTA button gradient
          >
            Get a Digital Strategy
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;

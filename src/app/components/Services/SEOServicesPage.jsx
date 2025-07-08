// src/pages/SEOServicesPage.jsx
import React from "react";

const SEOServicesPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Search & Growth */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Abstract Data Visualization or Search Bar */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/service-hero/seo-bg.jpg")',
            backgroundPosition: "center 80%",
          }} // Placeholder: replace with an SEO/growth themed image
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Boost Your Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">
              Visibility
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Unlock higher search rankings and attract more organic traffic with
            our expert SEO strategies.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-900
                       hover:from-emerald-600 hover:to-emerald-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Improve My Rankings
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* Why SEO Matters & Our Approach Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 order-2 md:order-1">
            {/* Placeholder for an SVG or image representing a graph or rising arrow */}
            <div className="flex justify-center items-center h-48 bg-gray-800 rounded-lg">
              <span className="text-5xl text-emerald-500">
                [GROWTH_CHART_SVG]
              </span>
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Visualize your growth with our data-driven SEO
              strategies.*
            </p>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              The Power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">
                Organic Growth
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              SEO is more than just keywords; it's about connecting with your
              audience at the right moment. Our tailored strategies focus on
              delivering measurable results, improving your online authority,
              and driving qualified traffic that converts into loyal customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our SEO Pillars Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-400">
                Core SEO Services
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A holistic approach to search engine optimization, covering all
              crucial aspects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔎",
                title: "Keyword & Competitor Analysis",
                description:
                  "Deep dive into what your audience is searching for and what your competitors are doing.",
              },
              {
                icon: "📄",
                title: "On-Page SEO Optimization",
                description:
                  "Refining your website's content, structure, and meta-data for optimal search performance.",
              },
              {
                icon: "🔗",
                title: "Off-Page SEO & Link Building",
                description:
                  "Building high-quality backlinks and online authority to boost your domain rating.",
              },
              {
                icon: "🛠️",
                title: "Technical SEO Audits",
                description:
                  "Identifying and fixing technical issues that hinder search engine crawling and indexing.",
              },
              {
                icon: "📍",
                title: "Local SEO & GMB Optimization",
                description:
                  "Dominating local search results and attracting nearby customers through targeted strategies.",
              },
              {
                icon: "📊",
                title: "Performance Tracking & Reporting",
                description:
                  "Transparent analytics and regular reports showcasing your SEO progress and ROI.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md
                                         hover:border-emerald-600 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-emerald-500">
                  {item.icon}
                </div>
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
        {/* Subtle background pattern/overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready to See Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">
              Climb the Ranks?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's create an SEO strategy that puts you ahead of the competition.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-emerald-500 to-emerald-600 text-gray-900
                       hover:from-emerald-600 hover:to-emerald-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Get Your Free SEO Audit
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SEOServicesPage;

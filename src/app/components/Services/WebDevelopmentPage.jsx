// src/pages/WebDevelopmentPage.jsx
import React from "react";

const WebDevelopmentPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Code & Creativity */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Abstract Code or Network */}
        <div className="absolute h-[100vh] inset-0 bg-cover bg-center">
          {/* Overlay for readability */}
          <img
            src="/heroimages/web-development-hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-50"
          />{" "}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Elevate Your Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-red-500">
              Web Presence
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Crafting high-performing, secure, and visually stunning web
            experiences tailored for your success.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-red-500 to-red-600 text-gray-900
                       hover:from-red-600 hover:to-red-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Start Your Web Project
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* Introduction & Process Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              From Concept to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-400">
                Launch
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We translate your vision into a robust digital reality. Our
              comprehensive web development services ensure your platform is not
              just beautiful, but also highly functional, scalable, and secure.
              We focus on creating engaging user experiences that drive
              conversions and build brand loyalty.
            </p>
          </div>
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
            {/* Placeholder for an SVG or image representing a development process flow */}
            <div className="flex justify-center items-center h-48 bg-gray-800 rounded-lg">
              <span className="text-5xl text-red-500">[CODE_FLOW_SVG]</span>
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Our streamlined development process ensures
              efficiency and quality.*
            </p>
          </div>
        </div>
      </section>

      {/* Key Specializations Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-400">
                Web Development Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We specialize in a broad spectrum of web technologies and
              solutions to meet diverse client needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Custom Web Applications",
                description:
                  "Building bespoke applications tailored to automate workflows and enhance user interaction.",
              },
              {
                icon: "🛒",
                title: "E-commerce Development",
                description:
                  "Creating powerful online stores with seamless user journeys and secure payment gateways.",
              },
              {
                icon: "📱",
                title: "Responsive Websites",
                description:
                  "Ensuring flawless display and functionality across all devices, from mobile to desktop.",
              },
              {
                icon: "⚙️",
                title: "CMS & Platform Integration",
                description:
                  "Implementing and customizing popular CMS like WordPress, Shopify, or headless solutions.",
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description:
                  "Optimizing for speed, scalability, and robust performance under heavy traffic.",
              },
              {
                icon: "🔒",
                title: "Security & Maintenance",
                description:
                  "Implementing top-tier security protocols and providing ongoing support and updates.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md
                                         hover:border-red-600 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-red-500">{item.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready for a Powerful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-red-400 to-red-500">
              Web Solution?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's build a digital platform that sets you apart. Reach out to
            discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-red-500 to-red-600 text-gray-900
                       hover:from-red-600 hover:to-red-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Get a Custom Quote
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;

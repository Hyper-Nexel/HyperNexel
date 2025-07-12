// src/pages/CustomDigitalSolutionsPage.jsx
import React from "react";

const CustomDigitalSolutionsPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Bespoke Innovation */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Abstract circuit board, interconnected nodes, or a complex puzzle being solved */}
        <div className="absolute -h-[100vh] inset-0 bg-cover bg-center">
          {/* Overlay for readability */}
          <img
            src="/heroimages/custom-solutions-hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-40"
          />{" "}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Tailored <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500">
              Digital Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Solving your unique business challenges with innovative,
            custom-built digital platforms.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900
                       hover:from-teal-600 hover:to-teal-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Discuss Your Custom Needs
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* The Problem-Solving Approach Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 order-2 md:order-1">
            {/* Placeholder for an image of gears, puzzle pieces, or a blueprint */}
            <div className="flex justify-center items-center h-48 bg-gray-800 rounded-lg">
              <img src="/servicesimages/customsolutions.jpeg" />
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Crafting unique solutions for complex challenges.*
            </p>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Beyond the Standard: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-400">
                Innovation for Your Unique Vision
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Off-the-shelf solutions don't always fit. When your business faces
              specific, complex challenges, our team thrives on building
              **custom digital solutions** that precisely meet your
              requirements, optimize operations, and unlock new opportunities.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We leverage cutting-edge technologies to design, develop, and
              deploy bespoke software that gives you a distinct competitive
              advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Custom Solution Process Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-400">
                Custom Solution Process
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A collaborative and agile approach to developing software that
              perfectly aligns with your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Discovery & Strategy",
                description:
                  "Thorough analysis of your needs, challenges, and objectives to define the perfect solution.",
              },
              {
                icon: "✍️",
                title: "Design & Architecture",
                description:
                  "Crafting robust system architectures and intuitive user interfaces for optimal performance.",
              },
              {
                icon: "💻",
                title: "Development & Integration",
                description:
                  "Building scalable and secure solutions with continuous integration and quality assurance.",
              },
              {
                icon: "🚀",
                title: "Deployment & Launch",
                description:
                  "Seamless deployment and rigorous testing to ensure your solution performs flawlessly.",
              },
              {
                icon: "🔄",
                title: "Support & Iteration",
                description:
                  "Ongoing maintenance, support, and feature enhancements to ensure long-term success.",
              },
              {
                icon: "🛠️",
                title: "Scalability & Future-Proofing",
                description:
                  "Designing solutions that can grow with your business and adapt to future demands.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md
                                         hover:border-teal-600 transition-colors duration-300 transform hover:-translate-y-1" // Changed border hover
              >
                <div className="text-4xl mb-4 text-teal-500">{item.icon}</div>{" "}
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/30 via-transparent to-transparent" />{" "}
          {/* Changed background gradient */}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Have a Unique Challenge? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500">
              We Have the Solution.
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how a custom digital solution can transform your
            operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-teal-500 to-teal-600 text-gray-900
                       hover:from-teal-600 hover:to-teal-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6" // Changed CTA button gradient
          >
            Get a Custom Solution Quote
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CustomDigitalSolutionsPage;

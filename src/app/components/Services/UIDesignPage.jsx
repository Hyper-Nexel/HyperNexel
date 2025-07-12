// src/pages/UIDesigningPage.jsx

import React from "react";

const UIDesigningPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: The Art of Experience */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Abstract UI elements, wireframes, or glowing screen */}
        <div className="absolute h-[100vh] inset-0 bg-cover bg-center">
          {/* Overlay for readability */}
          <img
            src="/heroimages/uiux-hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-40"
          />{" "}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Designing Intuitive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500">
              User Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Crafting seamless digital journeys that delight users and drive
            engagement.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-violet-500 to-violet-600 text-gray-900
                       hover:from-violet-600 hover:to-violet-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Start Your Design Project
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-400">
              Design Philosophy
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
            Great design isn't just about aesthetics; it's about functionality,
            usability, and understanding human behavior. We blend creative
            vision with data-driven insights to build interfaces that are both
            beautiful and incredibly effective.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl text-violet-500 mb-4 inline-block">
                💡
              </span>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                User-Centric
              </h3>
              <p className="text-base text-gray-400">
                Every design decision is rooted in user research and empathy.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl text-violet-500 mb-4 inline-block">
                🎨
              </span>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Visually Stunning
              </h3>
              <p className="text-base text-gray-400">
                Creating captivating visuals that reflect your brand's identity.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 shadow-md transform hover:-translate-y-2 transition-transform duration-300">
              <span className="text-5xl text-violet-500 mb-4 inline-block">
                🚀
              </span>
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                Results-Driven
              </h3>
              <p className="text-base text-gray-400">
                Designs optimized to achieve your business objectives and KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-400">
                UI/UX Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We cover the full spectrum of user experience and interface
              design, from initial research to final polished designs and
              interactive prototypes.
            </p>
            <ul className="space-y-4 text-left text-gray-400">
              <li className="flex items-start">
                <span className="text-violet-500 text-2xl mr-3">[✅]</span>
                <div>
                  <strong className="text-gray-100">
                    User Research & Analysis:
                  </strong>{" "}
                  Understanding your audience and their needs.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 text-2xl mr-3">[✅]</span>
                <div>
                  <strong className="text-gray-100">
                    Wireframing & Prototyping:
                  </strong>{" "}
                  Visualizing user flows and interactions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 text-2xl mr-3">[✅]</span>
                <div>
                  <strong className="text-gray-100">
                    User Interface (UI) Design:
                  </strong>{" "}
                  Crafting visually appealing and intuitive interfaces.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 text-2xl mr-3">[✅]</span>
                <div>
                  <strong className="text-gray-100">Usability Testing:</strong>{" "}
                  Validating designs with real users for optimal performance.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 text-2xl mr-3">[✅]</span>
                <div>
                  <strong className="text-gray-100">Interaction Design:</strong>{" "}
                  Defining how users interact with your product for fluid
                  experiences.
                </div>
              </li>
            </ul>
          </div>
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
            {/* Placeholder for an image of a well-designed app screen or a hand holding a device */}
            <div className="flex justify-center items-center h-64 bg-gray-800 rounded-lg">
              <span className="text-5xl text-violet-500">[APP_SCREEN_SVG]</span>
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Intuitive design for a seamless user journey.*
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section (Reused/Modified) */}
      <section className="relative bg-gray-950 text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready for a Design That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-violet-400 to-violet-500">
              Stands Out?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's create an unforgettable user experience for your next digital
            product.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-violet-500 to-violet-600 text-gray-900
                       hover:from-violet-600 hover:to-violet-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Discuss Your UI/UX Needs
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default UIDesigningPage;

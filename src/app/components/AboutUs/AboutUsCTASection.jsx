// src/components/About/CtaSection.jsx
import React from "react";

const AboutUsCTASection = () => {
  return (
    <section className="relative bg-black text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Overlay with subtle gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 animate-gradient-xy bg-gradient-to-br from-gray-900 via-amber-950 to-black" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
          Ready to Elevate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
            Digital Presence?
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Let's collaborate to build something extraordinary. Our team is eager
          to hear your ideas and turn them into a stunning reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
          <a
            href="/contact" // Replace with your actual contact page link
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-900
                       hover:from-amber-600 hover:to-yellow-700
                       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get in Touch
            {/* Placeholder Arrow Icon */}
            <span className="ml-3 text-2xl">→</span>
          </a>
          <a
            href="/portfolio" // Replace with your actual portfolio page link
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-gray-600 text-lg font-semibold rounded-full
                       text-gray-200 hover:border-amber-500 hover:text-amber-400
                       bg-transparent hover:bg-white/5 shadow-md
                       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            View Our Work
            {/* Placeholder Eye Icon */}
            <span className="ml-3 text-2xl">[]</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTASection;

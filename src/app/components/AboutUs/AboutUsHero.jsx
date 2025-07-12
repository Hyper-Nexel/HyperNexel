// src/pages/AboutUsPage.jsx (or whatever your About Us component is called)
import React from "react";

const AboutUsHero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-black text-gray-200 overflow-hidden px-6 md:px-12 py-20">
      {/* Background Visuals: Subtle, Animated Gold Gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="/heroimages/about-hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Increased blur for depth */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
          Crafting Digital Excellence for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
            A Transformed Tomorrow
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          At Hyper Nexel, we don't just build; we innovate. Discover the
          passion, precision, and partnership behind every solution we deliver.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHero;

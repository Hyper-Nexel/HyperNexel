import React from "react";

const Header = () => {
  return (
    <header className="relative h-[100vh] flex items-center justify-center bg-gray-950 text-white overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <img
          src="/heroimages/landing-page-hero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide drop-shadow-xl uppercase">
          Ignite Your Brand with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Hyper Nexel
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide">
          We blend <span className="font-semibold text-white">creativity</span>{" "}
          and <span className="font-semibold text-white">strategy</span> to
          craft exceptional websites, impactful visuals, and immersive digital
          experiences that fuel your growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-700 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            aria-label="Let's Talk"
          >
            <span className="mr-2">🚀</span> Let’s Talk
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-gray-200 text-lg font-medium rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            aria-label="Explore Services"
          >
            Explore Services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

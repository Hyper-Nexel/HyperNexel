// src/pages/AboutUsPage.jsx (continued)
import React from "react";

const OurStory = () => {
  return (
    <section className="relative bg-gray-950 text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Blobs for depth */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image/Visual Column */}
        <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src="/servicesimages/about-img.jpeg"
            alt="Our Story at Hyper Nexel"
            className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/50 transition-all duration-300" />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-500 transition-all duration-300"></div>
        </div>

        {/* Text Content Column */}
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Journey & Vision
            </span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Founded with a passion for innovation and a commitment to
            excellence, Hyper Nexel began with a simple belief: technology
            should empower, not complicate. We envisioned a world where
            businesses, regardless of size, could harness cutting-edge digital
            solutions to achieve their grandest ambitions.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Our mission is to be the trusted partner that transforms visionary
            ideas into impactful digital realities. We combine strategic
            insight, creative design, and robust development to deliver
            solutions that are not just visually stunning, but also highly
            functional, scalable, and future-proof.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every project is a partnership, and every line of code is infused
            with dedication to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

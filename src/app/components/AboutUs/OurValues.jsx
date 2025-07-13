// src/pages/AboutUsPage.jsx (continued)
import React from "react";

const valuesData = [
  {
    icon: "💡", // Unicode emoji or replace with actual icons (e.g., Heroicons, Font Awesome)
    title: "Innovation First",
    description:
      "We constantly explore new technologies and creative approaches to deliver groundbreaking solutions that set you apart.",
  },
  {
    icon: "🎯",
    title: "Results-Driven",
    description:
      "Our focus is always on tangible outcomes, whether it's boosting conversions, increasing engagement, or streamlining operations.",
  },
  {
    icon: "🤝",
    title: "Transparent Collaboration",
    description:
      "We believe in open communication and working hand-in-hand with our clients, making you an integral part of the process.",
  },
  {
    icon: "✨",
    title: "Uncompromising Quality",
    description:
      "From design pixels to code architecture, we maintain the highest standards to ensure reliability, performance, and elegance.",
  },
  {
    icon: "🌱",
    title: "Scalable Growth",
    description:
      "We build for tomorrow, ensuring our solutions are flexible and robust enough to evolve and grow with your business needs.",
  },
  {
    icon: "💖",
    title: "Client-Centricity",
    description:
      "Your success is our success. We're dedicated to understanding and exceeding your expectations with tailored strategies.",
  },
];

const OurValues = () => {
  return (
    <section className="relative bg-black text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Values
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide every decision and define our commitment
            to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {valuesData.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center
                         border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-yellow-900/40
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {/* Optional: Glowing border effect on hover for the card itself */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-600 to-gold-700 blur-sm" />
              </div>

              <div
                className="relative z-10 flex justify-center items-center size-16 bg-gray-800 rounded-xl mb-6
                           group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-yellow-700
                           transition-all duration-300 ease-in-out transform group-hover:scale-110"
              >
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h3 className="relative z-10 text-xl font-bold text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-yellow-400 transition-all duration-300">
                {value.title}
              </h3>
              <p className="relative z-10 text-base text-gray-400 group-hover:text-white leading-relaxed flex-grow">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;

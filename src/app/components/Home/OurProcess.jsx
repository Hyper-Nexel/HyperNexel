// src/components/Home/OurProcess.jsx
import React from "react";

const steps = [
  {
    title: "Discovery Call",
    description:
      "We start with a conversation to understand your vision, goals, and unique challenges.",
  },
  {
    title: "Planning & Design",
    description:
      "We create wireframes, map out strategy, and design intuitive user experiences for your audience.",
  },
  {
    title: "Development",
    description:
      "We bring designs to life with clean code, scalability in mind, and cross-device performance.",
  },
  {
    title: "Launch & Support",
    description:
      "After going live, we provide continuous monitoring, updates, and long-term support.",
  },
];

const OurProcess = () => {
  return (
    <section className="relative bg-gray-950 text-white py-10 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Optional: Subtle Background Gradients/Shapes for depth */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-5000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            From Idea to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Launch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Our process is streamlined for clarity, speed, and results — every
            step tailored to your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center
                         border border-gray-800 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/40
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {/* Optional: Glowing border effect on hover for the card itself */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 blur-sm" />
              </div>

              <div
                className="relative z-10 w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gray-800 text-3xl font-bold
                           text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600
                           group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                {index + 1}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="relative z-10 text-base text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

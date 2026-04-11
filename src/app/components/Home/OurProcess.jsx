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
    <section className="relative bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Refined Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent opacity-50 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            From Idea to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Launch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Our process is streamlined for clarity, speed, and absolute quality — every
            step tailored perfectly to your goals.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center z-10"
              >
                {/* Glowing Step Number */}
                <div
                  className="relative w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-gray-950 border border-white/10
                             text-2xl font-bold text-white shadow-xl
                             group-hover:-translate-y-2 group-hover:bg-white/[0.02] group-hover:border-blue-500/40 transition-all duration-500 ease-out"
                >
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  0{index + 1}
                </div>

                <h3 className="relative z-10 text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="relative z-10 text-base text-gray-400 leading-relaxed font-light px-2 group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

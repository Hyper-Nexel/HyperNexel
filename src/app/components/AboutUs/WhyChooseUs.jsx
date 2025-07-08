// src/components/About/WhyChooseUs.jsx
import React from "react";

const reasons = [
  {
    icon: "🌟", // Placeholder icon
    title: "Unmatched Expertise",
    description:
      "Our team comprises industry veterans and emerging talents, ensuring cutting-edge solutions.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Approach",
    description:
      "Your goals are our blueprint. We work closely to tailor strategies that deliver real impact.",
  },
  {
    icon: "🚀",
    title: "Future-Proof Innovation",
    description:
      "We don't just solve current problems; we build scalable solutions ready for tomorrow's challenges.",
  },
  {
    icon: "✨",
    title: "Exemplary Quality",
    description:
      "From concept to deployment, we uphold the highest standards of craftsmanship and performance.",
  },
  {
    icon: "📈",
    title: "Measurable Results",
    description:
      "We focus on deliverable outcomes, ensuring our solutions provide a clear return on your investment.",
  },
  {
    icon: "🔒",
    title: "Security & Reliability",
    description:
      "Your data and digital assets are protected with robust security measures and dependable infrastructure.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-black text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Why Partner with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Hyper Nexel?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the difference that dedication, innovation, and expertise
            make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center
                         border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-yellow-900/40
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-600 to-gold-700 blur-sm" />
              </div>

              <div
                className="relative z-10 flex justify-center items-center size-16 bg-gray-800 rounded-xl mb-6
                           group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-yellow-700
                           transition-all duration-300 ease-in-out transform group-hover:scale-110"
              >
                <span className="text-3xl">{reason.icon}</span>{" "}
                {/* Icon Placeholder */}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-yellow-400 transition-all duration-300">
                {reason.title}
              </h3>
              <p className="relative z-10 text-base text-gray-400 leading-relaxed flex-grow">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

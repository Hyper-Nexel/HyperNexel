// src/components/About/Milestones.jsx
import React from "react";

const milestonesData = [
  {
    year: "2018",
    event:
      "Founded Hyper Nexel: Pioneering digital solutions with a small, dedicated team.",
  },
  {
    year: "2019",
    event:
      "Launched First Major Platform: Delivered our flagship e-commerce solution for a key client.",
  },
  {
    year: "2021",
    event:
      "Expanded India Operations: Opened new development hub in Bengaluru, growing our talent pool.",
  },
  {
    year: "2023",
    event:
      "Achieved 100+ Successful Projects: A testament to our consistent delivery and client satisfaction.",
  },
  {
    year: "2024",
    event:
      "Introduced AI-Powered Services: Integrated advanced AI capabilities into our offerings.",
  },
  {
    year: "Today",
    event:
      "Continuing Global Impact: Serving clients across 5 continents, pushing boundaries of digital innovation.",
  },
];

const Milestones = () => {
  return (
    <section className="relative bg-gray-900 text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("/assets/background-texture.svg")',
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Our Journey: Key{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Milestones
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Charting our growth, innovation, and commitment to excellence.
          </p>
        </div>

        <div className="relative border-l-2 border-amber-600 space-y-12 pl-6 md:pl-10">
          {milestonesData.map((milestone, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div
                className="absolute -left-3.5 md:-left-4 top-0.5 size-7 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center
                          border-2 border-gray-900 shadow-lg
                          group-hover:scale-125 transition-transform duration-300 ease-out"
              >
                {/* Placeholder for small icon if desired */}
                <span className="text-sm text-black font-semibold">
                  {index + 1}
                </span>
              </div>

              <div
                className="bg-gray-950 rounded-lg p-5 shadow-lg ml-4 md:ml-0
                          border border-gray-800 group-hover:border-amber-600 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-yellow-400 transition-all duration-300">
                  {milestone.year}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {milestone.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;

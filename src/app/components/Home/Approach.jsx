import React from "react";

const approachCards = [
  {
    title: "Tailored Solutions",
    description:
      "Each solution is handcrafted for your business. We don't use cookie-cutter templates — instead, we engineer platforms that fit your brand, audience, and growth goals.",
  },
  {
    title: "Long-Term Scalability",
    description:
      "Your business isn’t static — and your tech shouldn’t be either. From clean architecture to modular design, we build with tomorrow in mind.",
  },
  {
    title: "Results-Driven Design",
    description:
      "Good design should do more than look pretty. We focus on user experience, conversion funnels, and performance metrics to drive real business value.",
  },
  {
    title: "Transparent Collaboration",
    description:
      "We work with you, not just for you. From kickoff to delivery, we collaborate openly to ensure alignment with your goals, timeline, and KPIs.",
  },
  {
    title: "Speed + Quality",
    description:
      "Deadlines matter — but not at the expense of quality. Our team delivers fast without cutting corners, using agile methods and rigorous QA.",
  },
  {
    title: "Technology with Purpose",
    description:
      "We don’t chase trends. We choose tools and stacks based on what’s right for your needs — stable, secure, and maintainable over time.",
  },
];

const Approach = () => {
  return (
    <section className="relative bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Refined Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600">
              Approach
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A thoughtful, scalable, and performance-driven methodology built to
            fuel growth and absolute clarity at every stage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-10 flex flex-col items-start border border-white/[0.05]
                         hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 ease-out
                         transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Number Watermark */}
              <div className="absolute -top-4 -right-2 text-[120px] font-extrabold text-white/[0.03] group-hover:text-cyan-400/[0.05] transition-colors duration-500 pointer-events-none select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-cyan-300">
                {card.title}
              </h3>

              <p className="relative z-10 text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                {card.description}
              </p>
              
              {/* Decorative Line */}
              <div className="relative z-10 mt-8 w-12 h-[2px] bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-violet-600 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

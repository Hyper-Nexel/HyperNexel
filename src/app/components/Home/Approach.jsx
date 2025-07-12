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
    <section className="relative bg-gray-950 text-white py-16 md:py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Optional: Subtle Background Gradients/Shapes for depth - can be reused from Services or new ones */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
              Approach
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A thoughtful, scalable, and performance-driven methodology built to
            fuel growth and clarity at every stage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col items-start border border-gray-800
                         hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-900/40 transition-all duration-300 ease-in-out
                         transform hover:-translate-y-2"
            >
              {/* Optional: Glowing border effect on hover for the card itself */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-cyan-500 via-violet-600 to-indigo-700 blur-sm" />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-cyan-300">
                {card.title}
              </h3>

              <p className="relative z-10 text-base text-gray-400 group-hover:text-white leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

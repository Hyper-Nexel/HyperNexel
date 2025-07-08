import React from "react";

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gray-950 text-white overflow-hidden px-6 sm:px-10 lg:px-16"
    >
      {/* Background Gradients/Shapes for depth */}
      <div className="absolute inset-0 opacity-40 z-0">
        <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Ignite Your Next Project?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you're starting from scratch or scaling up, we're here to turn
          your vision into a high-impact digital product that drives real
          results.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
          <a
            href="#contact-form" // Assuming a contact form or specific contact section
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-700 text-white text-lg font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            aria-label="Get in Touch"
          >
            <span className="mr-2 text-xl">✨</span> Get in Touch
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-500 text-gray-200 text-lg font-medium rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            aria-label="Explore Services"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

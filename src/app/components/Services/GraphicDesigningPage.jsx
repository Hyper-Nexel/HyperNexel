// src/pages/GraphicDesigningPage.jsx
import React from "react";

const GraphicDesigningPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Canvas of Creativity */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Artistic brush strokes, abstract shapes, or a designer's desk */}
        <div className="absolute h-[100vh] inset-0 bg-cover bg-center">
          {/* Overlay for readability */}
          <img
            src="/heroimages/graphic-designing-hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-40"
          />{" "}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Visually Captivating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500">
              Graphic Design
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Bringing your brand story to life through compelling and memorable
            visuals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-pink-500 to-pink-600 text-gray-900
                       hover:from-pink-600 hover:to-pink-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Unleash Your Brand's Visuals
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* Brand Identity & Impact Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              The Power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-400">
                First Impressions
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              In today's visual world, outstanding graphic design is crucial for
              standing out. We create distinctive logos, striking brand
              identities, and engaging marketing materials that capture
              attention and communicate your message effectively.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From concept to final artwork, our designs are crafted to evoke
              emotion and build lasting connections with your audience.
            </p>
          </div>
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800">
            {/* Placeholder for an image of a brand style guide or a mock-up of a well-designed product */}
            <div className="flex justify-center items-center h-48 bg-gray-800 rounded-lg">
              <img src="/servicesimages/graphicdesign.jpeg" />
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Your brand's distinct visual voice brought to
              life.*
            </p>
          </div>
        </div>
      </section>

      {/* Our Design Offerings Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-400">
                Graphic Design Services
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive suite of design solutions to build and enhance
              your brand's visual identity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Logo & Brand Identity",
                description:
                  "Crafting unique logos and comprehensive brand guidelines that define your presence.",
              },
              {
                icon: "📰",
                title: "Marketing Collateral",
                description:
                  "Designing brochures, flyers, business cards, and presentations that leave an impression.",
              },
              {
                icon: "📱",
                title: "Social Media Graphics",
                description:
                  "Engaging visuals optimized for all social platforms to boost your online presence.",
              },
              {
                icon: "📦",
                title: "Packaging Design",
                description:
                  "Creating attractive and functional packaging that stands out on the shelves.",
              },
              {
                icon: "🎨",
                title: "Illustration & Iconography",
                description:
                  "Custom illustrations and icon sets to add unique character to your digital assets.",
              },
              {
                icon: "🖥️",
                title: "Website & App Visuals",
                description:
                  "Designing stunning graphical elements for seamless integration into web and mobile platforms.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md
                                         hover:border-pink-600 transition-colors duration-300 transform hover:-translate-y-1" // Changed border hover
              >
                <div className="text-4xl mb-4 text-pink-500">{item.icon}</div>{" "}
                {/* Changed icon color */}
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Reused/Modified) */}
      <section className="relative bg-gray-950 text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />{" "}
          {/* Changed background gradient */}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready to Make a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500">
              Visual Statement?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let our creativity transform your brand's image.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-pink-500 to-pink-600 text-gray-900
                       hover:from-pink-600 hover:to-pink-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6" // Changed CTA button gradient
          >
            Get a Design Consultation
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesigningPage;

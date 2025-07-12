// src/pages/VideoProductionPage.jsx
import React from "react";

const VideoProductionPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Cinematic Impact */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Background Image/SVG: Abstract film strips, light rays, or camera lens */}
        <div className="absolute h-[100vh] inset-0 bg-cover bg-center">
          {/* Overlay for readability */}
          <img
            src="/heroimages/video-production-hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-40"
          />{" "}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Captivating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
              Video Production
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Bringing your stories to life with high-quality, impactful video
            content.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-orange-500 to-orange-600 text-gray-900
                       hover:from-orange-600 hover:to-orange-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Produce My Vision
            <span className="ml-2 text-xl">→</span>{" "}
            {/* Placeholder Arrow Icon */}
          </a>
        </div>
      </section>

      {/* The Power of Video Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 order-2 md:order-1">
            {/* Placeholder for a video player icon or a film reel */}
            <div className="flex justify-center items-center h-48 bg-gray-800 rounded-lg">
              <img src="/servicesimages/videoprod.jpeg" />
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">
              *Illustration: Your message, brought to life through compelling
              video.*
            </p>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              The Undeniable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
                Impact of Video
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Video is the most powerful medium for engagement and
              communication. From explainer videos to corporate films, we craft
              visually stunning and emotionally resonant content that captures
              attention, educates, and inspires action.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our full-service production team handles everything from script to
              screen, ensuring a seamless process and a polished final product.
            </p>
          </div>
        </div>
      </section>

      {/* Our Video Services Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400">
                Video Production Expertise
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Diverse video solutions tailored to meet your marketing,
              communication, and entertainment needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Corporate & Explainer Videos",
                description:
                  "Showcasing your brand, products, or services with clear, engaging narratives.",
              },
              {
                icon: "📣",
                title: "Promotional & Marketing Videos",
                description:
                  "Crafting compelling video ads for social media, websites, and campaigns.",
              },
              {
                icon: "🎓",
                title: "Educational & Training Videos",
                description:
                  "Simplifying complex information into easy-to-understand video formats.",
              },
              {
                icon: "✨",
                title: "Event Videography",
                description:
                  "Capturing the essence and excitement of your live events and conferences.",
              },
              {
                icon: "🎬",
                title: "Post-Production Services",
                description:
                  "Expert editing, motion graphics, sound design, and color grading for a polished finish.",
              },
              {
                icon: "📊",
                title: "Animation & Motion Graphics",
                description:
                  "Creating dynamic animated videos to convey ideas creatively and effectively.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-md
                                         hover:border-orange-600 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-orange-500">{item.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/30 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready to Tell Your Story <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500">
              Through Video?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's create impactful video content that resonates with your
            audience.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-orange-500 to-orange-600 text-gray-900
                       hover:from-orange-600 hover:to-orange-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Discuss Your Video Project
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default VideoProductionPage;

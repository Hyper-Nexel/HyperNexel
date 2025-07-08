// src/pages/TestimonialsPage.jsx
import React from "react";
import FAQComponent from "../commons/FAQComponent";

const testimonialsData = [
  {
    quote:
      "Hyper Nexel transformed our online presence. Their web development team delivered a stunning, high-performance site that exceeded our expectations. Truly exceptional work!",
    author: "Priya Singh",
    title: "CEO, TechInnovate Solutions",
    avatar: "/assets/avatars/priya-singh.jpg", // Placeholder
  },
  {
    quote:
      "Our organic traffic has soared since partnering with Hyper Nexel for SEO. Their data-driven approach and transparent reporting made all the difference. Highly recommended!",
    author: "Rahul Verma",
    title: "Marketing Director, Global Brands Inc.",
    avatar: "/assets/avatars/rahul-verma.jpg", // Placeholder
  },
  {
    quote:
      "The UI/UX design work for our new app was phenomenal. Hyper Nexel's team truly understood our vision and crafted an intuitive, beautiful experience that users love.",
    author: "Sneha Reddy",
    title: "Product Manager, InnovateApps",
    avatar: "/assets/avatars/sneha-reddy.jpg", // Placeholder
  },
  {
    quote:
      "For compelling visuals and brand consistency, Hyper Nexel's graphic design services are unmatched. They captured our brand essence perfectly across all our materials.",
    author: "Amit Patel",
    title: "Brand Strategist, Creative Marketers",
    avatar: "/assets/avatars/amit-patel.jpg", // Placeholder
  },
  {
    quote:
      "We needed a dynamic promotional video, and Hyper Nexel delivered beyond what we imagined. Professional, creative, and highly effective – a joy to work with!",
    author: "Deepika Sharma",
    title: "Communications Head, FutureCorp",
    avatar: "/assets/avatars/deepika-sharma.jpg", // Placeholder
  },
  {
    quote:
      "Their digital marketing strategy propelled our startup into new markets. The team's expertise in campaigns and analytics led to significant lead generation.",
    author: "Arjun Mehta",
    title: "Founder, NextGen Startups",
    avatar: "/assets/avatars/arjun-mehta.jpg", // Placeholder
  },
];

const TestimonialsPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Testimonials Header */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Dynamic Background Element */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Hear From Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-500">
              Satisfied Clients
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Discover how Hyper Nexel has helped businesses achieve their digital
            goals.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800
                         flex flex-col justify-between h-full transform hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <p className="text-xl italic text-gray-300 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-4 pt-4 border-t border-gray-800">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="size-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-lg font-bold text-blue-400">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (Customized for Testimonials) */}
      <section className="relative bg-black text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Subtle background pattern/overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            Ready to Be Our Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-500">
              Success Story?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help your business achieve remarkable
            results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg
                       bg-gradient-to-r from-blue-500 to-cyan-600 text-gray-900
                       hover:from-blue-600 hover:to-cyan-700
                       transition-all duration-300 ease-in-out transform hover:scale-105 mt-6"
          >
            Start Your Journey
            <span className="ml-3 text-2xl">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

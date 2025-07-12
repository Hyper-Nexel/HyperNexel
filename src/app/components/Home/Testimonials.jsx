// src/components/Home/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Amit Shah",
    role: "Founder, SmartBiz",
    feedback:
      "Hyper Nexel helped us launch a sleek platform in record time. The team truly understands business goals and delivers beyond expectations.",
    image: "/assets/testimonials/amit.jpg", // Ensure these paths are correct
  },
  {
    name: "Priya Mehta",
    role: "Marketing Head, Edusphere",
    feedback:
      "Our organic traffic doubled in 3 months after their SEO revamp. Their process is transparent and results-driven.",
    image: "/assets/testimonials/priya.jpg", // Ensure these paths are correct
  },
  {
    name: "Rajiv Menon",
    role: "CTO, FinCore",
    feedback:
      "From UX design to final deployment, every detail was handled with care and professionalism. Highly recommended!",
    image: "/assets/testimonials/rajiv.jpg", // Ensure these paths are correct
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gray-950 text-white py-10 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Optional: Subtle Background Gradients/Shapes for depth */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Real feedback from real businesses we’ve helped grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between h-full
                         border border-gray-800 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/40
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {/* Optional: Glowing border effect on hover for the card itself */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 blur-sm" />
              </div>

              {/* Feedback text */}
              <p className="relative z-10 text-lg text-gray-300 leading-relaxed mb-6 flex-grow">
                “{item.feedback}”
              </p>

              {/* Client info */}
              <div className="relative z-10 flex items-center mt-auto pt-4 border-t border-gray-800">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 mr-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle gradient border on avatar on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all duration-300" />
                </div>
                <div>
                  <h6 className="font-semibold text-white mb-0.5">
                    {item.name}
                  </h6>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";

const servicesData = [
  {
    icon: "🧑‍💻",
    title: "Website Development",
    href: "/services/web-development",
    description:
      "We build fast, modern websites and web apps that don’t just look great — they work flawlessly across all devices. From business sites to dynamic platforms, we craft scalable digital experiences that drive results.",
  },
  {
    icon: "📣",
    title: "Digital Marketing & Strategy",
    href: "/services/digital-marketing",
    description:
      "Grow your online presence with data‑backed marketing — SEO, search ads, and social media strategies designed to connect with your audience and convert clicks into customers.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    href: "/services/ui-ux-designing",
    description:
      "We design interfaces that feel as good as they look. With a focus on user behavior and flow, our designs create smooth, intuitive journeys across web and mobile.",
  },
  {
    icon: "🖌️",
    title: "Graphic Designing",
    href: "/services/graphic-designing",
    description:
      "Logos, brand kits, social creatives, print‑ready brochures — we craft visuals that communicate your story and capture attention across every medium.",
  },
  {
    icon: "🔍",
    title: "Search Engine Optimization (SEO)",
    href: "/services/seo-services",
    description:
      "Climb the ranks with ethical, proven SEO strategies — from technical audits to content optimization — all aimed at boosting your visibility and organic traffic.",
  },
  {
    icon: "🎥",
    title: "Video Production & Editing",
    href: "/services/video-production",
    description:
      "From script to screen, we turn ideas into engaging videos. Perfect for promos, explainers, or social reels — edited with precision and creativity.",
  },
  {
    icon: "🧠",
    title: "Custom Digital Solutions",
    href: "/services/custom-digital-solutions",
    description:
      "Need something outside the box? We offer branding, consulting, and tailored digital services to help your business grow with clarity and confidence.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Core Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Digital solutions intelligently designed to elevate your brand and drive tangible, lasting results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <a
              key={index}
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="group relative bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-10 flex flex-col items-start border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center items-center w-16 h-16 bg-white/[0.05] border border-white/10 rounded-2xl mb-8 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 transition-all duration-500">
                <span className="text-3xl filter drop-shadow-md" role="img" aria-hidden="true">
                  {service.icon}
                </span>
                {/* Glow effect behind icon */}
                <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-base text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Explore Button */}
              <div className="relative z-10 mt-auto pt-8 flex items-center text-sm font-semibold text-blue-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Explore Service 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

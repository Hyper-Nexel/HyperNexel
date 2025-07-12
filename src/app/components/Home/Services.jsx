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
      className="relative bg-gray-950 text-white md:py-10 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Core Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Digital solutions designed to elevate your business and drive
            tangible results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 ali">
          {servicesData.map((service, index) => (
            <a
              key={index}
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="group relative bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col items-start border border-gray-800 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 ease-in-out transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 blur-sm" />
              </div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center items-center size-14 bg-gray-800 rounded-lg mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 ease-in-out transform group-hover:scale-110">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-cyan-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-base text-gray-400 group-hover:text-white leading-relaxed flex-grow">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

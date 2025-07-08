// src/components/Home/FeaturedProjects.jsx
import React from "react";

const projects = [
  {
    name: "ShopHub",
    category: "E-commerce",
    image: "/assets/home/Proj1.jpeg", // Ensure these paths are correct
    tools: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Custom cart & checkout system",
      "Admin dashboard with real-time analytics",
      "Fully responsive and mobile-optimized",
    ],
    link: "#", // Add a link for the case study
  },
  {
    name: "EduPro LMS",
    category: "Education Platform",
    image: "/assets/home/Proj2.jpeg", // Ensure these paths are correct
    tools: ["Next.js", "Tailwind", "Firebase"],
    highlights: [
      "Multi-role login (Admin, Teacher, Student)",
      "Video-based course content and assessments",
      "Progress tracking and certification system",
    ],
    link: "#",
  },
  {
    name: "BizBoost",
    category: "Business Consulting",
    image: "/assets/home/Proj3.jpeg", // Changed to Proj3.jpeg for visual variety, assuming you have one
    tools: ["React", "Strapi", "Bootstrap"],
    highlights: [
      "Dynamic CMS integration",
      "SEO-optimized service pages",
      "Custom lead generation forms",
    ],
    link: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative bg-gray-950 text-white py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Gradients/Shapes for depth */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Projects We're{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
              Proud Of
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            From e-commerce platforms to learning systems — we build solutions
            that perform, scale, and look great doing it.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-800
                         hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 ease-in-out
                         transform hover:-translate-y-2"
            >
              {/* Image with subtle overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent group-hover:from-gray-900/50 transition-all duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-sm font-semibold text-blue-400 mb-1">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  <span className="font-semibold text-gray-300">Tools:</span>{" "}
                  {project.tools.join(", ")}
                </p>
                <ul className="text-base text-gray-300 list-disc list-inside space-y-1 mb-4 flex-grow">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Call to Action Button */}
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-full shadow-lg
                               hover:from-blue-600 hover:to-purple-800 transition-all duration-300 ease-in-out transform group-hover:scale-105"
                    aria-label={`View case study for ${project.name}`}
                  >
                    View Case Study
                    <span className="ml-2 text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <div className="text-center mt-16">
          <a
            href="/portfolio" // Assuming a dedicated portfolio page
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-200 text-lg font-medium rounded-full
                       hover:bg-gray-800 hover:border-gray-700 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            aria-label="View Full Portfolio"
          >
            View Full Portfolio
            <span className="ml-3 text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

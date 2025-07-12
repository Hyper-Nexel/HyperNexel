import React from "react";

const projects = [
  {
    name: "ICP Montessori Institutions",
    category: "Business Platform",
    image: "/projectimages/icpmontessori.png",
    tools: ["Next.js", "Tailwind CSS", "EmailJS"],
    highlights: [
      "Single Page Application developed within 8 working hours",
      "Fully responsive & mobile‑first design",
      "Automated enquiry mail workflow via EmailJS",
    ],
    link: "https://icpmontessoriinstitutions.com/",
  },
  {
    name: "ICP Academy",
    category: "Education Website",
    image: "/projectimages/icpacademy.png",
    tools: ["Next.js", "Tailwind CSS", "EmailJS"],
    highlights: [
      "Custom‑designed landing pages with SEO optimisation",
      "Lightning‑fast static generation with ISR",
      "Integrated contact forms triggering real‑time email alerts",
    ],
    link: "https://icpacademy.co/",
  },
  {
    name: "Beauty Mart",
    category: "E‑commerce Platform",
    image: "/projectimages/beautymart.png",
    tools: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Dynamic product catalogue powered by headless CMS",
      "End‑to‑end checkout flow with Stripe sandbox",
      "Custom lead‑gen pop‑ups increasing sign‑ups by 35%",
    ],
    link: "https://beauty-mart.netlify.app/",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="relative bg-gray-950 text-white py-20 md:py-10 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Projects We’re{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
              Proud Of
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            From e‑commerce storefronts to learning portals—we craft digital
            products that perform, scale, and look gorgeous doing it.
          </p>
        </div>
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-800 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {/* Cover image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent group-hover:from-gray-900/50 transition-all duration-300" />
              </div>

              {/* Details */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-sm font-semibold text-blue-400 mb-1 uppercase tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  <span className="font-semibold text-gray-300">
                    Built with:
                  </span>{" "}
                  {project.tools.join(", ")}
                </p>

                <ul className="text-base text-gray-300 list-disc list-inside space-y-1 mb-4 flex-grow">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-800 transition-all duration-300 ease-in-out transform group-hover:scale-105"
                    aria-label={`Visit live site: ${project.name}`}
                  >
                    View Site
                    <span className="ml-2 text-lg">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* Portfolio CTA */}
        {/* <div className="text-center mt-16">
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-200 text-lg font-medium rounded-full hover:bg-gray-800 hover:border-gray-700 hover:text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            aria-label="View full portfolio"
          >
            View Full Portfolio
            <span className="ml-3 text-xl">→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;

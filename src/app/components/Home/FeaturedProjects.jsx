import React from "react";

const projects = [
	{
		name: "Capital Motion UAE",
		category: "Business Management Platform",
		image: "/projectimages/capital-motion.png",
		tools: ["React", "Next.js", "Tailwind CSS", "Node.js"],
		highlights: [
			"Custom dashboard for multi-location business tracking",
			"Real-time analytics and reporting system",
			"Responsive UI optimized for UAE operations",
		],
		link: "#",
	},
	{
		name: "SoSocial",
		category: "Social Media Management Platform",
		image: "/projectimages/sosocial.png",
		tools: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
		highlights: [
			"Social media analytics dashboard",
			"Performance insights and campaign tracking",
			"Clean UI with dynamic data visualization",
		],
		link: "#",
	},
	{
		name: "ICP Montessori Institutions",
		category: "Business Platform",
		image: "/projectimages/icpmontessori.png",
		tools: ["Next.js", "Tailwind CSS", "EmailJS"],
		highlights: [
			"Single Page Application developed within 8 working hours",
			"Fully responsive & mobile-first design",
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
			"Custom-designed landing pages with SEO optimisation",
			"Lightning-fast static generation with ISR",
			"Integrated contact forms triggering real-time email alerts",
		],
		link: "https://icpacademy.co/",
	},
	{
		name: "Beauty Mart",
		category: "E-commerce Platform",
		image: "/projectimages/beautymart.png",
		tools: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
		highlights: [
			"Dynamic product catalogue powered by headless CMS",
			"End-to-end checkout flow with Stripe sandbox",
			"Custom lead-gen pop-ups increasing sign-ups by 35%",
		],
		link: "https://beauty-mart.netlify.app/",
	},
];

const FeaturedProjects = () => {
	return (
		<section
			id="projects"
			className="relative bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
		>
			{/* Decorative background */}
			<div className="absolute inset-0 z-0 pointer-events-none select-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Heading */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
						Projects We’re{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
							Proud Of
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
						From e‑commerce storefronts to scalable portals — we craft
						digital products that perform flawlessly and look gorgeous doing it.
					</p>
				</div>
				{/* Projects grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
					{projects.map((project, index) => (
						<article
							key={index}
							className="group relative bg-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col h-full border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 ease-out transform hover:-translate-y-2"
						>
							{/* Subtle hover gradient background */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

							{/* Cover image */}
							<div className="relative overflow-hidden h-64 border-b border-white/[0.05]">
								<img
									src={project.image}
									alt={`Screenshot of ${project.name}`}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
							</div>

							{/* Details */}
							<div className="p-8 flex flex-col flex-1 relative z-10">
								<p className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-widest">
									{project.category}
								</p>
								<h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
									{project.name}
								</h3>

								{/* Tools Pills */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tools.map((tool, tIndex) => (
										<span key={tIndex} className="px-3 py-1 text-xs font-medium bg-white/[0.05] border border-white/10 rounded-full text-gray-300 group-hover:border-blue-500/30 transition-colors duration-300">
											{tool}
										</span>
									))}
								</div>

								<ul className="text-sm font-light text-gray-400 space-y-2 mb-6 flex-grow">
									{project.highlights.map((point, i) => (
										<li key={i} className="flex items-start">
											<span className="mr-2 text-blue-400 mt-0.5">•</span>
											<span>{point}</span>
										</li>
									))}
								</ul>

								{/* CTA */}
								<div className="mt-auto pt-4 border-t border-white/[0.05]">
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group/btn inline-flex items-center justify-center w-full px-6 py-4 bg-white/[0.03] border border-white/10 text-white font-medium rounded-2xl hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 ease-in-out"
										aria-label={`Visit live site: ${project.name}`}
									>
										View Site
										<svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;

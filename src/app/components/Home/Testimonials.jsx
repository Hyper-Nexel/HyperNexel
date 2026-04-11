// src/components/Home/Testimonials.jsx
import React from "react";

const testimonials = [
	{
		name: "Purani",
		role: "ICP Montessori Institutions",
		feedback:
			"Hyper Nexel helped us build a modern digital presence for our institution. The system is easy to use and improved our communication with parents and students.",
		image: "/assets/testimonials/purani.jpg",
	},
	{
		name: "Geethamani",
		role: "ICP CA Academy",
		feedback:
			"The platform developed for our academy is smooth and efficient. It simplified course management and enhanced our online visibility.",
		image: "/assets/testimonials/geethamani.jpg",
	},
	{
		name: "Akshaya",
		role: "Beauty Mart",
		feedback:
			"We received a visually appealing and fast website. Hyper Nexel understood our brand and delivered a user-friendly experience.",
		image: "/assets/testimonials/akshaya.jpg",
	},
];

const Testimonials = () => {
	return (
		<section className="relative bg-transparent text-white py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
			{/* Refined Background Gradients */}
			<div className="absolute inset-0 z-0 pointer-events-none select-none">
				<div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent opacity-50" />
				<div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent opacity-40" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
						What Our{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
							Clients Say
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
						Real feedback from real businesses we’ve partnered with to create exceptional digital experiences.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{testimonials.map((item, index) => (
						<div
							key={index}
							className="group relative bg-white/[0.02] backdrop-blur-md rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full
                         border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden"
						>
							{/* Subtle hover gradient background */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

							{/* Quote Watermark */}
							<div className="absolute top-4 left-6 text-[120px] font-serif font-bold text-white/[0.03] group-hover:text-blue-400/[0.05] transition-colors duration-500 pointer-events-none select-none leading-none">
								“
							</div>

							{/* Feedback text */}
							<p className="relative z-10 text-lg text-gray-300 leading-relaxed mb-8 flex-grow font-light italic">
								"{item.feedback}"
							</p>

							{/* Client info */}
							<div className="relative z-10 flex items-center mt-auto pt-6 border-t border-white/[0.05] group-hover:border-white/10 transition-colors duration-500">
								<div>
									<h6 className="font-semibold text-white text-lg mb-1 group-hover:text-blue-300 transition-colors duration-300">
										{item.name}
									</h6>
									<p className="text-sm text-gray-500 uppercase tracking-wider font-medium">{item.role}</p>
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

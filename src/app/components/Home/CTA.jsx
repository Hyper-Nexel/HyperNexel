import React from "react";

const CTA = () => {
	return (
		<section
			id="contact"
			className="relative py-24 md:py-32 bg-transparent text-white overflow-hidden px-6 sm:px-10 lg:px-16"
		>
			{/* Spotlight Background Effect */}
			<div className="absolute inset-0 z-0 pointer-events-none select-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-purple-600/5 to-transparent blur-3xl opacity-60" />
			</div>

			<div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
				<h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight drop-shadow-2xl">
					Ready to{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
						Ignite Your Next Project?
					</span>
				</h2>
				<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
					Whether you're starting from scratch or scaling up, we're here to
					turn your vision into an elegant, high-impact digital product that drives
					real results.
				</p>

				<div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
					<a
						href="/contact"
						className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.7)]"
						aria-label="Get in Touch"
					>
						<span className="relative z-10 flex items-center gap-2">
							<span className="text-xl">✨</span> Get in Touch
						</span>
					</a>
					<a
						href="#services"
						className="inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-lg font-medium rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
						aria-label="Explore Services"
					>
						Explore Our Services
					</a>
				</div>
			</div>
		</section>
	);
};

export default CTA;

import React from "react";

const Header = () => {
	return (
		<header className="relative min-h-[100vh] flex items-center justify-center bg-transparent text-white overflow-hidden pb-12 pt-32">
			{/* Background Visuals */}
			<div className="absolute inset-0 z-0">
				<img
					src="/heroimages/landing-page-hero.jpg"
					alt="Hero Background"
					className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-gray-950/80 to-gray-950"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
			</div>
			{/* Content */}
			<div className="relative z-10 text-center max-w-5xl mx-auto px-6 space-y-8 md:space-y-12">
				{/* Title */}
				<h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight drop-shadow-2xl">
					<span className="block text-white/95 mb-2">
						Ignite Your Brand
					</span>
					<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 pb-2">
						with Hyper Nexel
					</span>
				</h1>

				{/* Subtitle */}
				<p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
					We blend{" "}
					<span className="font-medium text-gray-200">creativity</span> and{" "}
					<span className="font-medium text-gray-200">strategy</span> to
					craft exceptional websites, impactful visuals, and immersive
					digital experiences that fuel your growth.
				</p>

				{/* CTAs */}
				<div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
					<a
						href="#contact"
						className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(37,99,235,0.7)]"
						aria-label="Let's Talk"
					>
						<span className="relative z-10 flex items-center gap-2">
							Let’s Talk
							<svg
								className="w-5 h-5 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</span>
					</a>
					<a
						href="#projects"
						className="inline-flex items-center justify-center px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-lg font-medium rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
						aria-label="Explore projects"
					>
						Our Projects
					</a>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-pulse opacity-60">
				<span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
					Scroll
				</span>
				<div className="w-[1px] h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
			</div>
		</header>
	);
};

export default Header;

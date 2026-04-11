"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowUp } from "lucide-react";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
	const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

	// Scroll-based state
	const [visible, setVisible] = useState(true);
	const [scrolled, setScrolled] = useState(false);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Show/hide navbar based on scroll direction
			if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
				// Scrolling down — hide navbar
				setVisible(false);
				setMenuOpen(false);
				setMobileDropdownOpen(false);
			} else {
				// Scrolling up — show navbar
				setVisible(true);
			}

			// Add blur/glass effect once scrolled past top
			setScrolled(currentScrollY > 10);

			// Show scroll-to-top button after 300px
			setShowScrollTop(currentScrollY > 300);

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const toggleMenu = () => setMenuOpen(!menuOpen);
	const toggleMobileDropdown = () =>
		setMobileDropdownOpen(!mobileDropdownOpen);
	const toggleDesktopDropdown = () =>
		setDesktopDropdownOpen(!desktopDropdownOpen);

	const closeMobileMenuAndDropdowns = () => {
		setMenuOpen(false);
		setMobileDropdownOpen(false);
	};

	const closeDesktopDropdown = () => {
		setDesktopDropdownOpen(false);
	};

	const services = [
		{ label: "Web Development", href: "/services/web-development" },
		{ label: "SEO Services", href: "/services/seo-services" },
		{ label: "UI/UX Designing", href: "/services/ui-ux-designing" },
		{ label: "Graphic Designing", href: "/services/graphic-designing" },
		{ label: "Video Production", href: "/services/video-production" },
		{ label: "Digital Marketing", href: "/services/digital-marketing" },
		{
			label: "Custom Digital Solutions",
			href: "/services/custom-digital-solutions",
		},
	];

	return (
		<>
			{/* ── Navbar ── */}
			<nav
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 50,
					transform: visible ? "translateY(0)" : "translateY(-100%)",
					transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					backdropFilter: "blur(16px) saturate(180%)",
					WebkitBackdropFilter: "blur(16px) saturate(180%)",
					boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
					borderBottom: "1px solid rgba(255,255,255,0.1)",
				}}
			>
				<div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
					{/* Logo */}
					<Link
						href="/"
						className="text-2xl font-bold text-blue-600"
						onClick={closeMobileMenuAndDropdowns}
					>
						<img
							src="/logo/hyper-nexel.png"
							alt="Hyper Nexel"
							className="h-20"
						/>
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden md:flex space-x-8 items-center font-medium text-white">
						<li>
							<Link
								href="/"
								className="hover:text-blue-400 transition-colors"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-blue-400 transition-colors"
							>
								About
							</Link>
						</li>
						<li
							className="relative"
							onMouseEnter={() => setDesktopDropdownOpen(true)}
							onMouseLeave={() => setDesktopDropdownOpen(false)}
						>
							<div
								className="flex items-center text-white hover:text-blue-400 cursor-pointer transition-colors"
								onClick={toggleDesktopDropdown}
							>
								<span>Services</span>
								<ChevronDown
									className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
										desktopDropdownOpen ? "rotate-180" : ""
									}`}
								/>
							</div>

							{/* Desktop Services Dropdown */}
							<ul
								className={`absolute top-full left-0 bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-2 w-60 transition duration-150 z-50
                ${
							desktopDropdownOpen
								? "opacity-100 pointer-events-auto"
								: "opacity-0 pointer-events-none"
						}`}
							>
								{services.map(({ label, href }, i) => (
									<li key={i}>
										<Link
											href={href}
											className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md"
											onClick={closeDesktopDropdown}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</li>

						<li>
							<Link
								href="/testimonials"
								className="hover:text-blue-400 transition-colors"
							>
								Testimonials
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-blue-400 transition-colors"
							>
								Contact
							</Link>
						</li>
					</ul>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={toggleMenu} aria-label="Toggle menu">
							{menuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				{menuOpen && (
					<div className="md:hidden bg-black/70 backdrop-blur-md px-6 pb-5 pt-2 space-y-3 font-medium text-white border-t border-white/10">
						<Link
							href="/"
							className="block hover:text-blue-400 transition-colors"
							onClick={closeMobileMenuAndDropdowns}
						>
							Home
						</Link>
						<Link
							href="/about"
							className="block hover:text-blue-400 transition-colors"
							onClick={closeMobileMenuAndDropdowns}
						>
							About
						</Link>

						<div>
							<div
								className="flex justify-between items-center cursor-pointer hover:text-blue-400 transition-colors"
								onClick={toggleMobileDropdown}
							>
								<span>Services</span>
								<ChevronDown
									className={`transform transition-transform duration-200 ${
										mobileDropdownOpen ? "rotate-180" : ""
									}`}
								/>
							</div>
							{mobileDropdownOpen && (
								<ul className="mt-2 space-y-1 pl-4">
									{services.map(({ label, href }, i) => (
										<li key={i}>
											<Link
												href={href}
												className="block hover:text-blue-400 transition-colors"
												onClick={closeMobileMenuAndDropdowns}
											>
												{label}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>

						<Link
							href="/testimonials"
							className="block hover:text-blue-400 transition-colors"
							onClick={closeMobileMenuAndDropdowns}
						>
							Testimonials
						</Link>
						<Link
							href="/contact"
							className="block hover:text-blue-400 transition-colors"
							onClick={closeMobileMenuAndDropdowns}
						>
							Contact
						</Link>
					</div>
				)}
			</nav>

			{/* ── Scroll-to-top Floating Button ── */}
			<button
				onClick={scrollToTop}
				aria-label="Scroll to top"
				style={{
					position: "fixed",
					bottom: "2rem",
					right: "2rem",
					zIndex: 50,
					width: "48px",
					height: "48px",
					borderRadius: "50%",
					border: "none",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "linear-gradient(135deg, #2563eb, #7c3aed)",
					boxShadow: "0 8px 24px rgba(37, 99, 235, 0.4)",
					color: "#fff",
					opacity: showScrollTop ? 1 : 0,
					pointerEvents: showScrollTop ? "auto" : "none",
					transform: showScrollTop
						? "translateY(0) scale(1)"
						: "translateY(12px) scale(0.8)",
					transition:
						"opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.transform = "translateY(-2px) scale(1.1)";
					e.currentTarget.style.boxShadow =
						"0 12px 32px rgba(37, 99, 235, 0.55)";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.transform = "translateY(0) scale(1)";
					e.currentTarget.style.boxShadow =
						"0 8px 24px rgba(37, 99, 235, 0.4)";
				}}
			>
				<ArrowUp size={20} strokeWidth={2.5} />
			</button>
		</>
	);
};

export default Navbar;

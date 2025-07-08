"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile hamburger menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // State for mobile services dropdown
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false); // State for desktop services dropdown

  // Function to toggle the main mobile menu (hamburger)
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to toggle the mobile services dropdown
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  // Function to toggle the desktop services dropdown
  const toggleDesktopDropdown = () =>
    setDesktopDropdownOpen(!desktopDropdownOpen);

  // New function to close both the main menu and the mobile dropdown
  // This will be called when a navigation link is clicked on mobile
  const closeMobileMenuAndDropdowns = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Function to close only the desktop dropdown
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
          onClick={closeMobileMenuAndDropdowns}
        >
          <img src="/logo/hyper-nexel.png" alt="Hyper Nexel" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)} // Open on hover
            onMouseLeave={() => setDesktopDropdownOpen(false)} // Close on mouse leave
          >
            <div
              className="flex items-center hover:text-blue-600 cursor-pointer"
              onClick={toggleDesktopDropdown} // Toggle on click for accessibility
            >
              <span>Services</span>
              <ChevronDown
                className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                  desktopDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Desktop Services Dropdown Content */}
            <ul
              className={`absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 w-60 transition duration-150 z-50
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
                    onClick={closeDesktopDropdown} // Close dropdown when a service is selected
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/testimonials" className="hover:text-blue-600">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
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
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium text-gray-700">
          {/* Main nav items in mobile menu, now close both menu and dropdown */}
          <Link
            href="/"
            className="block hover:text-blue-600"
            onClick={closeMobileMenuAndDropdowns}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600"
            onClick={closeMobileMenuAndDropdowns}
          >
            About
          </Link>

          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-blue-600"
              onClick={toggleMobileDropdown} // This only toggles the dropdown, not the main menu
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
                    {/* Sub-nav items in mobile services dropdown, now close both menu and dropdown */}
                    <Link
                      href={href}
                      className="block hover:text-blue-600"
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
            className="block hover:text-blue-600"
            onClick={closeMobileMenuAndDropdowns}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="block hover:text-blue-600"
            onClick={closeMobileMenuAndDropdowns}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

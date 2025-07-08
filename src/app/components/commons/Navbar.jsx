"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for desktop services dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // When opening/closing mobile menu, ensure dropdown is closed
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleNavLinkClick = () => {
    // Close mobile menu when any nav link is clicked
    setMenuOpen(false);
    // Close dropdown specifically if a service link is clicked in mobile
    setDropdownOpen(false);
  };

  const handleServiceDropdownItemClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false); // ✅ close mobile menu if open
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
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <img src="/logo/hyper-nexel.png" alt="Hyper Nexel" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            {" "}
            {/* Apply ref here */}
            <div
              className="flex items-center hover:text-indigo-600 cursor-pointer transition-colors duration-200"
              onClick={toggleDropdown} // Use onClick for services dropdown
            >
              <span>Services</span>
              <ChevronDown
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownOpen && ( // Conditionally render based on dropdownOpen state
              <ul className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-lg p-2 w-60 z-50 animate-fade-in-down">
                {services.map(({ label, href }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
                      onClick={handleServiceDropdownItemClick} // Close dropdown on item click
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/testimonials"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-700 hover:text-indigo-600"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 space-y-2 font-medium text-gray-700 transition-all duration-300 ease-in-out transform origin-top animate-fade-in-up">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
            onClick={handleNavLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
            onClick={handleNavLinkClick}
          >
            About
          </Link>

          <div>
            <div
              className="flex justify-between items-center px-3 py-2 cursor-pointer hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
              onClick={toggleDropdown}
            >
              <span>Services</span>
              <ChevronDown
                className={`ml-1 w-5 h-5 transform transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownOpen && (
              <ul className="mt-2 space-y-1 pl-6 bg-white border border-gray-100 rounded-md py-1">
                {services.map(({ label, href }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      className="block px-3 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200"
                      onClick={handleNavLinkClick} // This will close the entire mobile menu
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
            className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
            onClick={handleNavLinkClick}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
            onClick={handleNavLinkClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

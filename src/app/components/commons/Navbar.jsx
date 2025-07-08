"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

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
        <Link href="/" className="text-2xl font-bold text-blue-600">
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
          <li className="relative group">
            <div className="flex items-center hover:text-blue-600 cursor-pointer">
              <span>Services</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>

            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 w-60 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-150 z-50">
              {services.map(({ label, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 rounded-md"
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
          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>

          <div>
            <div
              className="flex justify-between items-center cursor-pointer hover:text-blue-600"
              onClick={toggleDropdown}
            >
              <span>Services</span>
              <ChevronDown
                className={`transform transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {dropdownOpen && (
              <ul className="mt-2 space-y-1 pl-4">
                {services.map(({ label, href }, i) => (
                  <li key={i}>
                    <Link href={href} className="block hover:text-blue-600">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/testimonials" className="block hover:text-blue-600">
            Testimonials
          </Link>
          <Link href="/contact" className="block hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

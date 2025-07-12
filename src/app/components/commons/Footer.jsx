import React from "react";
import Link from "next/link";

const pages = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

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

const socials = [
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X / Twitter", href: "#" },
  { name: "YouTube", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & tagline */}
          <div>
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="Hyper Nexel"
            >
              <img
                src="/logo/hyper-nexel.png"
                alt="Hyper Nexel"
                className="h-10"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Crafting digital experiences that ignite brands — proudly working
              on a <span className="text-white font-medium">remote‑first</span>{" "}
              basis from Coimbatore, India.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hypernexel@gmail.com"
                  className="hover:text-white"
                >
                  hypernexel@gmail.com
                </a>
              </li>
              <li>
                Singanallur, Coimbatore
                <br />
                Tamil Nadu – 641015
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              {pages.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-center text-gray-500">
          © {year} Hyper Nexel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

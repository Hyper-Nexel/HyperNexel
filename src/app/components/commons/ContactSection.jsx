// src/components/Home/ContactSection.jsx
import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Text + Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Let’s Talk About Your Next Big Move
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We collaborate with forward-thinking brands to build standout
              digital products and experiences.
            </p>

            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@hypernexel.com"
                className="text-blue-600 hover:underline"
              >
                hello@hypernexel.com
              </a>
            </p>

            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-2xl hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-2xl hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-2xl hover:text-blue-400"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className="space-y-6">
            <div className="flex items-center">
              <label htmlFor="name" className="w-24 text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                required
                className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="email" className="w-24 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start">
              <label
                htmlFor="message"
                className="w-24 pt-3 text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project..."
                required
                className="flex-1 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

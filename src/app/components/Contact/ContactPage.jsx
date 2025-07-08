// src/pages/ContactPage.jsx
"use client";
import React from "react";
import FAQComponent from "../commons/FAQComponent";

// FAQ data specific to the Contact page (e.g., about getting started)
const contactPageFAQs = [
  {
    question: "What's the best way to get a project quote?",
    answer:
      "The best way is to fill out our contact form with as much detail as possible about your project. We'll review it and get back to you within 24-48 business hours to schedule a consultation.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a complimentary initial consultation to understand your needs, discuss your vision, and explore how our services can best benefit you.",
  },
  {
    question: "What information should I prepare for our first meeting?",
    answer:
      "Having a clear idea of your project goals, target audience, budget range, and any existing brand guidelines will be helpful, but it's not strictly necessary. We're here to guide you!",
  },
  {
    question: "What are your typical working hours?",
    answer:
      "Our team operates Monday to Friday, 9:00 AM to 6:00 PM IST. We strive to respond to all inquiries as quickly as possible within these hours.",
  },
];

const ContactPage = () => {
  return (
    <div className="relative bg-black text-gray-200 min-h-screen">
      {/* Hero Section: Contact Us */}
      <section className="relative py-28 md:py-40 px-6 sm:px-10 lg:px-16 flex items-center justify-center text-center overflow-hidden">
        {/* Dynamic Background Element - Green blobs */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter text-white drop-shadow-lg">
            Let's Create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-lime-500">
              Something Great
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to start your project or just have a question? Reach out to
            us!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-gray-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-500">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-800 transition-colors duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-800 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Interested Service (Optional)
                </label>
                <select
                  id="service"
                  name="service"
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-800 transition-colors duration-300"
                >
                  <option value="">Select a Service</option>
                  <option value="web-development">Web Development</option>
                  <option value="seo-services">SEO Services</option>
                  <option value="ui-ux-designing">UI/UX Designing</option>
                  <option value="graphic-designing">Graphic Designing</option>
                  <option value="video-production">Video Production</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="custom-digital-solutions">
                    Custom Digital Solutions
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow appearance-none border border-gray-700 rounded w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-800 transition-colors duration-300"
                  placeholder="Tell us about your project or question..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-full shadow-lg
                           bg-gradient-to-r from-emerald-500 to-lime-600 text-gray-900
                           hover:from-emerald-600 hover:to-lime-700
                           transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
                <span className="ml-2 text-xl">🚀</span>{" "}
                {/* Placeholder Rocket Icon */}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-500">
                Our Details
              </h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <div className="flex items-start">
                  <span className="text-emerald-500 text-2xl mr-4 mt-1">
                    [📍]
                  </span>
                  <div>
                    <strong className="text-gray-100">Our Office:</strong>
                    <br />
                    [Your Full Company Address Here, e.g., 123 Digital Drive,
                    Innovation City, State, ZIP Code, India]
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 text-2xl mr-4 mt-1">
                    [📞]
                  </span>
                  <div>
                    <strong className="text-gray-100">Phone:</strong>
                    <br />
                    <a
                      href="tel:+91-9876543210"
                      className="hover:text-emerald-400 transition-colors duration-300"
                    >
                      +91-9876543210
                    </a>{" "}
                    {/* Replace with your phone number */}
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 text-2xl mr-4 mt-1">
                    [✉️]
                  </span>
                  <div>
                    <strong className="text-gray-100">Email:</strong>
                    <br />
                    <a
                      href="mailto:info@hypernexel.com"
                      className="hover:text-emerald-400 transition-colors duration-300"
                    >
                      info@hypernexel.com
                    </a>{" "}
                    {/* Replace with your email */}
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-500 text-2xl mr-4 mt-1">
                    [⏰]
                  </span>
                  <div>
                    <strong className="text-gray-100">Business Hours:</strong>
                    <br />
                    Mon - Fri: 9:00 AM - 6:00 PM IST
                  </div>
                </div>
              </div>
            </div>
            {/* Optional: Embed a Google Map here */}
            <div className="mt-8 rounded-lg overflow-hidden border border-gray-800 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.164319080786!2d73.91616147509536!3d18.56317268254249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12a7a4b0d01%3A0x6a0c5f2d7a2e5d9!2sYour%20Office%20Location%20Example!5e0!3m2!1sen!2sin!4v1700000000000" /* Replace with your actual Google Maps embed code */
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section using the component */}
      <section className="py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-lime-500">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Find quick answers to common queries about our process and
              services.
            </p>
          </div>
          {/* Pass data and accent color to the FAQComponent */}
          <FAQComponent
            faqs={contactPageFAQs}
            accentColorClass="text-emerald-400"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

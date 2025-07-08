// src/components/FAQComponent.jsx
import React, { useState } from "react";

const FAQComponent = ({ faqs, accentColorClass = "text-amber-400" }) => {
  // Default to amber if no accent provided
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-800
                     hover:border-gray-700 transition-colors duration-300"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left cursor-pointer
                       focus:outline-none focus:bg-gray-800 transition-colors duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className={`text-xl font-semibold ${accentColorClass}`}>
              {faq.question}
            </h3>
            <span
              className={`transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              } text-gray-400 text-2xl`}
            >
              [↓] {/* Placeholder for Chevron Down/Up Icon */}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 text-gray-400 text-lg leading-relaxed animate-fade-in-down">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;

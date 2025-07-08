// src/components/About/MeetTheTeam.jsx
import React from "react";

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Chief Executive Officer",
    image: "/assets/team/aarav.jpg", // Replace with actual team member images
    bio: "A visionary leader passionate about leveraging technology to solve complex business challenges.",
    social: {
      linkedin: "#", // Placeholder link
      twitter: "#", // Placeholder link
    },
  },
  {
    name: "Rhea Kapoor",
    role: "Head of Design & UX",
    image: "/assets/team/rhea.jpg", // Replace
    bio: "An award-winning designer focused on creating intuitive and visually stunning user experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Vikram Singh",
    role: "Lead Software Architect",
    image: "/assets/team/vikram.jpg", // Replace
    bio: "A seasoned architect with expertise in building scalable, robust, and high-performance systems.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Ishita Rao",
    role: "Head of Digital Marketing",
    image: "/assets/team/ishita.jpg", // Replace
    bio: "Drives impactful digital strategies that connect brands with their audience and convert clicks into customers.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const MeetTheTeam = () => {
  return (
    <section className="relative bg-gray-950 text-gray-200 py-20 md:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Blobs for depth */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-3000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
              Exceptional Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate experts committed to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center
                         border border-gray-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-yellow-900/40
                         transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {/* Optional: Glowing border effect on hover for the card itself */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-600 to-gold-700 blur-sm" />
              </div>

              {/* Image */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-800 group-hover:border-amber-500 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Info */}
              <h3 className="relative z-10 text-xl font-bold text-gray-100 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-yellow-400 transition-all duration-300">
                {member.name}
              </h3>
              <p className="relative z-10 text-sm font-medium text-gray-400 mb-4">
                {member.role}
              </p>
              <p className="relative z-10 text-base text-gray-500 leading-relaxed flex-grow mb-4">
                {member.bio}
              </p>

              {/* Social Links (Placeholders) */}
              <div className="relative z-10 flex gap-4 mt-auto">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {/* Placeholder for LinkedIn Icon */}
                    <span className="text-2xl">[LI]</span>
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    {/* Placeholder for Twitter Icon */}
                    <span className="text-2xl">[TW]</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

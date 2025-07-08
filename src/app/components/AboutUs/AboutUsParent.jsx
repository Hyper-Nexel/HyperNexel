// src/pages/AboutUsPage.jsx

import React from "react";
import AboutUsHero from "./AboutUsHero";
import OurStory from "./OurStory";
import OurValues from "./OurValues";
import MeetTheTeam from "./MeetTheTeam";
import WhyChooseUs from "./WhyChooseUs";
import { Milestone } from "lucide-react";
import AboutUsCTASection from "./AboutUsCTASection";

const AboutUsParent = () => {
  return (
    <main className="bg-black">
      {" "}
      {/* Main container for the page, consistent with dark theme */}
      <AboutUsHero />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <WhyChooseUs />
      <Milestone />
      <AboutUsCTASection />
    </main>
  );
};

export default AboutUsParent;

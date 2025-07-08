import React from "react";
import Services from "./Services";
import CTA from "./CTA";
import Approach from "./Approach";
import FeaturedProjects from "./FeaturedProjects";
import OurProcess from "./OurProcess";
import Testimonials from "./Testimonials";
import Header from "./Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Services />
      <CTA />
      <Approach />
      <FeaturedProjects />
      <OurProcess />
      <Testimonials />
    </>
  );
};

export default LandingPage;

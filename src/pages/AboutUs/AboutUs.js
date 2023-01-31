import React from "react";
import arif from "../../images/arif.png";
import ShareHeaderBanner from "../Shered/ShareHeaderBanner/ShareHeaderBanner";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsVideoSection from "./AboutUsVideoSection";
import "./AboutUs.css";
import AboutPopuralTorus from "./AboutPopuralTorus";
import AboutChoose from "./AboutChoose";
import AboutTeam from "./AboutTeam";
import Subscribe from "../Shered/Subscribe/Subscribe";

const AboutUs = () => {
  return (
    <div>
      <ShareHeaderBanner title={"About Us"} />
      <AboutUsBanner />
      <AboutUsVideoSection />
      <AboutPopuralTorus />
      <AboutChoose />
      <AboutTeam />
      <Subscribe />
    </div>
  );
};

export default AboutUs;

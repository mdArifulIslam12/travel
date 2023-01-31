import React from "react";
import ShareHeaderBanner from "../Shered/ShareHeaderBanner/ShareHeaderBanner";
import ContactUsPage from "./ContactUsPage/ContactUsPage";
import InfoCard from "./InfoCard/InfoCard";
import ReplayContact from "./ReplayContact/ReplayContact";

const ContactUs = () => {
  return (
    <div>
      <ShareHeaderBanner title={"Contact Us"} />
      <ContactUsPage />
      <InfoCard />
      <ReplayContact />
    </div>
  );
};

export default ContactUs;

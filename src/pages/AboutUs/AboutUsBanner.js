import React from "react";
import Trending from "../Shered/Trending/Trending";
import ButtonReadMore from "../Shered/ButonReadMore/ButtonReadMore";
import AboutUs1 from '../../images/aboutUs1.webp'
import "./AboutUsBanner.css";

const AboutUsBanner = () => {
  return (
    <div className="container aboutUs-banner">
      <div className="row g-4">
        <div className="col-lg-6">
          <Trending title={"Popular Tours"} subtitle={"Our Most"} />
          <h5 className="mt-4 mb-4">
            Nulla non dictum lorem, id pulvinar nulla. Sed eleifend felis vel
            ante tempus maximus.
          </h5>
          <p className="mb-4">
            Aliquam erat volutpat. Donec lobortis risus ut nunc ultrices, ut
            bibendum nibh auctor. Fusce dolor purus, fringilla a felis sed,
            gravida pellentesque sem. Etiam faucibus massa in fringilla
            eleifend. In hac habitasse platea dictumst. Duis varius, metus quis
            sodales mattis, massa dolor consequat urna, quis varius quam mauris
            id ante. Vestibulum at dictum quam, nec elementum tortor. Duis
            gravida feugiat ornare. Maecenas a urna in lacus pretium tristique.
          </p>
          <ButtonReadMore title={"Read More"} />
        </div>
        <div className="col-lg-6">
          <img
            src={AboutUs1}
            className="img w-100 h-100 ms-lg-5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;

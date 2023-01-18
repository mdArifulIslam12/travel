import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import ButtonReadMore from "../../Shered/ButonReadMore/ButtonReadMore";
import Button from "../../Shered/Button/Button";
import Trending from "../../Shered/Trending/Trending";
import './About.css'


const About = () => {
  return (
   <div className="about">
   
     <div className="container">
     <div className="row ">
        <div className="col-lg-6">
          <img src="https://travo.iamabdus.com/v1.1/wp-content/uploads/2021/03/business-man-by-skyscraper-1-1.jpg" alt="" className="about-img" />
        </div>
        <div className="col-lg-6 ">
          <div className="ms-lg-5 about-detail-all">
          <Trending title={'About Us'} subtitle={'a few words'}/>
          <p className="mt-5 about-details">Aliquam erat volutpat. Donec lobortis risus ut nunc ultrices, ut bibendum nibh auctor. Fusce dolor purus, fringilla a felis sed, gravida pellentesque sem. Etiam faucibus massa in fringilla eleifend. In hac habitasse platea dictumst. Duis varius, metus quis sodales mattis, massa dolor consequat urna, quis varius quam mauris id ante. Vestibulum at dictum quam, nec elementum tortor. Duis gravida feugiat ornare. Maecenas a urna in lacus pretium tristique.</p>
          <ButtonReadMore title={'Read More'}></ButtonReadMore>
          </div>
        </div>
      </div>
     </div>
   </div>
  );
};

export default About;

import React from "react";
import ButtonReadMore from "../../Shered/ButonReadMore/ButtonReadMore";
import Trending from "../../Shered/Trending/Trending";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div className="container contactUsPage">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <Trending title={"Contact Us"} subtitle={"Community"} />
          <h5>
            Aliquam erat volutpat. Donec lobortis risus ut nunc ultrices, ut
            bibendum nibh auctor.
          </h5>
          <p className="mb-5">
            Fusce dolor purus, fringilla a felis sed, gravida pellentesque sem.
            Etiam faucibus massa in fringilla eleifend. In hac habitasse platea
            dictumst. Duis varius, metus quis sodales mattis, massa dolor
            consequat urna, quis varius quam mauris id ante. Vestibulum at
            dictum quam, nec elementum tortor. Duis gravida feugiat ornare.
            Maecenas a urna in lacus pretium tristique.
          </p>
          <ButtonReadMore title={"Read More"} />
        </div>
        <div className="col">
          <img
            src="https://travo.iamabdus.com/v1.1/wp-content/uploads/2021/03/hand-tapping-tablet-with-map-1.jpg"
            className="w-100 h-100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

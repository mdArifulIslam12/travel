import React from "react";
import "./Subscribe.css";
import ButtonReadMore from "../ButonReadMore/ButtonReadMore";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center ">
          <div className="col-lg-6">
            <h4 className="mb-0">Subscribe to Get Daily News.</h4>
          </div>
          <div className="col-lg-3">
           <div className="subscribe-button">
            <ButtonReadMore title={"Read More"} />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

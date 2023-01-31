import React from "react";
import { useState } from "react";
import "./AboutUsVideoSection.css";

const AboutUsVideoSection = () => {
  const [displayImg, setDisplayImg] = useState(false);

  return (
    <div className="aboutUsVideoSection">
      <div className="aboutUsVideoSection-backgroundImg">
        <div className="continer d-flex justify-content-center align-items-center h-100">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-10">
              {displayImg ? (
                <iframe
                  width="620"
                  height="400"
                  src="https://www.youtube.com/embed/vNQR3ixE8AE"
                  title="10 Best Places to Visit in Thailand - Travel Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ) : (
                <img
                  src="https://travo.iamabdus.com/v1.1/wp-content/uploads/2021/04/Group-3-1.svg"
                  onClick={() => setDisplayImg(true)}
                  className="img"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsVideoSection;

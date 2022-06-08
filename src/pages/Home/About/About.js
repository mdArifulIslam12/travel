import React from "react";
import arif from "../../../images/arif.png";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 text-center">
          <img className="w-50" src={arif} alt="" />
        </div>
        <div className="col-lg-6">
          <h2>Ariful Islam</h2>
          <p>
            I am a student and H.S.C examine 2022.As a student I love learning
            so much and I can learn very quickly. As well as studying i am a
            student of programming hero batch-5. I want to be a 'Full Stack
            Developer' by 2022.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

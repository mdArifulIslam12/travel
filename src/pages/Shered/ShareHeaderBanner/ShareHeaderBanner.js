import React from "react";
import { useLocation } from "react-router-dom";
import "./ShareHeaderBanner.css";

const ShareHeaderBanner = ({ title }) => {
  const location = useLocation();
  return (
    <div className="shareHeaderBanner">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-6 text-white">
            <h2>{title}</h2>
            <h5>Home / {location.pathname.slice(1)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareHeaderBanner;

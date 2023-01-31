import React from "react";
import "./Trending.css";

const Trending = ({ title, subtitle }) => {
  return (
    <>
      <p className="trending">{subtitle}</p>
      <h2 className=" offer-title ">{title}</h2>
    </>
  );
};

export default Trending;

import React from "react";
import "./Destination.css";

const Destination = ({ destination }) => {
  const { name, img } = destination;
  return (
    <div className="col ">
      <div className="destination h-100">
        <img src={img} className="card-img-top img-destination" alt="..." />
        <div className="card-body destination-details">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Destination;

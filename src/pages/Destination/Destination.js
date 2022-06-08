import React from "react";
import "./Destination.css";

const Destination = ({ destination }) => {
  const { name, img } = destination;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top img-destination" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

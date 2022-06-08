import React from "react";
import "./Offer.css";

const Offer = ({ offer }) => {
  const { img, name, price } = offer;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top img-destination" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p>Price: ${price}</p>
            <button className="btn offer-button ">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

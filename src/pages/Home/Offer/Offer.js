import React from "react";
import Button from "../../Shered/Button/Button";
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
            <Button title={"Book Now"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

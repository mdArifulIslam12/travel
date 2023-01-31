import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Shered/Button/Button";
import "./Offer.css";

const Offer = ({ offer }) => {
  const { img, name, price, _id } = offer;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div>
      <div className="col">
        <div className="card h-100 offer-best">
          <img src={img} className="card-img-top img-offers" alt="..." />
          <div className="card-body mt-4 mb-3">
            <h5 className="card-title">{name}</h5>
            <p>Price: ${price}</p>
            <Link
              to={`/bestService/${_id}`}
              onClick={() => handleNavigate(_id)}
            >
              <Button title={"Book Now"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

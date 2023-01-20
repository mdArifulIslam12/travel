import React from "react";
import "./PopUpTours.css";
import Trending from "../../Shered/Trending/Trending";
import { useState } from "react";
import { useEffect } from "react";
import Destination from "../../Destination/Destination";
import ButtonReadMore from "../../Shered/ButonReadMore/ButtonReadMore";
import { Link, useNavigate } from "react-router-dom";

const PopUpTours = () => {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("popTours.json")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  const handleDetinations = () => {
    navigate("/destination");
  };
  return (
    <div className="container PopUpTours">
      <Trending title={"Pop Tours"} subtitle={"Our Most"} />
      <div className="row row-cols-1 row-cols-md-3 mt-5 g-4">
        {tours.slice(12).map((destination) => (
          <Destination
            key={destination.id}
            destination={destination}
          ></Destination>
        ))}
      </div>
      <div className="row mt-5 pt-5 mb-5 d-flex justify-content-center">
        <div className="col-lg-3">
          <Link
            className="text-decoration-none"
            to={"/destination"}
            onClick={handleDetinations}
          >
            <ButtonReadMore title={"View all Tour"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopUpTours;

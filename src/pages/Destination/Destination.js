import React from "react";
import popTour1 from '../../images/popTour1.jpg';
import popTour2 from '../../images/popTour2.webp';
import popTour3 from '../../images/popTour3.jpg';
import popTour4 from '../../images/popTour4.jpg';
import popTour5 from '../../images/popTour5.jpg';
import popTour6 from '../../images/popTour6.webp';
import popTour7 from '../../images/popTour7.jpg';
import popTour8 from '../../images/popTour7.webp';
import popTour9 from '../../images/popTour9.webp';
import popTour10 from '../../images/popTour10.jpg';
import popTour11 from '../../images/popTour11.webp';
import popTour12 from '../../images/popTour12.webp';
import popTour13 from '../../images/popTour13.webp';
import popTour14 from '../../images/popTour14.jpg';
import popTour15 from '../../images/popTour15.webp';
import "./Destination.css";

const imageMap = {
  popTour1,
  popTour2,
  popTour3,
  popTour4,
  popTour5,
  popTour6,
  popTour7,
  popTour8,
  popTour9,
  popTour10,
  popTour11,
  popTour12,
  popTour13,
  popTour14,
  popTour15
};

const Destination = ({ destination }) => {
  const { name, img } = destination;
  return (
    <div className="col ">
      <div className="destination h-100">
        <img src={imageMap[img]} className="card-img-top img-destination" alt="..." />
        <div className="card-body destination-details">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Destination;

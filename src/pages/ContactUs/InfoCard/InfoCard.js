import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./InfoCard.css";

const InfoCard = () => {
  const infos = [
    {
      id: 1,
      name: "London",
      details:
        "Vestibulum at dictum quam, nec elementum tortor. Duis gravida feugiat ornare.",
      email: "officeone@youremail.com",
      call: "0118546382",
      laction: "Sui Generis",
    },
    {
      id: 2,
      name: "Paris",
      details:
        "Nulla facilisi. Suspendisse potenti. Nullam a ipsum iaculis, imperdiet mauris eu.",
      email: "officeone@youremail.com",
      call: "011887954",
      laction: "Latin Quarter",
    },
    {
      id: 3,
      name: "New York",
      details:
        "Aliquam ut condimentum justo, eu tristique enim. Donec accumsan in justo sed convallis.",
      email: "officeone@youremail.com",
      call: "0118545582",
      laction: "Frick Madison",
    },
  ];
  return (
    <div className="container mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {infos.map((inof) => (
          <div className="col">
            <div className="card info-details">
              <div className="">
                <h4>{inof.name}</h4>
                <p>{inof.details}</p>
              </div>
              <div className="mt-3 info-details-page">
                <p className="single-info-details">
                  <span>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className=" contact-icon2"
                    />
                  </span>
                  {inof.email}
                </p>
                <p className="single-info-details">
                  <span>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className=" contact-icon2"
                    />
                  </span>
                  {inof.call}
                </p>
                <p className="single-info-details">
                  <span>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className=" contact-icon2"
                    />
                  </span>
                  {inof.laction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;

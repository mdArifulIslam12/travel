import React, { useEffect } from "react";
import { useState } from "react";
import fetcher from "../../api";
import Destination from "../Destination/Destination";
import ShareHeaderBanner from "../Shered/ShareHeaderBanner/ShareHeaderBanner";
import Subscribe from "../Shered/Subscribe/Subscribe";
import "./Destinations.css";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  console.log(destinations);
  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/popTour");
      setDestinations(res.data);
    })();
  }, []);

  return (
    <div className="destination-pages">
      <ShareHeaderBanner title={"Destination List"} />
      <div className="container destinations" >
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {destinations.map((destination) => (
            <Destination
              key={destination.id}
              destination={destination}
            ></Destination>
          ))}
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Destinations;

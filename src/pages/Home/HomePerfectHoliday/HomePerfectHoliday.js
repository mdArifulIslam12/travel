import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ButtonReadMore from "../../Shered/ButonReadMore/ButtonReadMore";
import Button from "../../Shered/Button/Button";
import Trending from "../../Shered/Trending/Trending";
import "./HomePerfectHoilday.css";

const HomePerfectHoliday = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch("holidays.json")
      .then((res) => res.json())
      .then((data) => setHolidays(data));
  }, []);
  console.log(holidays);
  return (
    <div>
      <div className="container  homeHoidays">
        <Trending title={"Perfect Holiday"} subtitle={"Plan The"} />

        <div class="  mt-5">
          <div class="gallery-wrap" id="homeHoiday">
            {holidays.slice(0, 4).map((holiday) => (
              <div
                class="item "
                style={{ backgroundImage: `url(${holiday.img})`,borderRadius: `${holiday.borderRaduis}` }}
              >
                <div className="abc">
                  <div className="row d-flex justify-content-center ">
                    <div className="col-lg-5 text-white d-flex align-items-center ">
                      <div>
                        <h3>{holiday.name}</h3>
                        <h5 className="mt-2 mb-3">${holiday.price}</h5>
                        <button className="btn header-button-tour">
                          Book Now{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePerfectHoliday;

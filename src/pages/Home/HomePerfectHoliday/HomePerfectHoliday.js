import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fetcher from "../../../api";
import ButtonReadMore from "../../Shered/ButonReadMore/ButtonReadMore";
import Button from "../../Shered/Button/Button";
import Trending from "../../Shered/Trending/Trending";
import "./HomePerfectHoilday.css";

const HomePerfectHoliday = () => {
  const [holidays, setHolidays] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async()=>{
      const res  = await fetcher.get('/holidays')
      setHolidays(res.data)
    })();
  }, []);
  const handleNavigate = (id) => {
    navigate(`/perfectHoliday/${id}`);
  };
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
                      <div className="ms-4">
                        <h3>{holiday.name}</h3>
                        <h5 className="mt-2 mb-3">${holiday.price}</h5>
                       
                        <Link to={`/perfectHoliday/${holiday._id}`} onClick={()=> handleNavigate(holiday._id)}> <button className="btn header-button-tour">
                          Book Now{" "}
                        </button></Link>
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

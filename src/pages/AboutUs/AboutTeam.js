import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Trending from "../Shered/Trending/Trending";
import team1 from "../../images/team1.webp"
import team2 from "../../images/team2.webp"
import team3 from "../../images/team3.webp"
import team4 from "../../images/team4.webp"
import team5 from "../../images/team5.webp"
import team6 from "../../images/team6.webp"
import team7 from "../../images/team7.webp"
import team8 from "../../images/team8.webp"
import "./AboutTeam.css";

const imgaesMap = {
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8
}

const AboutTeam = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div className="container aboutTeams">
      <div className="row" >
        <div className="col-lg-7">
          <Trending title={"Special Team"} subtitle={"Our"} />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
        {team.map((team) => (
          <div className="col aboutTeam">
            <img src={imgaesMap[team.img]} alt="" />
            <h4 className="text-center mt-4">{team.name}</h4>
            <p className="text-center">{team.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;

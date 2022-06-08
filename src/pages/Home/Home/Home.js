import React from "react";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Offers></Offers>
    </div>
  );
};

export default Home;

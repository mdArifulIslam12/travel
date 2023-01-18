import React from "react";
import Inbox from "../../../components/Inbox/Inbox";
import Associaites from "../../Shered/Associaites/Associaites";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import PopUpTours from "../PopUpTours/PopUpTours";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <About/>
      <Offers></Offers>
      <PopUpTours/>
      <Associaites/>
      <Inbox/>
    </div>
  );
};

export default Home;

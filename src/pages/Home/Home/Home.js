import React from "react";
import Inbox from "../../../components/Inbox/Inbox";
import Associaites from "../../Shered/Associaites/Associaites";
import About from "../About/About";
import Banner from "../Banner/Banner";
import BookingWithUs from "../BookingWithUs/BookingWithUs";
import ChooseHoliday from "../ChooseHoliday/ChooseHoliday";
import HomeBolgs from "../HomeBolgs/HomeBolgs";
import HomeCties from "../HomeCties/HomeCties";
import HomeIconSvg from "../HomeIconSvg/HomeIconSvg";
import HomePerfectHoliday from "../HomePerfectHoliday/HomePerfectHoliday";
import Offers from "../Offers/Offers";
import PopUpTours from "../PopUpTours/PopUpTours";
import Services from "../Services/Services";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChooseHoliday/>
      <HomeCties/>
      <HomeIconSvg/>
      <HomePerfectHoliday/>
      <About/>
      <Offers></Offers>
      <HomeBolgs/>
      <BookingWithUs/>
      <PopUpTours/>
      <Associaites/>
      <Inbox/>
    </div>
  );
};

export default Home;

import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import Destinations from "../Destinations/Destinations";
import Blogs from "../Home/Blogs/Blogs";
import Home from "../Home/Home/Home";
import LoginV2 from "../Login/Login/LoginV2";
import RegisterV2 from "../Login/Register/RegisterV2";
import NotFound from "../Shered/NotFound/NotFound";
import Tours from "../Tours/Tours";



export const publicRoute = [
    {path:'/',name:'Home',Component:Home},
    {path:'/blogs',name:'Blogs',Component:Blogs},
    {path:'/destination',name:'Destination',Component:Destinations},
    {path:'/tours',name:'Tours',Component:Tours},
    {path:'about',name:'About',Component:AboutUs},
    {path:'contactUs',name:'Contact',Component:ContactUs},
    {path:'loginV2',name:'Login',Component:LoginV2},
    {path:'registerV2',name:'Register',Component:RegisterV2},
    {path:'*',name:'NotFound',Component:NotFound},
  ]
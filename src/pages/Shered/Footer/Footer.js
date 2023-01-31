import React from "react";
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    
    <footer className="py-4 footer-img d-print-none" >
      <div className="container mb-3 pt-4 footer">
        <div className="row d-flex justify-content-center">
         <div className="col-lg-2 text-center ">
         <img
            src="https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/Group-2.svg"
            className="header-nav-img"
            alt=""
          />
         </div>
        </div>
        <div className="row mb-4 g-4 mt-4">
          <div className="col-lg-4">
            <h2 className="contact mb-4">Contact Info</h2>
            <p className="contact-details">
              <span className="">London</span> 
              
            <FontAwesomeIcon icon={faPhone} className=' contact-icon1' />
              +01325648754
              </p>
            <p className="contact-details">
              <span className="">New York</span> 
              
            <FontAwesomeIcon icon={faPhone} className=' contact-icon2' />
              +01325648754
              </p>
            <p className="contact-details">
              <span className="">Tokyo</span> 
              
            <FontAwesomeIcon icon={faPhone} className=' contact-icon3' />
              +01325648754
              </p>
          </div>
          <div className="col-lg-2 ">
            <h2 className="contact mb-4">About Us</h2>
            <p className="contact-details">Our Story</p>
            <p className="contact-details">Travel Blog & Tips</p>
            <p className="contact-details">Working With Us</p>
            <p className="contact-details">Be Our Partner</p>
            
          </div>
          <div className="col-lg-2 ">
          <h2 className="contact mb-4 text-center">Support</h2>
            <p className="contact-details ms-2">Customer Support</p>
            <p className="contact-details ms-2">Privacy & Policy</p>
            <p className="contact-details ms-2">Contact Channels</p>
            
          </div>
          <div className="col-lg-4 ">
          <h2 className="contact mb-4 text-center">Pay Safely with us</h2>
          <p className="contact-details ms-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="hr"></div> 
        <div className="row d-flex justify-content-center">
         <div className="col-lg-6 mt-4">
          <p className="text-center">
            Copyright &copy; {year} Travo by Abdus. All Rights{" "}
           </p>
         </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;

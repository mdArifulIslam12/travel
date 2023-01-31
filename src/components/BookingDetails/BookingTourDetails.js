import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import fetcher from "../../api";
import auth from "../../firebase.init";
import Loading from "../../pages/Shered/Loading/Loading";
import "./BookingTourDetails.css";

const BookingTourDetails = ({ tour }) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    console.log(user.uid)

  if(loading){
    return <Loading/>
  }

  const handleSubmitBooking = async(event) =>{
    event.preventDefault()
    const name =event.target.name.value
    const email =event.target.email.value
    const number =event.target.number.value
    const date =event.target.date.value
    const ticket =event.target.ticket.value
    const booking = {
        displayName: user.displayName,
        loginEmail: user.email,
        name,
        uid:user?.uid,
        email,        
        number,
        date,
        ticket,
        bookingTourName:tour.name,
        bookingPrice: tour.price,
        bookingImg: tour.img
    }
    await fetcher.post('/allBooking',booking).then(res=> {
        if(res.data){
            toast('Your Trevel Booking Success!!')
            navigate('/dashborad')
            event.target.reset()
        }
    })
  }
  return (
    <div className="bookingTourDetails">
      <div className="container">
        <div className="row g-4 d-flex justify-content-between align-items-center">
          <div className="col-lg-7">
            <div className="bookingSingle-tour d-flex">
              <img src={tour.img} alt="" />
              <div className="ms-3">
                <h3>{tour.name}</h3>
                <p>Price: ${tour.price}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 booking-for-time-details">
            <h5 className="mb-3">
              <span className="me-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="icon-booking"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </span>{" "}
              Book This Tour
            </h5>
            <div className="card booking-card">
              <form action="" onSubmit={handleSubmitBooking}>
                <input
                  type="text"
                  placeholder="Name"
                  className="booking-card-input"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="booking-card-input"
                  name="email"
                  value={user.email}
                  required
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="booking-card-input"
                  name="number"
                  required
                />
                <input
                  type="date"
                  name="date"
                  id=""
                  className="booking-card-input"
                  required
                />
                <input
                  type="number"
                  placeholder="Number of ticket"
                  className="booking-card-input"
                  name="ticket"
                  required
                />
                <input type="submit" value="Book Now" className="all-button" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTourDetails;

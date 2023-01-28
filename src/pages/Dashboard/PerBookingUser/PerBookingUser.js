import { async } from '@firebase/util';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import fetcher from '../../../api';
import auth from '../../../firebase.init';
import Loading from '../../Shered/Loading/Loading';
import './PerBookingUser.css'

const PerBookingUser = () => {
    const [user,loading] = useAuthState(auth)

    const [bookings,setBookings] = useState([])

  

    useEffect(()=>{
        (async()=>{
            const res = await fetcher.get(`/allBooking?email=${user.email}`)
            setBookings(res.data)
        })();
    },[bookings,user])
    if (loading) {
        return <Loading/>
    }
   
    console.log(bookings);

    return (
        <div className='container-fluid perBookingUser'>
            <div className="row row-cols-1 g-4 row-cols-md-3">
                {
                    bookings.map((booking)=> <div className="col ">
                    <div className="destination h-100">
                      <img src={booking.bookingImg} className="card-img-top img-destination" alt="..." />
                      <div className="card-body destination-details">
                        <h5 className="card-title">{booking.bookingTourName}</h5>
                        <p>Price: ${booking.bookingPrice}</p>
                        <button>Payment</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PerBookingUser;
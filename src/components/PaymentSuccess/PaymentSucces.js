import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetcher from "../../api";
import "./PaymentSucces.css";

const PaymentSucces = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transcationId = query.get("transcationId");
  const [booking, setBooking] = useState({});
  useEffect(() => {
    (async () => {
      const res = await fetcher.get(
        `/booking/by-trancation-id/${transcationId}`
      );
      setBooking(res.data);
    })();
  }, [transcationId]);
  return (
    <div className="paymentSuccess container">
      <h2>Congrats! Successfully Paid</h2>
      <h2>Your Order Summary</h2>
      <table class="table table-success table-striped mt-5 mb-5">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Booking Name</th>
            <th scope="col">Price</th>
            <th scope="col">TransactionId</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{booking.displayName}</td>
            <td>{booking.bookingTourName}</td>
            <td>${booking.bookingPrice}</td>
            <td>{booking.transactionId}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="ms-auto d-block btn btn-success"
        onClick={() => window.print()}
      >
        Print
      </button>
    </div>
  );
};

export default PaymentSucces;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetcher from '../../api';
import ShareHeaderBanner from '../../pages/Shered/ShareHeaderBanner/ShareHeaderBanner';
import BookingTourDetails from '../BookingDetails/BookingTourDetails';
import './BestBooking.css'

const BestBooking = () => {

    const [tour, setTour] = useState({});
    const { id } = useParams();
    useEffect(() => {
        (async () => {
          const res = await fetcher.get(`/perfectHoliday/${id}`);
          setTour(res.data);
        })();
      }, []);
    return (
        <div>
            <ShareHeaderBanner title={'Tour Details'}/>
            <BookingTourDetails tour={tour}/>
        </div>
    );
};

export default BestBooking;
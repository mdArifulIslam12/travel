import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetcher from '../../../api';
import ShareHeaderBanner from '../../../pages/Shered/ShareHeaderBanner/ShareHeaderBanner';
import BookingAllTourPages from '../../BookingAllTourPages/BookingAllTourPages';
import BookingTourDetails from '../../BookingDetails/BookingTourDetails';

const TourBooking = () => {
    const [tour, setTour] = useState({});
    const { id } = useParams();
    useEffect(() => {
        (async () => {
          const res = await fetcher.get(`/tours/${id}`);
          setTour(res.data);
        })();
      }, []);
    return (
        <div>
            <ShareHeaderBanner title={'Tour Details'}/>
            <BookingTourDetails tour={tour}/>
            <BookingAllTourPages tour={tour}/>
        </div>
    );
};

export default TourBooking;
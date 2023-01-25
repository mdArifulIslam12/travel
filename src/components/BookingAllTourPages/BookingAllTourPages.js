import React from 'react';
import BookingTourOtherDetails from './BookingTourOtherDetails/BookingTourOtherDetails';
import BookingTourPlan from './BookingTourPlan/BookngTourPlan.js'
import Subscribe from '../../pages/Shered/Subscribe/Subscribe'

const BookingAllTourPages = ({tour}) => {
    return (
        <div className='mt-5 '>
            <BookingTourOtherDetails tour={tour}/>
            <BookingTourPlan/>
            <Subscribe/>
        </div>
    );
};

export default BookingAllTourPages;
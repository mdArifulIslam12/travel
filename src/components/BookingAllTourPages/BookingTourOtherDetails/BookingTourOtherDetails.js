import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Trending from '../../../pages/Shered/Trending/Trending';
import {faBullhorn, faClock, faUser, faCheck, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './BookingTourOtherDetails.css'

const BookingTourOtherDetails = ({tour}) => {
    return (
        <div className='container '>
            <div className="row">
                <div className="col-lg-10">
                    <Trending title={'Tour Details'}/>
                    <p>Nulla accumsan gravida nunc id convallis. Maecenas ut ligula et mi tempus feugiat.lvinar scelerisque augue tellus nec nisl. Curabitur eget nibh sit amet tellus sagittis tempor. Aenean diam leo, sollicitudin eget tempus vitae, porttitor eget libero. Praesent sagittis magna non purus scelerisque vulputate. Nunc et dolor lobortis, malesuada augue tempor, porttitor est. Pellentesque et sollicitudin est. Maecenas lacinia pharetra fringilla. Donec libero risus, rutrum elementum porttitor at, laoreet vitae libero. Cras ultrices urna mauris, eu commodo neque lobortis id. Curabitur libero ligula, viverra ac venenatis hendrerit, mollis nec massa. Duis vitae orci sed metus dictum dignissim. Donec ac libero ut tortor dictum tristique at in turpis.</p>
                    <div className='mt-5 booking-for-details-icon '>
                        <div className='d-flex justify-content-between'>
                            <p className='m-0'>
                                <span className='d-block text-center'>
                                    <FontAwesomeIcon icon={faClock}/>
                                </span>
                                {tour.date} days
                            </p>
                            <p className='m-0'>
                                <span className='d-block text-center'>
                                    <FontAwesomeIcon icon={faUser}/>
                                </span>
                                18+
                            </p>
                            <p className='m-0'>
                                <span className='d-block text-center'>
                                    <FontAwesomeIcon icon={faBullhorn}/>
                                </span>
                                Best Deals
                            </p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='booking-tour-details-other d-flex justify-content-between'>
                            <h5>Departure & Return Location</h5>
                            <p>On your computer, open Google Maps.</p>
                        </div>
                        <div className='mt-4 booking-tour-details-other d-flex justify-content-between'>
                            <h5>Meeing Time</h5>
                            <p>30 Minutes Before Event Time.</p>
                        </div>
                        <div className='mt-4 booking-tour-details-other d-flex justify-content-between'>
                            <h5>Price Includes</h5>
                            <div className='booking-price-includes'>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Tour Guide
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Entrance Fees
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    All Transportaion in destination location
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Lunch Box
                                </p>
                            </div>
                        </div>
                        <div className='mt-4 booking-tour-details-other d-flex justify-content-between'>
                        <h5>Price Excludes</h5>
                            <div className='booking-price-includes booking-excludes'>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                    </span>
                                    Guide Service Fee
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                    </span>
                                    Driver Service Fee
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                    </span>
                                    Any Private Expenses
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                    </span>
                                    Room Service Fees
                                </p>
                            </div>
                        </div>
                        <div className='mt-4 booking-tour-details-other d-flex justify-content-between'>
                            <h5>Price Includes</h5>
                            <div className='booking-price-includes'>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Umbrella
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Sunscreen
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    T-Shirt
                                </p>
                                <p className='d-flex align-itmes-center'><span>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    Entrance Fees
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BookingTourOtherDetails;
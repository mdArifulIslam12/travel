import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fetcher from '../../api';
import Button from '../Shered/Button/Button';
import ShareHeaderBanner from '../Shered/ShareHeaderBanner/ShareHeaderBanner'
import {faClock,faLocation,faMapLocation,faUser } from '@fortawesome/free-solid-svg-icons'
import './Tours.css'
import { Link, useNavigate } from 'react-router-dom';
import Subscribe from '../Shered/Subscribe/Subscribe';

const Tours = () => {
    const [tours,setTours] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        (async()=>{
            const res = await fetcher.get('/tours')
            setTours(res.data)
        })()
    },[navigate])
    const handleNavigate = (id) => {
        navigate(`/tours/${id}`);
      };
    return (
        <div>
            <ShareHeaderBanner title={'Tours'}/>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5">
                    {
                        tours.map((tour)=> <div className="col">
                            <div className="card tour">
                                <img src={tour.img} alt="" />
                                <div className="card-body tour-details mt-4">
                                    <h4>{tour.name}</h4>
                                    <p className='my-3'>{tour.details}</p>
                                    <div className='mt-4 mb-3 d-flex align-items-center justify-content-between'>
                                       
                                        <Link to={`/tours/${tour._id}`} onClick={()=> handleNavigate(tour._id)}> <Button title={'Book Now'}/></Link>
                                        
                                        <p className='price'>Price: ${tour.price}</p>

                                    </div>
                                </div>
                                <div class="card-footer py-3 ">
                                    <div className='tour-icon-footer d-flex align-items-center justify-content-between'>
                                        <p className='d-flex align-items-center m-0'>
                                            <span className='me-2'>
                                            <FontAwesomeIcon icon={faClock}/>
                                            </span>
                                            {tour.date} days
                                            
                                        </p>
                                        <p className='d-flex align-items-center m-0'>
                                            <span className='me-2'>
                                            <FontAwesomeIcon icon={faUser}/>
                                            </span>
                                            18+
                                            
                                        </p>
                                        <p className='d-flex align-items-center m-0'>
                                            <span className='me-2'>
                                            <FontAwesomeIcon icon={faMapLocation}/>
                                            </span>
                                            {tour.location}
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> )
                    }
                </div>
            </div>
            <Subscribe/>
        </div>
    );
};

export default Tours;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fetcher from '../../../api';
import Trending from '../../Shered/Trending/Trending';
import './ChooseHoliday.css'

const ChooseHoliday = () => {
    const [chooseHolidays,setChooseHolidays] = useState([])

    const navigate = useNavigate();

  useEffect(() => {
    (async()=>{
      const res  = await fetcher.get('/holidays')
      setChooseHolidays(res.data)
    })();
  }, []);
  const handleNavigate = (id) => {
    navigate(`/perfectHoliday/${id}`);
  };

    return (
        <div className='container chooseHoliday'>
            <Trending title={'Perfect Holiday'} subtitle={'Choose your'}/>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div className="col">
                <div class=" choseHoliday-img">
                    <img src="https://travo.iamabdus.com/v1.1/wp-content/uploads/2021/04/victor-rodriguez-pWOdBS_l9LQ-unsplash-1.png" alt="" className='chooseHoliday-img' />
                    <h3 className='details-spain'>Spain</h3>
                </div>
                </div>
                {
                    chooseHolidays.slice(4,8).map((holiday)=>  <div className="col">
                         <div class=" news-card">
                    <img src={holiday.img} alt="" class="news-card__image"/>
                    <div class="news-card__text-wrapper">
                      <h2 class="news-card__title">{holiday.name}</h2>
                      <p>Price: ${holiday.price}</p>
                      <div class="news-card__details-wrapper">
                        
                        <Link to={`/perfectHoliday/${holiday._id}`} onClick={()=> handleNavigate(holiday._id)}> <button className="btn header-button-tour ">
                          Book Now{" "}
                        </button></Link>
                      </div>
                    </div>
                  </div>
                    </div>
                )
                }
                <div className="col d-flex justify-content-center align-items-center">
                <div class=" choseHoliday-img">
                    <img src="https://travo.iamabdus.com/v1.1/wp-content/uploads/2021/04/bawah-reserve-pPYd6u9zgAI-unsplash-1.png" alt="" className='chooseHoliday-img' />
                    <h3 className='details-spain'>Bali</h3>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseHoliday;
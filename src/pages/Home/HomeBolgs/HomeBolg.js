import React from 'react';

const HomeBolg = ({bolg}) => {
    const {name,img,details,date} = bolg
    return (
        <div className='col'>
            <div class="card homebolg" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p className='mt-4 mb-3 homebolg-date'>{date}</p>
    <h5 class="card-title ">{name}</h5>
    <p class="card-text my-3">{details}</p>
  </div>
</div>
            
        </div>
    );
};

export default HomeBolg;
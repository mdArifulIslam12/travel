import React from "react";
import bolg1 from '../../../images/bolg1.jpg'
import bolg2 from '../../../images/bolg2.jpg'
import bolg3 from '../../../images/bolg3.jpg'
import bolg4 from '../../../images/bolg4.jpg'
import bolg5 from '../../../images/bolg5.webp'

const imageBolg = {
  bolg1,
  bolg2,
  bolg3,
  bolg4,
  bolg5,
}

const HomeBolg = ({ bolg }) => {
  const { name, img, details, date } = bolg;
  return (
    <div className="col">
      <div class="card homebolg">
        <img src={imageBolg[img]} class="card-img-top" alt="..." />
        <div class="card-body">
          <p className="mt-4 mb-3 homebolg-date">{date}</p>
          <h5 class="card-title ">{name}</h5>
          <p class="card-text my-3">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBolg;

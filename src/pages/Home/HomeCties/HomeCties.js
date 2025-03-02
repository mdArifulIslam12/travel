import React, { useState } from "react";
import Trending from "../../Shered/Trending/Trending";
import HomeCity from '../../../images/homeCity1.webp'
import "./HomeCties.css";

const HomeCties = () => {
  const [displayImg, setDisplayImg] = useState(false);
  return (
    <div className="homeCties-backgroundImg">
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-lg-10 text-center mt-5 pt-3 text-white">
            <Trending
              title={"Breathtaking Cities"}
              subtitle={"Go & Discover"}
            />
            <div>
              <img
                src={HomeCity}
                alt=""
                srcset=""
                className="img"
              />
              {displayImg ? (
                <iframe
                  className="icon-img-veiod home-pages-youtube"
                  src="https://www.youtube.com/embed/vNQR3ixE8AE"
                  title="10 Best Places to Visit in Thailand - Travel Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ) : (
                <img
                  src="https://travo.iamabdus.com/v1-1/wp-content/uploads/2021/04/Group-3-1.svg"
                  onClick={() => setDisplayImg(true)}
                  className="icon-img"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCties;

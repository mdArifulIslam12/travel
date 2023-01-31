import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Trending from "../../Shered/Trending/Trending";
import Offer from "../Offer/Offer";
import fetcher from "../../../api/index";
import "./Offers.css";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetcher.get("/bestService").then((res) => setOffers(res.data));
    //   (async()=>{
    //     const res = await fetcher.get('/service')
    //     setSerivces(res.data)
    // })();
  }, []);
  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 text-center">
          <Trending title={"Best Offer"} subtitle={"Our trending"} />

          <p className="text-center mb-5">
            <small>
              In hac habitasse platea dictumst. Duis varius, metus quis sodales
              mattis, massa dolor consequat urna, quis varius quam mauris id
              ante. Vestibulum at dictum quam, nec elementum tortor. Duis
              gravida feugiat ornare. Maecenas a urna in lacus pretium
              tristique.
            </small>
          </p>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {offers.map((offer) => (
          <Offer key={offer._id} offer={offer}></Offer>
        ))}
      </div>
    </div>
  );
};

export default Offers;

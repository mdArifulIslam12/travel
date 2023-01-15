import React from "react";
import Trending from "../../Shered/Trending/Trending";
import Offer from "../Offer/Offer";
import "./Offers.css";

const offers = [
  {
    id: 1,
    name: "Eiffel Tower, France",
    price: 5000,
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/lyle-hastie-BQQQFytwXGU-unsplash-1.jpg",
  },
  {
    id: 2,
    name: "Swiss Alps, Switzerland",
    price: 1600,
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/leila-azevedo-o6UVPje41Lg-unsplash-2.jpg",
  },
  {
    id: 3,
    name: "Rio de Janeiro, Brazil",
    price: 4600,
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/joshua-earle-87JyMb9ZfU-unsplash-1.jpg.webp",
  },
  {
    id: 4,
    name: "Valencia, Spain",
    price: 1600,
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/daniel-corneschi-N6HTCyN50p0-unsplash-1.jpg.webp",
  },
  {
    id: 5,
    name: "Varadero, USA",
    price: 1100,
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/jeremy-bishop-Q5ZjqF6Wd3k-unsplash-1-1.png.webp",
  },
  {
    id: 6,
    name: "Italy",
    price: 3200,
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/dan-novac-1naE8177_bI-unsplash-1.jpg",
  },
];

const Offers = () => {
  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 text-center">
          <Trending title={'Best Offer'} subtitle={'Our trending'}/>
          
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
          <Offer key={offer.id} offer={offer}></Offer>
        ))}
      </div>
    </div>
  );
};

export default Offers;

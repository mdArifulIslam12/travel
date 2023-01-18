import React from "react";
import Destination from "../Destination/Destination";
import ShareHeaderBanner from "../Shered/ShareHeaderBanner/ShareHeaderBanner";
import Subscribe from '../Shered/Subscribe/Subscribe'
import './Destinations.css'

const destinations = [
  {
    id: 1,
    name: "New York",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/mortaza-shahed-_y5EjQiAyAs-unsplash-1.jpg",
  },
  {
    id: 2,
    name: "Russia",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/nadine-marfurt-d34Anbr6xwY-unsplash-1.jpg.webp",
  },
  {
    id: 3,
    name: "Italy",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/fatih-yurur-kNSREmtaGOE-unsplash-1.jpg",
  },
  {
    id: 4,
    name: "Greece",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/high-shot-amphitheater-made-out-stone-with-green-trees-mountains-background-1.jpg",
  },
  {
    id: 5,
    name: "Taiwan",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/beautiful-landscape-cityscape-taipei-101-building-architecture-city-1.jpg",
  },
  {
    id: 6,
    name: "Netherlands",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/04/nicole-baster-t0dh3njT58Y-unsplash-1.jpg.webp",
  },
  {
    id: 7,
    name: "Spain",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/alicante-with-docked-yachts-from-castle-spain-1.jpg",
  },
  {
    id: 8,
    name: "Australia",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/sydney-opera-house-near-beautiful-sea-clear-blue-sky-1.jpg.webp",
  },
  {
    id: 9,
    name: "Bali",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/bali-pagoda-sunrise-indonesia-1.jpg.webp",
  },
  {
    id: 10,
    name: "Cuba",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/classic-convertible-car-with-monument-cuban-flag-background-1.jpg",
  },
  {
    id: 11,
    name: "Egypt",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/shot-historic-sphinx-middle-typical-egyptian-scenery-clear-sky-1.jpg.webp",
  },
  {
    id: 12,
    name: "Japan",
    img: "https://travo.iamabdus.com/v1.0/wp-content/uploads/2021/03/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-sunset-japan-1.jpg.webp",
  },
];
const Destinations = () => {
  return (
   <div className="destination-pages">
    <ShareHeaderBanner title={"Destination List"}/>
     <div className="container destinations">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            destination={destination}
          ></Destination>
        ))}
      </div>
    </div>
    <Subscribe/>
   </div>
  );
};

export default Destinations;

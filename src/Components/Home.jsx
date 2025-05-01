import { useState } from "react";
import RestaurantCarousel from "../Components/RestaurantCarousel";
import Latest from "../Components/Latest";

const categories = [
  { name: "All", img: "/images/Vector.png" },
  { name: "Restaurants", img: "/images/restu.png" },
  { name: "Hotels", img: "/images/hotel.png" },
  { name: "Home services", img: "/images/home.png" },
  { name: "Shopping", img: "/images/shopping.png" },
  { name: "Car location", img: "/images/car.png" },
  { name: "Beauty & Spa", img: "/images/beauty.png" },
  { name: "Park", img: "/images/park.png" },
  { name: "museum", img: "/images/meseum.png" },
  { name: "Car wash", img: "/images/carwash.png" },
  { name: "Bars", img: "/images/bars.png" },
  { name: "Gyms", img: "/images/gums.png" },
];

export default function Home() {
  return (
    <div>
        <div className=" text-black p-4 pt-8 md:pt-16 flex justify-center ">
        <div className="flex space-x-18 overflow-x-auto">
        {categories.map((category, i) => (
          <button
            key={i}
            className="flex flex-col items-center text-gray-500 hover:text-blue-500 text-sm font-medium"
          >
            {category.img && (
              <div className="mb-1 w-6 h-6">
                <img src={category.img} alt={category.name} className="w-full h-full object-contain" />
              </div>
            )}
            {category.name}
          </button>
        ))}
        </div>
      </div>
      <RestaurantCarousel/>
      <Latest/>
    </div>
  );
}

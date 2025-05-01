import React from 'react';
import Data from "../JsonPages/latest.json";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= fullStars ? "text-yellow-500" : "text-gray-300"}>
        ★
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

const Latest = () => {
  const restaurants = Data;

  return (
    <div className="px-4 md:px-12 py-8 md:py-16  mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">The latest trends</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-cover"
              style={{ height: "213px" }}
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm my-2 flex-1">{item.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <StarRating rating={item.rating} />
                <span className="text-sm font-semibold">{item.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Map = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get("city") || "singapore";

  const [restaurants, setRestaurants] = useState([]);
  const [showSortMenu, setShowSortMenu] = useState(false);

  useEffect(() => {
    fetch("/data/Map.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((rest) =>
          rest.city.toLowerCase().includes(city.toLowerCase())
        );
        setRestaurants(filtered);
      });
  }, [city]);

  return (
    <div className="flex h-screen relative">
      {/* Left Panel: Restaurant List */}
      <div className="w-full md:w-1/2 flex flex-col h-screen">
        {/* Scrollable content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="text-sm text-gray-500 mb-2">
            Home / Restaurants in <span className="capitalize">{city}</span>
          </div>
          <div className="flex items-center justify-between mb-4 relative">
            <h2 className="text-2xl font-bold capitalize">
              Best restaurants in {city}
            </h2>
            <button
              className="border px-3 py-1 rounded-md flex items-center gap-1"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <span>⇅</span> Sort
            </button>

            {/* Sort Menu */}
            {showSortMenu && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-xl border w-48 z-50">
                <div className="flex justify-between items-center px-3 py-2 border-b">
                  <span className="text-blue-600 font-medium">All feedbacks</span>
                  <button onClick={() => setShowSortMenu(false)}>✕</button>
                </div>
                <ul className="text-gray-800 px-3 py-2 space-y-2">
                  <li className="cursor-pointer hover:text-blue-600">Highest rated</li>
                  <li className="cursor-pointer hover:text-blue-600">Oldest rated</li>
                </ul>
              </div>
            )}
          </div>

          {restaurants.length > 0 ? (
            restaurants.map((rest, index) => (
              <div
                key={index}
                className="flex items-start gap-4 mb-6 border-b pb-4"
              >
                <img
                  src={rest.image}
                  alt={rest.name}
                  className="w-32 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{rest.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    The lorem ipsum is, in printing, a series of meaningless words used temporarily.
                  </p>
                  <div className="flex items-center text-sm gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < rest.stars ? "⭐" : "☆"}</span>
                    ))}
                    <span className="ml-2">
                      {rest.rating} ({rest.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No restaurants found in {city}.</p>
          )}
        </div>

        {/* Bottom Button */}
        <div className="p-6 border-t">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
            Show more
          </button>
        </div>
      </div>

      {/* Right Panel: Map */}
      <div className="hidden md:block md:w-1/2">
        <iframe
          title={`${city} Map`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(city)}&output=embed`}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

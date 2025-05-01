import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import findData from "../JsonPages/Find.json";

export default function RestaurantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = findData.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    if (currentIndex + itemsPerPage > totalItems) {
      const endItems = findData.slice(currentIndex);
      const startItems = findData.slice(0, itemsPerPage - endItems.length);
      return [...endItems, ...startItems];
    }
    return findData.slice(currentIndex, currentIndex + itemsPerPage);
  };

  return (
    <div className="bg-blue-500 p-4 md:p-6 m-4 md:m-10 rounded-lg text-white">
      <h2 className="text-xl md:text-4xl font-semibold mb-8 mx-8 text-start">
        Find the best restaurant ratings below
      </h2>
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute md:left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10"
        >
          <FiChevronLeft size={24} />
        </button>

        {/* Carousel Container */}
        <div className="flex overflow-hidden space-x-8 pb-4 md:mx-8">
          {getVisibleItems().map((item) => (
            <div key={item.id} className="w-full md:w-1/4 transition-all duration-300 relative">
              <div className="bg-white rounded-lg overflow-hidden shadow-md relative">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-black">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                    <span className="ml-2 font-bold">{item.rating}</span>
                    <span className="text-gray-500">({item.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg z-10"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

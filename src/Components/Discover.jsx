import React from "react";

const Discover = () => {
  return (
    <div className="bg-white py-2 ">
      {/* Top section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-6">
          Discover more cool restaurants
        </h2>
        <button className="bg-blue-600 text-white px-6 py-2 md:mb-4 rounded-full hover:bg-blue-700 transition cursor-pointer">
          Show more
        </button>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left text section */}
          <div className="lg:w-1/2 text-center lg:text-left md:mx-20">
            <h3 className="text-2xl sm:text-3xl md:text-[26px] font-bold text-primary font-lexend mb-4 leading-snug">
              MyFeedback for Business has resources to help you plan, start,
              grow, and advertise your small business
            </h3>
            <p className="text-halka font-roboto mb-6 max-w-md mx-auto lg:mx-0">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <button className="bg-kalo text-sada px-6 py-3 font-roboto rounded-full hover:bg-gray-800 transition cursor-pointer">
              Explore MyFeedback business
            </button>
          </div>

          {/* Right image section */}
          <div className="lg:w-1/2 md:mx-20">
            <img
              src="/images/ds.png" // Replace if image is in another location
              alt="Restaurant"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;

import React from "react";

const activities = [
  {
    name: "Leslie sakho",
    location: "Canada, toronto",
    date: "09/11/2023",
    rating: 5,
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    desp:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [
      "/images/rt1.png",
      "/images/rt2.png",
      "/images/rt3.png",
    ],
  },
  {
    name: "Chris macari",
    location: "Singapour",
    date: "14/09/2023",
    rating: 5,
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    desp:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [
      "/images/rt4.png",
      "/images/rt5.png",
      "/images/rt6.png",
    ],
  },
  {
    name: "Jojo alba",
    location: "Kuala lumpur",
    date: "28/09/2023",
    rating: 5,
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    desp:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [
      "/images/rt7.png",
      "/images/rt8.png",
      "/images/rt9.png",
    ],
  },
];

const Recent = () => {
  return (
    <div className="px-4 md:px-12 py-10">
      <h2 className="text-2xl font-bold mb-6">Recents avtivities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-chaia shadow-md rounded-xl p-4 space-y-3"
          >
            <div className="flex items-center gap-3 ">
              <div className="" />
              <img className="rounded-full p-4 bg-sada" src="images/ft.png" alt="" />
              <div>
                <h3 className="font-semibold font-roboto text-[21px]">{activity.name}</h3>
                <p className="text-sm text-gray-500">{activity.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {Array.from({ length: activity.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-500 ml-2">{activity.date}</span>
            </div>

            <p className="text-base text-gray-700 font-roboto font-normal">{activity.description}</p>
            <p className="text-base text-gray-700 font-roboto font-normal">{activity.desp}</p>

            <div className="flex gap-2 mt-8">
              {activity.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="activity"
                  className="w-1/3 h-24 object-cover rounded-md"
                />
              ))}
            </div>

            <a href="#" className="text-[#232323] underline text-[17px] font-medium font-lexend">
              Discover
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;

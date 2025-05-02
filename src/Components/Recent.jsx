import React from "react";

const activities = [
  {
    name: "Leslie sakho",
    location: "Canada, toronto",
    date: "09/11/2023",
    rating: 5,
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [
      "/images/leslie1.jpg",
      "/images/leslie2.jpg",
      "/images/leslie3.jpg",
    ],
  },
  {
    name: "Chris macari",
    location: "Singapour",
    date: "14/09/2023",
    rating: 5,
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [
      "/images/chris1.jpg",
      "/images/chris2.jpg",
      "/images/chris3.jpg",
    ],
  },
  {
    name: "Jojo alba",
    location: "Kuala lumpur",
    date: "28/09/2023",
    rating: 5,
    description:
      "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    images: [
      "/images/jojo1.jpg",
      "/images/jojo2.jpg",
      "/images/jojo3.jpg",
    ],
  },
];

const Recent = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Recents avtivities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <h3 className="font-semibold">{activity.name}</h3>
                <p className="text-sm text-gray-500">{activity.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {Array.from({ length: activity.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-500 ml-2">{activity.date}</span>
            </div>

            <p className="text-sm text-gray-700 font-roboto">{activity.description}</p>
            <p className="text-sm text-gray-700">{activity.description}</p>

            <div className="flex gap-2">
              {activity.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="activity"
                  className="w-1/3 h-24 object-cover rounded-md"
                />
              ))}
            </div>

            <a href="#" className="text-blue-600 underline text-sm">
              Discover
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;

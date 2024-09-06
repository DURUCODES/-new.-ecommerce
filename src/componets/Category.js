import React from "react";
import kid from "../assets/Images/catt/kid1.png";
import whiteman from "../assets/Images/catt/man2.png";
import woman from "../assets/Images/catt/girl1.png";

const CategoriesData = [
  {
    title: "Men",
    imageUrl: whiteman,
  },

  {
    title: "Women",
    imageUrl: woman,
  },

  {
    title: "Kids",
    imageUrl: kid,
  },
];

const Category = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3  my-5 gap-6">
      {CategoriesData.map((catdata, index) => (
        <div
          key={index}
          className="relative h-86 p-5 rounded-xl hover:bg-red-400 bg-red-600 w-auto mx-auto my-5 shadow-md cursor-pointer hover:scale-105  transform transition-transform duration-300"
        >
          <img
            src={catdata.imageUrl}
            className=" h-56 w-56  object-contain rounded-lg "
          />
          <div className="absolute top-20 left-6">
            <p className="font-extrabold hover:text-gray-300">
              {catdata.title}
            </p>
            <p className="font-light  hover:text-gray-300">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

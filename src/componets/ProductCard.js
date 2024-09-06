import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully!");
  };
  return (
    <Link /* to={`/product/${product.id}`} */>
      <div className=" bg-white p-4 shadow rounded my-4 relative border  transform transition-transform duration-300 hover:scale-105">
        <div>
          <img
            src={product.images}
            className=" transition-transform transform duration-1000 ease-in-out scale-100 hover:rotate-45                   w-full h-48 object-contain mb-4 hover:scale-150 hover:w-full  cursor-pointer hover:mb-8  "
          />
        </div>
        <h3 className=" text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">${product.price}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex cursor-pointer">
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>{" "}
            <FaStar className="text-yellow-400"></FaStar>{" "}
            <FaStar className="text-yellow-400"></FaStar>{" "}
            <FaStar className="text-yellow-400"></FaStar>
          </div>
          <div
            onClick={(e) => handleAddToCart(e, product)}
            className="abosolute bottom-4 right-2  cursor-pointer flex items-center justify-center w-8 h-8 bg-red-600 group  transform transition-transform duration-300 hover:scale-105 text-white text-sm rounded-full hover:w-32 hover:bg-red-700 "
          >
            <span class="group-hover:hidden">+</span>
            <span class="hidden group-hover:block">Add To Cart</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

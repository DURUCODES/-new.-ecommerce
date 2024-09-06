import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/MockData";
import HeroImage from "../assets/Images/hero.png";
import banner from "../assets/Images/bbb.webp";
import InfoSection from "../componets/InfoSection";
import Category from "../componets/Category";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../componets/ProductCard";
import ShopCard from "../componets/ShopCard";
const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);
  return (
    <div className="bh-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div>
            <div className="bg-red-600 cursor-pointer text-white text-xs font-bold px-2 py-2.5 text-center mb-3 ">
              SHOP BY CATEGORIES
            </div>

            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((Categories, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-3 h-3 border border-red-600 rounded-full mr-3"></div>
                  {Categories}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={banner} className="h-full w-full" />
          <div className="absolute top-6 left-10">
            <div className="bg-indigo-800 text-yellow-400   my-3 h-10 w-14 rounded p-2 text-lg  font-bold">
              NEW
            </div>
            <div>
              <p className="block text-5xl text-white   my-3 font-extrabold">
                ONLINE
              </p>
              <span className="text-white text-4xl   my-3 ">STORE</span>
            </div>
            <p className="text-3xl  ">MILLIONS+ PRODUCTS</p>
            <button className="bg-indigo-800  py-2 rounded  hover:bg-indigo-400 hover:scale-105  transform transition-transform duration-300 my-3 px-8 text-yellow-400">
              SHOP NOW{" "}
            </button>
          </div>
        </div>
      </div>

      <InfoSection />
      <div>
        <Category />
      </div>

      <div className="conatiner mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {product.product.slice(0, 5).map((items, index) => (
            <ProductCard product={items} />
          ))}
        </div>
      </div>

      <ShopCard />
    </div>
  );
};

export default Home;

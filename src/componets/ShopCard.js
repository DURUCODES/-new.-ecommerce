import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ShopCard = () => {
  const product = useSelector((state) => state.product);
  return (
    <div className=" mx-auto py-12  pz-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {product.product.map((items, index) => (
          <ProductCard product={items} />
        ))}
      </div>
    </div>
  );
};

export default ShopCard;

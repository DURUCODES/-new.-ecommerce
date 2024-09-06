import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product.product);
  const [item, setItem] = useState();

  useEffect(() => {
    const newPrdouct = product.find((item) => item.id === parseInt(id));
    setItem(newPrdouct);
  }, [id]);
  return (
    <div>
      <div>{item.name}</div>
    </div>
  );
};

export default ProductDetails;

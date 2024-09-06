import React from "react";
import {
  FaLock,
  FaMoneyBillWave,
  FaHeadset,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "free Shipping",
      description: "Get Your orders Deliverd with no extra cost ",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assit you anytime  ",
    },

    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are here to assit you anytime  ",
    },

    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your Payment information are safe wtih us   ",
    },

    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Enkoy your best price on our product   ",
    },
  ];
  return (
    <div className="bg-white pv-8 pt-12 ">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((info, index) => (
          <div
            key={index}
            className=" flex flex-col items-center rounded-lg p-4 text-center shadow  cursor-pointer hover:scale-105  transform transition-transform duration-300 "
          >
            {info.icon}
            <h3 className="mt-4 text-x1 font-semibold">{info.title}</h3>
            <p className="mt-2 text-gray-600">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;

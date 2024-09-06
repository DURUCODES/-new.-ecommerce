import React, { useState } from "react";
import emptyBag from "../assets/Images/emptycart.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import ChangeAddress from "./ChangeAddress";
import { clearCart, removeFromCart } from "../redux/CartSlice";
import { increaseQuantity } from "../redux/CartSlice";
import { decreaseQuantity } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Gwarimpa 39 Road Abuja NG");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="conatiner mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.product.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS </p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.product.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex item-center space-x-4">
                      <img
                        src={product.image}
                        className="w-16 h-16 object-contain rounded ransition-transform duration-1000 transform hover:rotate-[-360deg] rotate-[-45deg]  hover:scale-110  cursor-pointer"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="">{product.name}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-between border">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                          className="text-x1 font-bold px-1.5 border-r"
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(product.id))}
                          className="text-x1 font-bold px-1 border-1"
                        >
                          +
                        </button>
                      </div>

                      <p>${(product.quantity * product.price).toFixed(2)}</p>

                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border ">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="texxt-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>SHIPPING:</p>
                <div className="flex items-center">
                  <p className="ml-2">Shipping to :</p>
                  <span className="text-xs font-bold pv-2">
                    address: {address}
                  </span>
                </div>

                <div>
                  <button
                    className="text-blue-500 hover:underline mt-1 mb-1"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Change Address{" "}
                  </button>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <p>Total Price: </p>
                <span>{cart.totalPrice}</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-red-600 text-white  py-2 hover:bg-red-800"
              >
                Procedd to checkout
              </button>
            </div>
          </div>

          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex items-center mx-auto  justify-center p-10 ">
          <div className="flex items-center text-center flex-col">
            <h1 className="text-blue-950 font-extrabold text-4xl">
              Your Cart is empty
            </h1>
            <img src={emptyBag} className="h-64" />
            <p className="text-gray-500">
              {" "}
              Add something to make me feel happy :)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

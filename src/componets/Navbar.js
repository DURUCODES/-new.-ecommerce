import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { setSearchTerm } from "../redux/ProductSlice";

const Navbar = () => {
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const product = useSelector((state) => state.cart.product);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };
  return (
    <nav className="bg-white shadow-md ">
      <div className="containner mx-auto lg:px-24  md:px-16 px-4 py-8 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Product"
              className="w-full h-12 border border-gray-300  py-2 rounded py02 px-8"
            />
            <FaSearch className="absolute top-4  cursor-pointer right-3 text-red-400 w-7 h-5"></FaSearch>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart />
            {product.length > 0 && (
              <span className="absolute top-11 text-xs ml-2 w-3  bg-red-600 rounded-full  flex justify-center items-center text-white">
                {product.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
          <button>
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center  font-extrabold space-x-10 py-4 justify-center text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:underline ">
          Shop
        </Link>
        <Link className="hover:underline">Contact</Link>
        <Link className="hover:underline">About</Link>
      </div>
      <Modal isModalOpen={ismodalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <LoginPage openSignUp={openSignUp} />
        ) : (
          <RegisterPage openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;

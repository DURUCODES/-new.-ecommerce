import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-extrabold">e-Shop</h3>
          <p className="mt-4">
            Your One-step fotr all youe needs. Shop with use and experience the
            best online shopping experince{" "}
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>

            <li>
              <Link to="contact" className="hover:underline">
                Contact
              </Link>
            </li>

            <li>
              <Link to="about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 text-lg font-semibold>
            {" "}
            follow us
          </h4>
          <div className="flex space-x-4 mt-4 ">
            <a className="hover:text-gray-400" href="">
              <FaFacebook />
            </a>
            <a className="hover:text-gray-400" href="">
              <FaTwitter />
            </a>
            <a className="hover:text-gray-400" href="">
              <FaInstagram />
            </a>
            <a className="hover:text-gray-400" href="">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            <form className="flex items-center justify-center mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
              />
              <button className="bg-red-600 text-white py-2 rounded-r-lg px-4  border border-gray-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
          <div>
            <p>&copy; 2024 e-shop ALL rights reserved </p>
          </div>

          <div className="flex flex-row space-x-4 mt-4 md:mt-0">
            <a>Privacy</a>
            <a>Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

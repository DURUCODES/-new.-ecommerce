import React from "react";

const RegisterPage = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-ful px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-ful px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb--4 w-full">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-ful px-3 py-2 border "
            placeholder="Enter Password"
          />
        </div>

        <div className="mt-3 ">
          <button className="bg-red-600 w-full py-2 px4 text-white">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex  mt-3 items-center">
        <span>Already Have an Account</span>
        <button className="text-red-800 ml-3" onClick={openLogin}>
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;

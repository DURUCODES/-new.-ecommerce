import React from "react";

const LoginPage = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-ful px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb--4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-ful px-3 py-2 border "
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-check" />
            <span className="ml-2 text-gray-700">Remember Me </span>
          </label>
          <a href="#" className="text-red-700">
            Forgot paasword{" "}
          </a>
        </div>
        <div>
          <button className="bg-red-600 w-full py-2 px4 mt-2 mb-2 text-white">
            Login
          </button>
        </div>
      </form>
      <div className="flex items-center ">
        <span>Don't Have an Account</span>
        <button className="text-red-800 ml-3" onClick={openSignUp}>
          Sing Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

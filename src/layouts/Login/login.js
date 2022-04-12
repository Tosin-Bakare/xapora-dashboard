import React, { useState } from "react";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="p-4">
        <p className="flex justify-center">Log in to your account</p>
      </div>
      <div>
        <form>
          <div className="px-4 pb-4">
          <div>
                <div className="mt-2">
            <p>Email</p>
            <input
              className="w-full text-sm py-2 shadow-md border-gray-300 focus:outline-none focus:border-gray-900 p-2"
              type=""
              name="email"
              placeholder="john@wick.me"
            />
          </div>
          <div className="mt-4">
            <p>Password</p>
            <input
              className="w-full text-lg py-2 shadow-md border-gray-300 focus:outline-none focus:border-gray-900 p-2"
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="****************"
            />
            <div className="flex justify-between mt-4">
              <div>
              <input type="checkbox" className="" /> &nbsp;
              <span className="-mt-1.5 ">Remember me</span>
              </div>
              <div>
              <a className="text-xs font-semibold text-gray-900 cursor-pointer">
                Forgot Password?
              </a>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-gray-900 text-gray-100 p-4 w-full  tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700"
              >
                LOGIN
              </button>
            </div>
          </div>
          </div>
          </div>
          
        </form>
      </div>
    </>
  );
};
export default Login;
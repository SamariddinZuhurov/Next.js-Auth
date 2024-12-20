"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

function Login() {
  let [positionBackSign, setPositonBackSign] = useState(false);
  let [positionPasswordINP, setPositionPasswordINP] = useState(false);
  let [passwordINP, setPasswordINP] = useState("");

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen">
        <Link href="/">
          <button
            className={`    bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2  absolute top-5 left-7  flex p-10  pl-3 pr-6 items-center  gap-4 focus:ring-blue-400 focus:ring-opacity-50 `}
          >
            <IoMdArrowBack className="    text-[20px] font-bold" />

            <span>Back</span>
          </button>
        </Link>
        <div className="bg-slte rounded-lg  shadow-2xl p-8 w-[40%]">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form id="registrationForm" noValidate>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
                required
              />
              <p
                className="text-red-500 text-sm mt-2 hidden"
                id="usernameError"
              >
                Username is required.
              </p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
              />
              <p className="text-red-500 text-sm mt-2 hidden" id="emailError">
                Please enter a valid email.
              </p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <div className=" relative   ">
                <input
                  value={passwordINP}
                  onChange={(e) => setPasswordINP(e.target.value)}
                  type={positionPasswordINP ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
                {passwordINP.length == 0 ? (
                  ""
                ) : (
                  <h1
                    onClick={() => setPositionPasswordINP(!positionPasswordINP)}
                  >
                    {positionPasswordINP ? (
                      <IoEyeOutline className="  mt-3  mr-3 cursor-pointer absolute  top-0 right-0 " />
                    ) : (
                      <IoEyeOffOutline className="  mt-3  mr-3  cursor-pointer absolute  top-0 right-0 " />
                    )}
                  </h1>
                )}
              </div>
              <p
                className="text-red-500 text-sm mt-2 hidden"
                id="passwordError"
              >
                Password is required.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mt-4"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Creat an account {" "}
            <a href="#" className="text-blue-500 font-semibold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

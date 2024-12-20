"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import BackButton from "./BackButton";
import { useState } from "react";
import Link from "next/link";

function LoginForm() {
  let [positionPasswordINP, setPositionPasswordINP] = useState(false);
  let [passwordINP, setPasswordINP] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !email || !passwordINP) {
      setError("All fields are necessary");
    }
    return;
  };

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen">
        <BackButton href="/" />
        <div className="bg-slte rounded-lg  shadow-2xl p-8 w-[40%]">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} id="registrationForm" noValidate>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2"
              >
                Username
              </label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div
              className={` ${
                error.length == 0 ? "hidden" : " block"
              }  text-[16px] ml-2 bg-[red] text-white  w-fit p-1 rounded-md`}
            >
              <h1>{error}</h1>
            </div>
            <button
              type="submit"
              className=" shadow-xl  w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mt-4"
            >
              Login
            </button>
            <div className="flex mt-5  justify-between">
              <button
                className={`  w-[48%] flex justify-center items-center gap-4    bg-white shadow-md transition-[100ms]  py-2 rounded-lg font-semibold hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 `}
              >
                <FcGoogle className="text-[30px]" />{" "}
                <h1 className="mt-1">Google</h1>
              </button>
              <button
                className={` gap-4  w-[48%] flex justify-center items-center    bg-white shadow-md transition-[100ms]  py-2 rounded-lg font-semibold hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 `}
              >
                <FaGithub className="text-[30px]" />{" "}
                <h1 className="mt-1">Github</h1>
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Creat an account{" "}
            <Link href="signup" className="text-blue-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

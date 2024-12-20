"use client";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import BackButton from "./BackButton";

import { useState } from "react";

function SignUpForm() {
  let [positionPasswordINP, setPositionPasswordINP] = useState(false);
  let [conPositionPasswordINP, setConPositionPasswordINP] = useState(false);
  let [passwordINP, setPasswordINP] = useState("");
  let [conPasswordINP, setConPasswordINP] = useState("");
  const [userName, setUserNmae] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !email || !passwordINP || conPasswordINP) {
      setError("All fields are necessary");
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen">
        <BackButton href="login" />
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
                onChange={(e) => setUserNmae(e.target.value)}
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
              <label
                htmlFor="password"
                className="block mt-5 text-gray-700 font-semibold mb-2"
              >
                Conffirm Password
              </label>
              <div className=" relative   ">
                <input
                  value={conPasswordINP}
                  onChange={(e) => setConPasswordINP(e.target.value)}
                  type={conPositionPasswordINP ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
                {conPasswordINP.length == 0 ? (
                  ""
                ) : (
                  <h1
                    onClick={() =>
                      setConPositionPasswordINP(!conPositionPasswordINP)
                    }
                  >
                    {conPositionPasswordINP ? (
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
                error.length == 0 ? "hidden" : "block"
              } text-[16px] ml-2 bg-[red] text-white  w-fit p-1 rounded-md`}
            >
              <h1>{error}</h1>
            </div>
            <button
              type="submit"
              className=" shadow-xl  w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mt-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;

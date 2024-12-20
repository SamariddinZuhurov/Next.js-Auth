import React from "react";

function dashboard() {
  return (
    <div className=" flex justify-center  items-center   m-20 flex-col  gap-5">
      <button className=" hover:bg-red-500  text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Log out
      </button>
    </div>
  );
}

export default dashboard;

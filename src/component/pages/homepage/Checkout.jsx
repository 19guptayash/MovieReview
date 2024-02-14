import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Checkout = () => {
  return (
    <div className="bg-blue-800 px-10 py-14 flex flex-col gap-4">
      <div className="font-bold text-5xl ">
        <span className="bg-gradient-to-br from-blue-600 via-slate-400 to-indigo-400 text-transparent bg-clip-text">
          That's a
        </span>
      </div>
      <div className="font-bold text-5xl ">
        <span className="bg-gradient-to-br from-blue-600 via-slate-400 to-indigo-400 inline-block text-transparent bg-clip-text">
          {" "}
          Wrap 2023
        </span>
      </div>
      <p className="text-white">The best (and worst) of the year from TMDB.</p>
      <div>
        <button className="text-white border-2 border-white rounded-full px-3 py-2">
          Check it out <FaArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default Checkout;

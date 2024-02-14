import React from "react";
import SocialReviews from "./SocialReviews";

const Social = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <div className="flex gap-8 font-bold">
          <h1>Social</h1>
          <h2 className="hover:cursor-pointer">
            Reviews <span></span>
          </h2>
          <h2 className="hover:cursor-pointer">
            Discussions <span></span>
          </h2>
        </div>
       <SocialReviews/>
        <p className="font-bold w-fit hover:text-slate-500 hover:cursor-pointer ">
          Read All Reviews
        </p>
      </div>
    </div>
  );
};

export default Social;

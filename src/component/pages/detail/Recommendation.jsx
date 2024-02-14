import React from "react";
import Recommendation_card from "./Recommendation_card";
const Recommendation = () => {
  return (
    <div className="box-border px-5 py-8 ">
      <h1 className="font-bold text-xl">Recommendations</h1>
      <div className="flex gap-2 overflow-auto mt-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
          return <Recommendation_card />;
        })}
      </div>
    </div>
  );
};

export default Recommendation;

import React from "react";
import Seriescard from "./Seriescard";
const SeriesCast = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-xl">Series Cast</h1>
      <div className="flex w-full overflow-auto gap-2 mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Seriescard />
        ))}
      </div>
      <h3 className="font-bold">Full Cast & Crew</h3>
    </div>
  );
};

export default SeriesCast;

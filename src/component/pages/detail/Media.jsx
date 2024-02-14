import React from "react";
import Mostpopular from "./Mediamostpopular";
import Mediavideos from "./Mediavideos";
import Mediabackdrop from "./Mediabackdrop";
import Mediaposter from "./Mediaposter";
const Media = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <div className="flex gap-8 font-bold">
          <h1>Media</h1>
          <h2 className="hover:cursor-pointer">
            Most Popular <span></span>
          </h2>
          <h2 className="hover:cursor-pointer">
            Videos <span></span>
          </h2>
          <h2>
            Backdrops <span></span>
          </h2>
          <h2>
            Posters <span></span>
          </h2>
        </div>
        <Mostpopular />
        <Mediavideos />
        <Mediabackdrop />
        <Mediaposter />
      </div>
    </div>
  );
};

export default Media;

import React from "react";

const Seriescard = () => {
  return (
    <div className="min-w-[150px] rounded-[10px] overflow-hidden shadow-lg">
      <div>
        <img
          className="w-full"
          src="https://media.themoviedb.org/t/p/w138_and_h175_face/wOze8R9lgoZxZoTsPSHID4Nt2Ee.jpg"
          alt=""
          srcset=""
        />
      </div>
     <div className="p-2">
     <h1 className="font-bold">Name</h1>
      <p>" Master Chief, Spartan-117 / John-117 "</p>
      <p class="episode_count text-slate-500">17 Episodes</p>
     </div>
    </div>
  );
};

export default Seriescard;

import React from "react";

const Recommendation_card = () => {
  return (
    <div className="min-w-[250px] leading-loose">
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://media.themoviedb.org/t/p/w250_and_h141_face/vXpeJJs1z8OKC88CNJX9O9QOhtr.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-between">
        <p>House of the Dragon</p>
        <p>84%</p>
      </div>
    </div>
  );
};

export default Recommendation_card;

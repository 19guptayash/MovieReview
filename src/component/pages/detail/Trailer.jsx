import React from "react";

const Trailer = ({ play, movie }) => {
  console.log(play);
  return (
    <div className="w-full overflow-hidden box-border p-4 hidden" >
      <h1 className="font-bold px-5 text-xl">Watch Now</h1>
      <iframe
        src={`https://www.2embed.cc/embed/${movie.imdb_id}`}
        height="500px"
        className="rounded-lg w-full "
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailer;

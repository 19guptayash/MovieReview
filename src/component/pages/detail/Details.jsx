import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FaList, FaHeart, FaPlay, FaStar, FaBookmark } from "react-icons/fa";
import { IMAGE_BASE_URL } from "../../../services/Constants";

const Details = ({ movie }) => {
  const tagline = movie.tagline;
  // console.log(movie);

  const obj = movie.genres;

  let genrestype;
  if (movie.genres && obj.length) {
    genrestype = obj[0].name;
    for (let i = 1; i < obj.length; i++) {
      genrestype = genrestype + ", " + obj[i].name;
    }
  }

  let percentage = (movie.vote_average * 10).toFixed();
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL + movie.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left top",
        }}
      >
        <div
          className="flex justify-around items-center w-full overflow-hidden p-10 gap-5 box-border"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
          }}
        >
          <div className=" min-w-[300px] rounded-xl overflow-hidden">
            <div className="overflow-hidden">
              <img
                className="w-full"
                src={IMAGE_BASE_URL + movie.poster_path}
                alt=""
              />
            </div>
            <div className="ott_offer flex items-center justify-center gap-2 bg-slate-800 text-white py-2">
              <div>
                <img
                  className="rounded"
                  src="https://media.themoviedb.org/t/p/original/1uQBlkLRe04k58L8q1IrYOYvGfk.jpg"
                  alt="Now Streaming on Voot"
                  width={36}
                  height={36}
                />
              </div>
              <div className="leading-tight">
                <span>
                  <h4 className="opacity-90 ">Now Streaming</h4>
                  <h3 className="font-semibold">
                    <a href="#">Watch Now</a>
                  </h3>
                </span>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-8 min-w-[400px] text-white">
            <div>
              <h1 className="text-4xl">
                {movie.title || movie.name}{" "}
                <span className="text-gray-400">(2022)</span>
              </h1>
              <p className="flex items-center gap-2">
                <span
                  className="px-[4px]
            border border-gray-400 text-gray-400"
                >
                  TV-14
                </span>
                <span className="w-1 h-1 rounded-full bg-white "></span>
                {genrestype}
                <span className="w-1 h-1 rounded-full bg-white "></span>
                {movie.runtime &&
                  `${Math.floor(movie.runtime / 60)} h ${movie.runtime % 60} m`}
              </p>
            </div>
            <div className="flex items-center gap-6 font-semibold">
              <div className="flex items-center gap-2">
                <CircularProgressbar
                  className="w-[80px] bg-green-900 rounded-full p-1"
                  value={percentage}
                  text={`${percentage}%`}
                  styles={{
                    path: {
                      // Path color
                      stroke: `#21d07a`,
                    },
                    trail: {
                      stroke: "#204529",
                    },

                    text: {
                      fill: "#fff",
                      fontSize: "36px",
                    },

                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                <span>User Score</span>
              </div>
              <div
                className="bg-slate-800 rounded-full p-3 cursor-pointer"
                title="Login to create and edit custom lists"
              >
                <FaList />
              </div>
              <div className="bg-slate-800 rounded-full p-3 cursor-pointer">
                <FaHeart />
              </div>
              <div className="bg-slate-800 rounded-full p-3 cursor-pointer">
                <FaBookmark />
              </div>
              <div className="bg-slate-800 rounded-full p-3 cursor-pointer">
                <FaStar />
              </div>
              <div className="flex items-center cursor-pointer">
                <FaPlay />
                <p onClick={() => setPlay(true)}>Play Trailer</p>
              </div>
            </div>
            <div>
              <h3 className="text-slate-200">
                <i>{tagline}</i>
              </h3>
              <h3 className="font-semibold text-lg">Overview</h3>
              <div className="max-w-[850px]">
                <p>{movie.overview}</p>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="font-semibold hover:text-slate-200">
                    <a href="#">Kyle Killen</a>
                  </p>
                  <p>Creator</p>
                </div>
                <div>
                  <p className="font-semibold hover:text-slate-200">
                    <a href="#">Steven Kane</a>
                  </p>
                  <p>Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Trailer play={play} movie={movie}/> */}
    </>
  );
};

export default Details;

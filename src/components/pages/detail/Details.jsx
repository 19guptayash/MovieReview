import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FaList, FaHeart, FaPlay, FaStar, FaBookmark } from "react-icons/fa";

const Details = () => {
  const percentage = 66;
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images8.alphacoders.com/131/1317147.jpeg')",
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
              src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg"
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
              Halo <span className="text-gray-400">(2022)</span>
            </h1>
            <p>
              <span
                className="px-[4px]
            border border-gray-400 text-gray-400"
              >
                TV-14
              </span>
              Action & Adventure,Sci-Fi & Fantasy
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
                    stroke: `rgba(10, 255, 0, ${percentage / 100})`,
                    
                    strokeLinecap: "round",
                    // Customize transition animation
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    // Rotate the path
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
              
                  trail: {
                  
                    stroke: "#d6d6d6",
                    
                    strokeLinecap: "butt",
                    
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                 
                  text: {
                   
                    fill: "#fff",
                  
                    fontSize: "36px"
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
              <p>Play Trailer</p>
            </div>
          </div>
          <div>
            <h3 className="text-slate-200">
              <i>Rise from the fall.</i>
            </h3>
            <h3 className="font-semibold text-lg">Overview</h3>
            <div className="max-w-[850px]">
              <p>
                Depicting an epic 26th-century conflict between humanity and an
                alien threat known as the Covenant, the series weaves deeply
                drawn personal stories with action, adventure and a richly
                imagined vision of the future.
              </p>
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
  );
};

export default Details;

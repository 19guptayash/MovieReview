import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center gap-6 text-white bg-slate-800 box-border p-8 w-full">
      <div className="flex flex-col items-end gap-8 ">
        <img
          className="w-32"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt=""
        />
        <button className="text-blue-400 bg-white p-2 font-bold border rounded-md">
          JOIN THE COMMUNITY
        </button>
      </div>

      <div className="flex items-baseline gap-5">
        <div>
          <h1 className="font-semibold">THE BASICS</h1>
          <p>About TMDB</p>
          <p>Contact Us</p>
          <p>Support Forums</p>
          <p>API</p>
          <p>System Status</p>
        </div>
        <div>
          <h1 className="font-semibold">GET INVOLVED</h1>
          <p>Contribution Bible</p>
          <p>Contribution Bible</p>
          <p>Add New Movie</p>
          <p>Add New TV Show</p>
        </div>
        <div>
          <h1 className="font-semibold">COMMUNITY</h1>
          <p>Guidelines</p>
          <p>Discussions</p>
          <p>Leaderboard</p>
        </div>
        <div>
          <h1 className="font-semibold">LEGAL</h1>
          <p>Terms of Use</p>
          <p>API Terms of Use</p>
          <p>Privacy Policy</p>
          <p>DMCA Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

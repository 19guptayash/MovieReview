import React from 'react'
import { FaStar } from "react-icons/fa";
const SocialReviews = () => {
  return (
    <div className="shadow-lg border rounded-lg p-4 gap-3 flex flex-col">
    <div className="flex items-center gap-3">
      <div>
        <img
          className="rounded-full"
          src="https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg?s=45"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold hover:text-slate-500 hover:cursor-pointer">
          A review by Manuel Sao Bento
        </h1>
        <p className="text-slate-500">
          <span className="bg-black border rounded-lg px-1 text-white inline-block align-middle">
            <FaStar className="inline-block mb-1" />
            2.0
          </span>
          Written by{" "}
          <span className="text-black hover:cursor-pointer">
            Manuel Sao Bento
          </span>{" "}
          on <span>7 February 2024</span>
        </p>
      </div>
    </div>
    <div>
      <h1>
        FUll SPOILER-FREE REVIEW
        @https://fandomwire.com/upgraded-review-a-ridiculously-inconsequential/
      </h1>
    </div>
    <div>
      <p>
        Upgraded could have been an inoffensively formulaic, forgettable
        rom-com that borrows from hundreds of other similar movies, but
        the frustratingly simplistic conclusion with terrible messaging -
        basically conveying the idea that lying has no negative
        consequences, quite the opposite - ruins the hopes of a
        recommendation for fans of the genre.
      </p>
    </div>
  </div>
  )
}

export default SocialReviews
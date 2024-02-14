import React, { useEffect, useState } from "react";

import Details from "./Details";
import SeriesCase from "./SeriesCast";
import { useLocation } from "react-router-dom";
import { apiConnector } from "../../../services/apiconnector";
import { MOVIES_DETAILS } from "../../../services/Constants";
import Social from "./Social";
import Media from "./Media";
import Recommendation from "./Recommendation";

const Detailsmain = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/").at(-1);
  const url1 = MOVIES_DETAILS + movieId;
  // const url2=`https://api.themoviedb.org/3/tv/{series_id}`
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    apiConnector("GET", url1, null, {
      Authorization: import.meta.env.VITE_BEARER_TOKEN,
    }).then((response) => {
      // console.log("IN DETAIL RESPONSE.....", response);
      setMovie(response.data);
    });
  }, []);

  return (
    <>
      <Details movie={movie} />
      <SeriesCase />
      <hr />
      <Social />
      <hr />
      <Media />
      <hr />
      <Recommendation />
    </>
  );
};

export default Detailsmain;

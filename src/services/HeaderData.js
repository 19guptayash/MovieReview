import { MOVIES_NOW_PLAYING, MOVIES_POPULAR, MOVIES_UPCOMING, MOVIE_TOP_RATED, TV_POPULAR, TV_SHOWS_ON_AIR, TV_SHOWs_AIRING_TODAY, TV_TOP_RATED } from "./Constants";

export const  MoviesDrop = [
    {
        title:"popular",
        url:MOVIES_POPULAR,
        to:"/movies/popular"
    },
    {
        title:"Now Playing",
        url:MOVIES_NOW_PLAYING,
        to:"/movies/now-playing"
    },
    {
        title:"Upcoming",
        url:MOVIES_UPCOMING,
        to:"/movies/upcoming"
    },
    {
        title:"Top Rated",
        url:MOVIE_TOP_RATED,
        to:"/movies/top-rated"
    }

];

export const  TvShowsDrop = [
    {
        title:"popular",
        url:TV_POPULAR
    },
    {
        title:"Airing Today",
        url:TV_SHOWs_AIRING_TODAY
    },
    {
        title:"On Tv",
        url:TV_SHOWS_ON_AIR
    },
    {
        title:"Top Rated",
        url:TV_TOP_RATED
    }

];

export const people = [
    {
        title:"Popular People",
        url:""
    }
];


import React, { useEffect, useState } from 'react'
import { apiConnector } from '../../../../services/apiconnector';
import { MOVIES_POPULAR } from '../../../../services/Constants';
import Card from '../../../Common/Card';

// font-family: sans-serif;
// -ms-text-size-adjust: 100%;
// -webkit-text-size-adjust: 100%;
// --scrollerGrey: 219,219,219;
// --lightGrey: 227,227,227;
// --darkerGrey: 200,200,200;
// --vibrantDarkBlue: 6,37,65;
// --vibrantLightBlue: 0,118,241;
// --tmdbDarkBlue: 3,37,65;
// --tmdbLightBlue: 1,180,228;
// --tmdbLighterGreen: 192,254,207;
// --tmdbLightGreen: 30,213,169;
// --tmdbLogoGreen: 144,206,161;
// --tmdbLogoOrange: 253,193,112;
// --tmdbLogoRed: 217,59,99;
// --accountSilver: 149,149,149;
// --accountPink: 234,20,140;
// --accountPurple: 128,91,231;
// --accountGreen: 1,210,119;
// --accountTeal: 1,198,172;
// --accountLightBlue: 1,180,228;
// --accountBlue: 1,119,210;
// --accountOrange: 210,119,1;
// --accountYellow: 210,144,1;
// --accountRed: 212,2,66;
// --imageBorderRadius: 8px;
// --maxPrimaryPageWidth: 1400px;


function PopularMovies() {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    apiConnector("GET",MOVIES_POPULAR,null,{
      Authorization:import.meta.env.VITE_BEARER_TOKEN
    })
    .then((response)=>{
      console.log("IN POPULAR MOVIES.....",response);
      setMovies(response.data.results);

    })
  },[]);

  return (
    <div className='flex flex-wrap gap-x-4 gap-y-6 p-6 '>
      {
        movies.length===0?<div>No items were found that match your query.</div> 
        :movies.map((movie)=>{
          return <Card key={movie.id} borderFlag={true} media={movie}/>
        })
      }
    </div>
  )
}

export default PopularMovies
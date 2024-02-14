import React, { useEffect } from 'react'

import Details from './Details'
import SeriesCase from './SeriesCast'
import { useLocation, useSearchParams } from 'react-router-dom'
import { apiConnector } from '../../../services/apiconnector'
import { MOVIES_DETAILS } from '../../../services/Constants'

const Detailsmain = () => {
  // const params = useSearchParams();
  const location = useLocation();
  const movieId  = location.pathname.split('/').at(-1);
  const url = MOVIES_DETAILS  + movieId

  useEffect(()=>{
    apiConnector("GET",url,null,{
      Authorization: import.meta.env.VITE_BEARER_TOKEN
    })
  .then((response)=>{
      console.log("IN DETAILS ........",response);
    })
  },[]);

  return (
    <>
    
     <Details/>
     <SeriesCase/>
   
    </>
  )
}

export default Detailsmain
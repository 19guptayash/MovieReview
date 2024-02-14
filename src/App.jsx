import './App.css'
import Detailsmain from './component/pages/detail/Detailsmain'
import { useEffect } from 'react'
import './App.css'
import { apiConnector } from './services/apiconnector'
import {  TRENDING_URL_TODAY } from './services/Constants';
import{ Route ,Routes} from "react-router-dom";
import Header from "./component/Common/Header"
import Homepage from './component/pages/homepage/Homepage';
import Footer from './component/Common/Footer'

import Main from './component/pages/explore/Movies/Main'
import PopularMovies from './component/pages/explore/Movies/PopularMovies'
import NowPlayingMovies from './component/pages/explore/Movies/NowPlayingMovies'
import UpcomingMovies from './component/pages/explore/Movies/UpcomingMovies'
import TopRatedMovies from './component/pages/explore/Movies/TopRatedMovies'



function App() {
 
  useEffect(()=>{
 
  console.log();

  let url = TRENDING_URL_TODAY;
  apiConnector("GET",url,null,{
    accept: 'application/json',
    Authorization: import.meta.env.VITE_BEARER_TOKEN
  })
  .then((response)=>{
      console.log(response);
      console.log(response.data.results)
  })
  .catch((Err)=>{
    console.log(Err);
  })
 },[]);


  return (
    <>
     {/* <Homemain/> */}
     {/* <Detailsmain/> */}
      <Header/>

      <Routes>
      
        <Route path='/' element={<Homepage/>} />
        
        <Route path='/movies' element={<Main/>} >
            <Route index element={<PopularMovies/>} />
            <Route path='popular' element={<PopularMovies/>}  />
            <Route path='now-playing' element={<NowPlayingMovies/>} />
            <Route path='upcoming' element={<UpcomingMovies/>} />
            <Route path='top-rated' element={<TopRatedMovies/>} />
        </Route>
        
        <Route path='/movies/:movieId' element={<Detailsmain/>} />
      
      </Routes>
     
      <Footer/>
    </>
  )
}

export default App

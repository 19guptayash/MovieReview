import './App.css'
import Detailsmain from './component/pages/detail/Detailsmain'

// import Homemain from './components/pages/homepage/Homemain'

import { useEffect } from 'react'
import './App.css'
import { apiConnector } from './services/apiconnector'
import {  TRENDING_URL_TODAY } from './services/Constants';
import{ Route ,Routes} from "react-router-dom";
import Header from "./component/Common/Header"
import Homepage from './component/pages/homepage/Homepage';
import Footer from './component/Common/Footer'



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
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/movies/:movieId' element={<Detailsmain></Detailsmain>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

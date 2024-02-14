import './App.css'
import Detailsmain from './components/pages/detail/Detailsmain'

// import Homemain from './components/pages/homepage/Homemain'

import { useEffect } from 'react'
import './App.css'
import { apiConnector } from './services/apiconnector'
import {  TRENDING_URL_TODAY } from './services/Constants';
import{ Route ,Routes} from "react-router-dom";

import Homepage from './component/HomePage/Homepage';



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
     <Detailsmain/>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import Trending from './Trending'
import Popular from './Popular'
import Free from './Free'
import Searchmain from './Searchmain'
import Checkout from './Checkout'
function Homepage() {
  return (
    <div>
        <Searchmain/>
        <Checkout/>
        <Trending></Trending>
        <Popular></Popular>
        <Free></Free>
    </div>
  )
}

export default Homepage
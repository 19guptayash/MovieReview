import React from 'react'
import Trending from './Trending'
import Popular from './Popular'
import Free from './Free'

function Homepage() {
  return (
    <div>
        <Trending></Trending>
        <Popular></Popular>
        <Free></Free>
    </div>
  )
}

export default Homepage
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sort from "../Sort";

function Main() {
  return (
    <div className='flex gap-4 '>
      <Sort />
      <Outlet />
    </div>
  )
}

export default Main
import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Header = () => {
  return (
    <div className='flex justify-between px-8 items-center gap-2 bg-slate-800 h-16 font-semibold max-w-full overflow-hidden'>
      <div className='flex items-center gap-8 min-w-fit'>
          <div className='Logo hover:cursor-pointer '>
            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='logo' className='w-40'/>
          </div>
          <div className='text-gray-100 hover:cursor-pointer'>Movies</div>
          <div className='text-gray-100 hover:cursor-pointer'>TV Shows</div>
          <div className='text-gray-100 hover:cursor-pointer'>People</div>
          <div className='text-gray-100 hover:cursor-pointer'>More</div>
      </div>

      <div className='flex gap-8 items-center min-w-fit'>
          <div className='text-gray-100 text-3xl font-bold hover:cursor-pointer'>+</div>
          <div className='text-gray-100 border rounded-[4px] p-[2px] hover:text-black hover:bg-slate-50 hover:cursor-pointer'>EN</div>
          <div className='text-gray-100 hover:cursor-pointer'>Login</div>
          <div className='text-gray-100 hover:cursor-pointer'>Join TMDB</div>
          <div className='text-blue-300 text-2xl hover:cursor-pointer'>
            <FaSearch/>
          </div>
      </div>
    </div>
  )
}

export default Header
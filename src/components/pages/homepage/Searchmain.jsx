import React from 'react'

const Searchmain = () => {
  return (
    <div className="bg-blue-400 flex flex-col gap-8 px-10 py-14">
        <div className="title text-white font-bold">
          <p className="text-5xl">Welcome.</p>
          <p className='text-3xl'>Millions of movies, TV shows and people to discover.Explore now.</p>
        </div>
       <div className="w-full">
       <form className='flex items-center '>
          <input
             className='h-[40px] w-[90%] rounded-l-full px-2'
            type="text"
            placeholder="Search for a movie,tv show,person......"
          />
          <button className='px-4 py-2 ml-[-20px] rounded-full font-bold text-white bg-gradient-to-r from-green-300 to-green-400 hover:text-black'>Search</button>
        </form>
       </div>
      </div>
  )
}

export default Searchmain
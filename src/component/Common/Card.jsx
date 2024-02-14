import React from 'react'
import { THUMBNAIL } from '../../services/Constants';
import { SlOptions } from "react-icons/sl";
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';


function Card({media,borderFlag}) {
  // console.log("IN CARD ....",media);
 
  let percentage =(media.vote_average*10).toFixed();

  return (
    <div className= {`w-[200px] ${borderFlag?"border shadow-md rounded-md":""} `} >
      <div className='relative'>
      
        <Link to={`/movies/${media.id}`}>
          <img src={`${THUMBNAIL+media.poster_path}`} alt="" className=' rounded-md  w-[100%] h-[330px]' />
        </Link>
        
        <div 
          className='absolute  top-2 right-2 hover:bg-[rgb(1,180,228)] rounded-full w-[20px] h-[20px] p-1 flex justify-center items-center text-black bg-opacity-25 bg-gray-200'>
          <SlOptions></SlOptions>
        </div>

        <div className='bg-slate-800 w-[40px] h-[40px] absolute -bottom-4 left-2 rounded-full '>
          <CircularProgressbar 
            swipeable={false}
            styles={buildStyles({
              textSize: '28px',
              // Colors
              pathColor: `rgba(72, 250, 60, ${percentage / 100})`,
              textColor: '#fff',
              trailColor: '',
              backgroundColor: '#1e293b',
            })}
            value={percentage}
            text ={`${percentage==0?"NR":percentage}%`}
          >
          </CircularProgressbar>
        </div>
       
      </div>
     
      <div className='my-6 mx-4 text-slate-800'>
       
        <div>{media.original_title?media.original_title:media.original_name}</div>
      
        <div>{media.release_date?media.release_date:media.first_air_date}</div>
      </div>
    </div>
  
)}

export default Card;
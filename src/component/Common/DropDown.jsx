import React from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

function DropDown({dropData,updateData}) {
    // const handleClick = (ind)=>{
    //     useFetch("GET",dropData[ind].url,updateData);
    // }

  return (
    <div className='bg-white font-normal z-30 absolute min-w-[150px] top-12 p-1 hidden group-hover:block rounded-sm gap-y-2 border '  >
        {
            dropData.map((drop,ind)=>{
                return  <div key={ind} className=' my-2 mx-2 capitalize'>
                            <Link to={drop.to} onClick={()=>handleClick(ind)}>{drop.title}</Link>
                        </div>
            })
        }
    </div>
  )
}

export default DropDown;
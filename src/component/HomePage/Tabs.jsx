import React from 'react'
import { apiConnector } from '../../services/apiconnector'
import { useDispatch } from 'react-redux'

function Tabs({tabList,setData,updateTab}) {
    
    const dispatch = useDispatch();
    
   
    const handleTabChange = (ind)=>{

        dispatch(updateTab(ind));

        apiConnector("GET",tabList[ind].url,null,{
            Authorization:import.meta.env.VITE_BEARER_TOKEN
        })
        .then((response)=>{
            dispatch(setData(response.data.results));
        })
        .catch((err)=>{
            console.log(err);
        })
    }
   
    return (
    <div className='flex  items-center   border rounded-full  border-slate-800'>
            {
                tabList.map((tab,index)=>{
                return <div  key={index}
                        className={ `${tab.active?"bg-slate-800 text-white":" bg-transparent text-black"} px-4 py-[2px] hover:cursor-pointer rounded-full   ` }
                        onClick={()=>handleTabChange(index)}
                       >
                            {tab.title}
                        </div>
                })
            }


    </div>
  )
}

export default Tabs
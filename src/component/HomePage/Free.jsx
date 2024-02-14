import React from 'react'
import { useSelector } from 'react-redux'
import { updateFree,updateFreeTabs } from '../../redux/homeSlice';
import { MOVIES_FREE } from '../../services/Constants';
import useFetch from '../../Hooks/useFetch';
import Section from './Section';



function Free() {

    useFetch("GET",MOVIES_FREE,updateFree);
  const free = useSelector((state)=>state.home.free);
  const freeTabs = useSelector((state)=>state.home.freeTabs);
    
  console.log("IN FREEEE.............",free);
    
    return (
    <div>
        <Section 
      title={"Free To Watch"}
      data ={free}  
      tabList={freeTabs}
      updateTab = {updateFreeTabs}
      setData={updateFree}
    >

    </Section>
    </div>
  )
}

export default Free
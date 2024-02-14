import React from 'react'
import { useSelector } from 'react-redux'
import { updatePopular,updatePopularTabs} from '../../../redux/homeSlice';
import { MOVIES_POPULAR } from '../../../services/Constants';
import useFetch from '../../../Hooks/useFetch';
import Section from './Section';

function Popular() {
    useFetch("GET",MOVIES_POPULAR,updatePopular);
  const popular = useSelector((state)=>state.home.popular);
  const popularTabs = useSelector((state)=>state.home.popularTabs);
  

    return (
    <div>
    <Section 
      title={"what's Popular"}
      data ={popular}  
      tabList={popularTabs}
      updateTab = {updatePopularTabs}
      setData={updatePopular}
    >

    </Section>
  </div>
  )
}

export default Popular
import React from 'react'
import { useSelector } from 'react-redux'
import { TRENDING_URL_TODAY, TRENDING_URL_WEEK } from '../../services/Constants';
import Section from './Section';
import { updateTrending ,updateTrendingTabs } from '../../redux/homeSlice';

import useFetch from '../../Hooks/useFetch';

function Trending() {
 

  useFetch("GET",TRENDING_URL_TODAY,updateTrending);
  const trending = useSelector((state)=>state.home.trending);
  const trendingTabs = useSelector((state)=>state.home.trendingTabs);


  return (
    <div>
      <Section 
        title={"Trending"}
        data ={trending}  
        tabList={trendingTabs}
        updateTab = {updateTrendingTabs}
        setData={updateTrending}
      >

      </Section>
    </div>
  )
}

export default Trending;
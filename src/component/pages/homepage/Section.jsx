import React from 'react'
import Tabs from './Tabs'
import Card from '../../Common/Card'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Section({title,tabList,data,setData,updateTab}) {
//    console.log("IN SECTION DATA.....",data);
  
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

    return (
    <div className='w-[98%] mx-auto py-2'>
        <div className='flex items-center gap-7 my-8'>
            <div className='text-[24px] capitalize font-semibold'>{title}</div>

            <Tabs tabList={tabList} setData ={setData} updateTab={updateTab}></Tabs>
        
        </div>
        <div className=''>
            <Carousel responsive={responsive}>

            {
                data.map((ele)=>{
                    return <Card media={ele} key={ele.id}></Card>
                })
            }
            </Carousel>
        </div>

    </div>
  )
}

export default Section
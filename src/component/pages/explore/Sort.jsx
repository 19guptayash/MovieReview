import React from 'react'

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";



function Sort() {
  return (
    <div className='w-[200px]'>
      <div>

      </div>

      <form action="">
        <div>
            <div>
              <p> Filters </p>
              <div>
                <p>Availabilities</p>

                <div>
                  <input 
                    type="checkbox" 
                    name="with_watch_monetization_types" 
                    id="all"
                    value="false" />
                  <label htmlFor="all">Search all availabilities</label>
                </div>

                <div>
                  <input 
                    type="chechbox" 
                    name='with_watch_monetization_types' 
                    id='stream' 
                    value="stream" 
                  />
                  <label htmlFor="stream">Stream</label>
                </div>

                <div>
                  <input 
                    type="chechbox" 
                    name='with_watch_monetization_types' 
                    id='rent'
                    value="rent" 
                  />
                  <label htmlFor="rent">Rent</label>
                </div>

                <div>
                  <input 
                    type="chechbox" 
                    name='with_watch_monetization_types' 
                    id='free'
                    value="free" 
                  />
                  <label htmlFor="">Free</label>
                </div>

                <div>
                  <input 
                    type="chechbox" 
                    name='with_watch_monetization_types' 
                    id='add'
                    value="add" 
                  />
                  <label htmlFor="">Add</label>
                </div>

                <div>
                  <input 
                    type="chechbox" 
                    name='with_watch_monetization_types' 
                    id='buy'
                    value="buy" 
                  />
                  <label htmlFor="">Buy</label>
                </div>
              
              </div>
              {/* watch_release_type */}
              <div>
                
                <div>
                  <input 
                    type="checkbox" 
                    name="with_release_type" 
                    id="Theatrical(limited)" 
                    value="2"
                  />
                  <label htmlFor="Theatrical(limited)">Theatrical(limited)</label>
                </div>
                
                <div>
                  <input 
                    type="checkbox" 
                    name="with_release_type" 
                    id="Theatrical"
                    value="3"
                  />
                  <label htmlFor="Theatrical">Theatrical</label>
                </div>
                
                <div>
                  <input 
                    type="checkbox" 
                    name="with_release_type" 
                    id="Premiere"
                    value="1"
                  />
                  <label htmlFor="Premiere">Premiere</label>
                </div>
               
                
                <div>
                  <input 
                    type="checkbox" 
                    name="with_release_type" 
                    id="Digital"
                    value="4"
                  />
                  <label htmlFor="Digital">Digital</label>
                </div>
               

                <div>
                  <input 
                    type="checkbox" 
                    name="with_release_type" 
                    id="Physical"
                    value="5"
                  />
                  <label htmlFor="Physical">Physical</label>
                </div>

                <div>
                  <input 
                    type="checkbox" 
                    name="with_release_type" 
                    id="Tv"
                    value="6"
                  />
                  <label htmlFor="Tv">Tv</label>
                </div>

                <div>
                  <label htmlFor="from">From</label>
                  <input type="date" name="primary_release_date.gte" id="from" />
                </div>

                <div>
                  <label htmlFor="to">To</label>
                  <input type="date" name="primary_release_date.lte" id="to" />
                </div>



              </div>

            </div>
        </div>
      </form>
    </div>
  )
}

export default Sort
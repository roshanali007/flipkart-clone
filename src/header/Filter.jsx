import React from 'react'
import goback_arrow from '../assets/goback_arrow_black.svg'
import './filter.css'
import {filter} from '../data/filter.json'

function Filter() {
  return (
    <div className='filter_main'>
        <div className='filter_header'>
          <div className='filter_goback'>
              <img src={goback_arrow} alt="" className='arrow_back' />
          </div>
          <span className='filter_text'>Filters</span>
        </div>
        <div className='filter_content'>
          {
              filter.map((item)=>{    
                return <div className='filter_each'><span>{item.name}</span></div>
              })
          }
        </div>      
    </div>
  )
}

export default Filter
import React, { useState } from 'react'
import './carousel.css'




 export const Carousel = ({data}) => {
     

  return (
    <div className='carousel'>   
        {
            data.map((item, idx)=>{
                  return <img src={item.src} alt={item.alt} key={idx} className='slide'></img>
            }  
            )    
        }
         <span className='indicators'>{data.map((_,idx)=>{
            return <button key={idx} onClick={null} className='indicator'></button>
         })}</span>
    </div> 
  )
}  
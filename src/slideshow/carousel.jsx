import React, { useEffect, useRef, useState } from 'react'
import './carousel.css'




 export const Carousel = ({data}) => {
     const [slide,setSlide]=useState(0)
     const slideRef=useRef(null)
     
    const nextstate=()=>{
        setSlide(slide=== data.length-1? 0:slide+1)
    }
    const prevstate=()=>{
        setSlide(slide===0?data.length-1:slide-1)
    }
    useEffect(()=>{
    const timer = setInterval(nextstate, 3000)
     return ()=> clearInterval(timer)
    },[slide])
   
  return (
  <div className='carousel-container'>
        <div className='carousel-subcontainer'>
            <div className='carousel-head'>
                <div className='carousel-sbhead'>
                    <div className='carousel' > 
                        <div className='carousel-track' style={{transform:`translateX(-${slide*100}%)`}}>
                            
                        {   
                            data.map((item, idx)=>{
                                return <img src={item.src} alt={item.alt} key={idx} className="slide"></img>
                            }
                            )
                        }
                        
                        </div>
                    </div>
                </div>
                <span className='indicators'>{data.map((_,idx)=>{
                            return <button key={idx} onClick={()=>setSlide(idx)} className={`indicator ${slide===idx ? 'active':'indicator_notactive'}`} ></button>
                        })}</span>
            </div>
        </div>
    </div>
  )
}    
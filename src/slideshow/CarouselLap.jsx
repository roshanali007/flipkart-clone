import React, { useEffect, useState } from 'react'
import '../slideshow/carousel.css'

function CarouselLap({data}) {
    const [slide,setSlide]=useState(0)
    const nextstate=()=>{
        setSlide(slide===data.length-1? 0:slide+1)
    }
    const prevstate=()=>{
        setSlide(slide===0?data.length:slide-1)
    }
    useEffect(
        ()=>{
            const timer = setInterval(nextstate,3000);
            return ()=> clearInterval(timer)
        },[slide]
    )
  return (
    <div className='carouselLap-container'>
        <div className='carouselLap-subcontainer'>
            <div className='carouselLap-head'>
                <div className='carouselLap-sbhead'>
                    <div className='carouselLap'>
                        <div className='carouselLap-track' >
                            {
                                data.map((item,idx)=>{
                                    return <img src={item.src} alt={item.alt} key={idx} style={{transform:`translateX(-${slide*100}%)`,transition:'transform 0.3s ease-in-out'}} className='slides'/>
                                })
                            }  
                        </div>
                    </div>
                </div>
                <span className='indicators'>
                {
                data.map((_,idx)=>
                {
                    return <button key={idx} className={`indicator ${slide===idx?'active':'indicator_notactive'}`}/>
                }) 
                }
            </span>
            </div>
        </div>
    </div>
  )
}

export default CarouselLap
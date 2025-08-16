import React, { useEffect, useState } from 'react'
import '../slideshow/carousel.css'

function CarouselTablet({data}) {
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
    <div className='carouselTab-container'>
        <div className='carouselTab-subcontainer'>
            <div className='carouselTab-head'>
                <div className='carouselTab-sbhead'>
                    <div className='carouselTab'>
                        <div className='carouselTab-track'>
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

export default CarouselTablet
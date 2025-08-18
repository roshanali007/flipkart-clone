import React, { useEffect, useRef, useState } from 'react'
import './carousel.css'
 export const Carousel = ({data ,datatwo,datathree}) => {
     const [slideone,setSlideOne]=useState(0)
     const [slidetwo,setSlideTwo]=useState(0)
     const [slidethree,setSlideThree]=useState(0)
    //  const slideRef=useRef(null)
     
    const nextstate=()=>{
        setSlideOne(slideone=== data.length-1? 0:slidetwo+1)
        setSlideTwo(slidetwo=== datatwo.length-1? 0:slidetwo+1)
        setSlideThree(slidethree=== datathree.length-1? 0:slidethree+1)  
    }
    const prevstate=()=>{
        setSlideOne(slideone=== 0? data.length-1:slidetwo+1)
        setSlideTwo(slidetwo=== 0? datatwo.length-1:slidetwo+1)
        setSlideThree(slidethree=== 0? datathree.length-1:slidethree+1) 
    }
    useEffect(()=>{
    const timer = setInterval(nextstate, 3000)
     return ()=> clearInterval(timer)
    },[slideone])
    useEffect(()=>{
    const timer = setInterval(nextstate, 3000)
     return ()=> clearInterval(timer)
    },[slidetwo])
    useEffect(()=>{
    const timer = setInterval(nextstate, 3000)
     return ()=> clearInterval(timer)
    },[slidethree])
   
  return (
  <div className='carousel-container carouselTab-container'>
        <div className='carousel-subcontainer carouselTab-subcontainer'>
            <div className='carousel-head'>
                <div className='carousel-sbhead'>
                    <div className='carousel' > 
                        <div className='carousel-track carousel-img'>
                            
                        {   
                            data.map((item, idx)=>{
                                return <img src={item.src} alt={item.alt} key={idx} className="slide " style={{transform:`translateX(-${slideone*100}%)`,transition:'transform 0.3s ease-in-out'}}></img>
                            } 
                            )
                        }
                        </div>
                        <div className='carousel-track carouselTab-img'>
                            
                        {   
                            datatwo.map((item, idx)=>{
                                return <img src={item.src} alt={item.alt} key={idx} className="slide " style={{transform:`translateX(-${slidetwo*100}%)`,transition:'transform 0.3s ease-in-out'}}></img>
                            } 
                            )
                        }
                        </div>
                        <div className='carousel-track carouselLab-img'>
                            
                        {   
                            datathree.map((item, idx)=>{
                                return <img src={item.src} alt={item.alt} key={idx} className="slide" style={{transform:`translateX(-${slidethree*100}%)`,transition:'transform 0.3s ease-in-out'}}></img>
                            } 
                            )
                        }
                        </div>
                    </div>
                </div>
                <span className='indicators carousel-img'>{data.map((_,idx)=>{
                            return <button key={idx} onClick={()=>setSlideOne(idx)} className={`indicator ${slideone===idx ? 'active':'indicator_notactive'}`} ></button>
                        })}</span>
                <span className='indicators carouselTab-img'>{datatwo.map((_,idx)=>{
                    return <button key={idx} onClick={()=>setSlideTwo(idx)} className={`indicator ${slidetwo===idx ? 'active':'indicator_notactive'}`} ></button>
                })}</span>
                <span className='indicators carouselLab-img'>{datathree.map((_,idx)=>{
                    return <button key={idx} onClick={()=>setSlideThree(idx)} className={`indicator ${slidethree===idx ? 'active':'indicator_notactive'}`} ></button>
                })}</span>
            </div>
        </div>
    </div>
  )
}    
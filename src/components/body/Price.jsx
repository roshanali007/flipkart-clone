
import React, { useState } from 'react'
import './price.css'
 
function Price() {
    const pricesteps = ['Min',200,500,2000,5000,10000,'10000+']
    const [minIndex,setMinIndex]=useState(0)
    const [maxIndex,setMaxIndex]=useState(pricesteps.length - 1)        
         
    const handleMinChange=(e)=>{
        let value =Math.min(Number(e.target.value),maxIndex-1)
        setMinIndex(value)
        if(value >= maxIndex){
            setMaxIndex(value+1)
        }
    }

    const handleMaxChange =(e)=>{
        let value =Math.max(Number(e.target.value),minIndex+1)
        setMaxIndex(value)
        if(value<= minIndex){
            setMinIndex(value-1)
        }
    }
    
  return (
    <section className='price_main'>
        <div className='price_head' >
            <span className='price_head_text'>PRICE</span>
        </div>       
        <div className='price_background' >
            <div className="price_bg_div">
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_low' ></div>
            </div>                      
        </div>
        <div className="price_drag_range">
            <div className='slider_container'>
                <input type='range' min={0} max={pricesteps.length-1} step={1} value={minIndex} onChange={handleMinChange} className='thumb thumb_left'/>
                <input type='range'  min={0} max={pricesteps.length-1} step={1} value={maxIndex} onChange={handleMaxChange}  className='thumb thumb_right'/>
                <div className='slider'>
                    <div className='slider_track'/>
                    <div className='slider_range' style={{left:`${(minIndex/(pricesteps.length-1))*100}%`,width:`${((maxIndex-minIndex)/(pricesteps.length-1))*100}%`}}></div>
                </div>
            </div>
            <div className="price_dot">
                {
                    pricesteps.map((p,idx)=>(
                        <div key={p} className="price_each_dot" style={{left:`${(idx/(pricesteps.length-1))*100}%`}}>
                            <span className='dot' >.</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='price_range'>
            <div className='price_min_range'>
                <select name="" id="" onChange={handleMinChange} value={minIndex} className='min_range_select'>
                    {
                        pricesteps.map((p,idx)=>({value:p,idx})).filter((item)=>(item.idx<maxIndex)).map((item)=>(
                            <option value={item.idx} key={item.idx} className='max_range_option'>
                                {typeof item.value === 'number' ? `₹${item.value}`: item.value}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='price_to'>to</div>         
            <div className='price_max_range'>
                <select name="" id="" className='max_range_select' value={maxIndex} onChange={handleMaxChange}>
                    {
                        pricesteps.map((p,idx)=>({value:p,idx})).filter((item)=>item.idx >minIndex).map((item)=>(
                            <option value={item.idx} key={item.idx} className='max_range_option'>
                                {typeof item.value === 'number' ? `₹${item.value}`: item.value}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    </section>
  )
}

export default Price
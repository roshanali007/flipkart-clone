

import React, { useState } from 'react'
import './price.css'
 
function Price() {
    const pricesteps = [200,500,2000,5000,10000]
    const [minPrice,setMinPrice]=useState('min')
    const [maxPrice,setMaxPrice]=useState(10000)    
    const snapToStep = (value) =>{
        let closest =pricesteps[0]
        for(let step of pricesteps){
            if(Math.abs(step-value) < Math.abs(closest - value)){
                closest=step
            }
        }      
        return closest 
    }
    const handleMinChange =(e)=>{
        let value=Math.min(Number(e.target.value),maxPrice-200)
        value = snapToStep(value)
        setMinPrice(value)
    }
    const handleMaxChange=(e)=>{
        let value =Math.max(Number(e.target.value),minPrice+200)
        value =snapToStep(value)
        setMaxPrice(value)
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
                <input type='range' min={0} max={10000} step={100} value={minPrice} onChange={handleMinChange} className='thumb thumb_left'/>
                <input type='range'  min={0} max={10000} step={100} value={maxPrice} onChange={handleMaxChange}  className='thumb thumb_right'/>
                <div className='slider'>
                    <div className='slider_track'/>
                    <div className='slider_range' style={{left:`${(minPrice/10000)*100}%`,width:`${((maxPrice-minPrice)/10000)*100}%`}}></div>
                </div>
            </div>
            <div className='price_dot'>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_dot_end'>.</div>
            </div>
        </div>
        <div className='price_range'>
            <div className='price_min_range'>
                <select name="" id="" onChange={(e)=>setMinPrice(Number(e.target.value))} value={minPrice} className='min_range_select'>
                    <option value={0} className='min_range_option'>Min</option>
                    {
                        pricesteps.map((p)=>{
                          return  <option value={p} className='min_range_option' key={p} >₹{p}</option>
                        })
                    }
                </select>
            </div>
            <div className='price_to'>to</div>
            <div className='price_max_range'>
                <select name="" id="" className='max_range_select' value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))}>
                    {
                        pricesteps.map((p)=>(
                            <option value={p} key={p} className='max_range_option' >₹{p}</option>
                        ))
                    }
                    <option value={10000} className='max_range_option' >₹10000+</option>
                </select>
            </div>
        </div>
    </section>
  )
}

export default Price
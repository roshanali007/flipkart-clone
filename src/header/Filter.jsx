
import React, { useEffect, useState } from 'react'
import goback_arrow from '/images/goback_arrow_black.svg'
import './filter.css'
import {filter} from '../data/filter.json'
import { useNavigate } from 'react-router-dom'
import checkbox_notActive from '/images/checkbox.png'
import checkbox_active from '/images/checkbox_active.png'
import search_blue from '/images/search_icon_blue.webp'


function Filter() {
  const navigate =useNavigate()
  const [active,setActive]=useState(null)
  const [activeCheckbox,setActiveCheckbox]=useState([])
  useEffect(()=>{
    const priceFilter=filter.find((item)=>item.name==='Price')
    if(priceFilter){
      setActive(priceFilter.id)
    }
  },[])
  const handleclick=(id)=>{
    setActive(active===id? null:id)
  }
  const toggleCheckbox =(id)=>{
    setActiveCheckbox((prev)=>
      prev.includes(id)? prev.filter((item)=>item !== id) : [...prev,id]    
    )
  }
  return (
    <div className='filter_main'>
        <div className='filter_header'>
          <div className='filter_goback'>
              <img src={goback_arrow} alt="" className='arrow_back' onClick={()=>navigate(-1)}/>
          </div>
          <span className='filter_text'>Filters</span>
        </div>
        <div className='filter_content'> 
          <div className='filter_content_left'>
                {
              filter.map((item)=>(
                <div className='filtering' key={item.id}  onClick={()=>handleclick(item.id)}>
                  <div className={`filter_each ${active===item.id?'active_element':''} `} >
                    <span className='filter_each_item'>{item.name}</span>
                  </div>
                </div>
              ))
            }
          </div>         
         <div className='filter_content_right'>
              {
          filter.map((item)=>
                active === item.id && (
                  <div className='filter_suboptions' key={item.id} >
                    {
                      item.name ==='Brand' && (
                        <div className='search_brand'>
                            <div className='search_img_div'><img src={search_blue} alt="" className='search_blue' /></div>
                            <input type="text" placeholder='Search Brand' className='search_brand_text' />
                        </div>
                      )
                    }
                    {
                      item.suboptions.map((sub)=>(
                      <div className='filter_each_div'>
                        <div className='filter_each_section' key={sub.id} >
                          
                              <div className='filter_img' onClick={()=>toggleCheckbox(sub.id)}>
                                <img src={activeCheckbox.includes(sub.id)?checkbox_active:checkbox_notActive} alt="" className='type_checkbox'/>
                              </div>
                             <div className='filter_suboptions_item'>          
                                {sub.name}
                              </div>
                            </div>
                        </div>
                      ))
                    }    
                  </div>
                )
          )
         }
         </div>
         
        </div>  
        <div className='filter_end'>
          <div className='filter_end_left'>
              <span className='filter_products' >40,142</span>
              <span className='filter_products_text' >products found</span>
          </div>
          <div className='filter_end_right'>
              <div className='filter_apply'>Apply </div>    
          </div>
        </div>    
    </div>
  )
} 

export default Filter
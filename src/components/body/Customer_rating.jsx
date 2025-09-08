import React, { useState } from 'react'
import './type.css'
import arrow_down from '/images/filter_arrow_left.svg'
import { useFilter } from '../../header/FilterContext'
  

function Customer_rating() {
    const [active,setActive]=useState(false)
    const {activeFilters,setActiveFilters}=useFilter()
    const handleClick = (item)=>{
        if(activeFilters.includes(item)){
             setActiveFilters(activeFilters.filter((i)=>i !== item))
        }
        else{
             setActiveFilters([...activeFilters,item])
        }
    }
    const handleActiveClick=()=>{
        if(active===true){
            return setActive(false)
        }
        else{
            return setActive(true)
        }
    }
    const data=[
        {
            id:1,
            name:'4★ & above'
        },
        {
            id:2,
            name:'3★ & above'
        },
        {
            id:3,
            name:'2★ & above'
        },
        {
            id:4,
            name:'1★ & above'
        }
    ]
  return (
        <section className='type_main' >
            <div className='type_head_text' onClick={()=>handleActiveClick()} ><span className='type_head_span'>CUSTOMER RATING</span><img src={arrow_down} alt="" className={`type_head_img ${active===true?'':'rotate'}`} /></div>
            <div className={`${active===true?'type_content':'type_content_none'}`} >
                {
                    data.map((item)=>(
                        <div className='type_content_list' onClick={()=>handleClick(item.name)} key={item.id}>
                            <label htmlFor="" className='type_label' >
                                <input type="checkbox" className='checkbox_field' />
                                <div className={` checkbox ${activeFilters.includes(item.name) ? 'checkbox_active':''}`}></div>
                                <div className='type_elements' >{item.name}</div>
                            </label>
                        </div>
                    ))
                }
                    
            </div>
        </section>
  )
}

export default Customer_rating
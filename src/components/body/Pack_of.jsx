import React, { useState } from 'react'
import './type.css'
import arrow_down from '/images/filter_arrow_left.svg'
import { useFilter } from '../../header/FilterContext'
  

function Pack_of() {
    const [active,setActive]=useState(false)
    const {activeFilters,setActiveFilters}=useFilter()
    const handleClick = (item)=>{
        let filterValue = `2-${item}`
        let newFilters
        if(activeFilters.includes(filterValue)){
            newFilters= activeFilters.filter((i)=>i !== filterValue)
        }
        else{
            newFilters=[...activeFilters,filterValue]
        }
        setActiveFilters(newFilters)
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
            name:'1'
        },
        {
            id:2,
            name:'2'
        },
        {     
            id:3,
            name:'3'
        },
        {
            id:4,
            name:'4'
        },
        {
            id:5,
            name:'10 & Above'
        },
        {
            id:6,
            name:'5-10'
        }
    ]
  return (
        <section className='type_main' >
            <div className='type_head_text' onClick={()=>handleActiveClick()} ><span className='type_head_span'>PACK OF</span><img src={arrow_down} alt="" className={`type_head_img ${active===true?'':'rotate'}`} /></div>
            <div className={`${active===true?'type_content':'type_content_none'}`} >
                {
                    data.map((item)=>(
                        <div className='type_content_list' onClick={()=>handleClick(item.id)} key={item.id}>   
                            <label htmlFor="" className='type_label' >
                                <input type="checkbox" className='checkbox_field' />
                                <div className={` checkbox ${activeFilters.includes(`2-${item.id}`) ? 'checkbox_active':''}`}></div>
                                <div className='type_elements' >{item.name}</div>
                            </label>
                        </div>
                    ))
                }
                    
            </div>
        </section>
  )
}

export default Pack_of
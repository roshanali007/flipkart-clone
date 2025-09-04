import React, { useState } from 'react'
import './type.css'
import arrow_down from '/images/filter_arrow_left.svg'
import search from '/images/filter_search.svg'

function Brand() {
    const [active,setActive]=useState(false)
    const [selectedItems,setSelectedItems] = useState([])
    const handleClick = (item)=>{
        if(selectedItems.includes(item)){
            return setSelectedItems(selectedItems.filter((i)=>i !== item))
        }
        else{
            return setSelectedItems([...selectedItems,item])
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
            name:'Happilo'
        },
        {
            id:2,
            name:'WONDERLAND'
        },
        {
            id:3,
            name:'Farmley'
        },
        {
            id:4,
            name:'Tata Sampann'
        },
        {
            id:5,
            name:'OPEN SECRET'
        },
        {
            id:6,
            name:'True Elements'
        }
    ]
  return (
        <section className='type_main' >
            <div className='type_head_text' onClick={()=>handleActiveClick()} ><span className='type_head_span'>BRAND</span><img src={arrow_down} alt="" className={`type_head_img ${active===true?'':'rotate'}`} /></div>
            <div className={`${active===true?'type_content':'type_content_none'}`} >
                <div className='type_search' >
                    <img src={search} alt="" className='type_search_img' />
                    <input type="text" placeholder='Search Type' className='type_search_input' />
                </div>
                    {
                        data.map((item)=>(
                            <div className='type_content_list' onClick={()=>handleClick(item.id)} key={item.id}>
                                <label htmlFor="" className='type_label' >
                                    <input type="checkbox" className='checkbox_field' />
                                    <div className={` checkbox ${selectedItems.includes(item.id) ? 'checkbox_active':''}`}></div>
                                    <div className='type_elements' >{item.name}</div>
                                </label>
                            </div>
                        ))
                    }
                    <div className='more_elements' >
                        <span className='more_text'>1610 MORE</span>
                    </div>
                </div>
        </section>
  )
}

export default Brand
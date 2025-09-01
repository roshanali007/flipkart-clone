import React, { useEffect, useState } from 'react'
import './sort.css'
import active_radio from './LoginAssests/active_radio.webp'
import inactive_radio from './LoginAssests/inactive_radio.webp'

function Sort({onclose}) {
    const [visible,setVisible]=useState(false)
    const [active,setActive]=useState('popularity')
    const [close,setClose]=useState(false)
    useEffect(()=>{
        setTimeout(()=>setVisible(true),10)
        document.body.style.overflow='hidden'
        return ()=>{
            document.body.style.overflow='auto'
        }
    })
    const handleClose=()=>{
        setVisible(false)
        setClose(true)
        setTimeout(() => {
            onclose()
        },300);
    }
    const options=[
        {key:'popularity',label:'Popularity'},
        {key:'lowToHigh',label:'Price -- Low to High'},
        {key:'highToLow',label:'Price -- High to Low'},
        {key:'newest',label:'Newest First'}

    ]
  return (
    <div className={`sort_background ${visible && !close? 'show':'hide'}`} onClick={handleClose}>
        <div className={`sort_main ${visible && !close? 'open':'close'}`} onClick={e=>e.stopPropagation()}>
            <div className='sort_head'>SORT BY</div>
            <div className='sort_border'></div>           
            <div className='sort_content'>
                 {
                    options.map((item)=>{
                        return <div className='sort_list' key={item.key} onClick={()=>setActive(item.key)}>   
                                    <span className='sort_content'>{item.label}</span>
                                    <div className='sort_img_div'>
                                        <img src={`${active===item.key? active_radio : inactive_radio}`} alt=""  className='sort_img'/>
                                    </div>
                                </div>
                    })
                 }
            </div>
        </div>
    </div>
  )
}

export default Sort
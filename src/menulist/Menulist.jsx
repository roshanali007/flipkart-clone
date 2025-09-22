import React from 'react'
import flipkart_minute from '/images/flipkart_minute.jpg'
import '../menulist/Menulist.css'
import { useNavigate } from 'react-router-dom'

function Menulist({dataOne,dataTwo}) {
    const navigate= useNavigate()

    const handleClick=(item)=>{
        if(item.name==="Food, Health "){
            navigate("/food_health")
        }
    }

  return (
    <div className='menulist_maindiv'>
        <div className='menulist_hddiv'>
            <div className='menulist_sbdiv'>
                <div className='flipkart_minute'>
                    <img src={flipkart_minute} alt=""/>
                    <div className='text_style'>Flipkart Minutes </div>
                </div>
                {
                    dataOne.map((item)=>{
                        return <div className='moblie' key={item.id} onClick={()=>handleClick(item)}>
                                    <img src={item.src} alt={item.alt}  />
                                    <div className='text_style'>{item.name}</div>
                                </div>
                    })
                }
            </div>
            <div className='menulist_sbdiv'>
                {
                    dataTwo.map((item)=>{
                        return <div className='moblie' key={item.id}>
                                    <img src={item.src} alt={item.alt} key={item.id} />
                                    <div className='text_style'>{item.name}</div>
                                </div>
                    }
                )
                }
            </div>
        </div>
        
    </div>
  )
}

export default Menulist
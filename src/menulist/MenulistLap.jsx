import React from 'react'
import '../menulist/Menulist.css'

function MenulistLap({data,datatwo}) {
  return ( 
    <div className='menulistLap_maindiv'>
        <div className='menulistLap_hddiv'>
            <div className='menulistLap_sbdiv'>
                
                    {
                        data.map((item)=>{
                        return  <a href="" className='menulistLap'> 
                                    <div className='flipkart_minute' key={item.id}>
                                        <div className='img-container'>
                                            <div className='img-margin'>
                                            <img src={item.src} alt={item.alt} />
                                            </div>
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                </a>
                        })
                    }
                    {
                        datatwo.map((item)=>{
                        return  <a href="" className='menulistLarge'> 
                                    <div className='flipkart_minute' key={item.id}>
                                        <div className='img-container'>
                                            <div className='img-margin'>
                                            <img src={item.src} alt={item.alt} />
                                            </div>
                                        </div>
                                        <span className='droplogo'><span>{item.name}</span><span><img src={item.droplogo} alt="" /></span></span>
                                    </div>
                                </a>
                        })
                    }
            </div>                   
        </div>
    </div>
  )
}

export default MenulistLap
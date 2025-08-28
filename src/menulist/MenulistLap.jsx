import React, { useState } from 'react'
import '../menulist/Menulist.css'
import Fashion from './Fashion'
import Electronics from './Electronics'
import Beauty from './Beauty'
import Furniture from './Furniture'
import {fashion} from './dropdown.json'

function MenulistLap({data,datatwo}) {
    const [openMenu,setOpenMenu]=useState(null)
    const dropdownItems={
        Fashion:<Fashion data={fashion}/>,
        Electronics:<Electronics/>,
        Beauty:<Beauty/>,
        Furniture:<Furniture/>
    }
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
                        return  <a  className='menulistLarge' onMouseEnter={()=>dropdownItems[item.alt] && setOpenMenu(item.name)} onMouseLeave={()=>setOpenMenu(null)}> 
                                    <div className='flipkart_minute' key={item.id}>
                                        <div className='img-container'>
                                            <div className='img-margin'>
                                            <img src={item.src} alt={item.alt} />
                                            </div>
                                        </div>
                                        <span className='droplogo'>
                                            <span className={`${dropdownItems[item.alt]? 'item_name':''}`}>
                                                {item.name}
                                                {
                                                openMenu===item.name && dropdownItems[item.alt]
                                               }                                      
                                            </span>
                                            <span className='drop_logo'>
                                                <img src={item.droplogo} alt="" className='drop_down' />
                                               
                                            </span>          
                                        </span>
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
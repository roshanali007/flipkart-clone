import React from 'react'
import flipkart_minute from '../assets/flipkart_minute.jpg'
import '../menulist/Menulist.css'


function Menulist({dataOne,dataTwo}) {
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
                        return <div className='moblie' key={item.id}>
                                    <img src={item.src} alt={item.alt}  />
                                    <div className='text_style'>{item.name}</div>
                                </div>
                    })
                }
            </div>
            <div className='menulist_sbdiv'>
                {
                    dataTwo.map((item)=>{
                        return <div className='moblie'>
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
import React, { useEffect, useState } from 'react'
import './ThreeDotMore.css'
import notification from '../assets/Notification Preferences.svg'
import customerCare from '../assets/24x7 Customer Care.svg'
import advertisement from '../assets/Advertise.svg'
import download from '../assets/Download App.svg'


function ThreeDotMore({onClose}) {
    const [visible,setVisible]=useState(false)
    const [close,setClose]=useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setVisible(true)
        },10);
    },[])
    const handleclose=()=>{
        setVisible(false)
        setClose(true)
        setTimeout(() => {
            onClose()
        }, 300);
    }
  return (
    <div className='more-drawer-overlay' onClick={handleclose}>
        <div className={`more-drawer ${visible? 'open':''} `} onClick={(e)=>{e.stopPropagation()}}>
            <ul>
                <a>
                    <li>
                        <div className='more-drawer-img'>
                            <img src={notification} alt="" />
                        </div>
                        Notification Preferences
                    </li>
                </a>
                <a>
                    <li>
                        <div className='more-drawer-img'>
                            <img src={customerCare} alt="" />
                        </div>
                        24x7 Customer Care
                    </li>
                </a>
                <a>
                    <li>
                        <div className='more-drawer-img'>
                            <img src={advertisement} alt="" />
                        </div>
                        Advertise
                    </li>
                </a>
                <a>
                    <li>
                        <div className='more-drawer-img'>
                            <img src={download} alt="" />
                        </div>
                        Download App
                    </li>
                </a>
            </ul>

        </div>
        
    </div>
  )
}

export default ThreeDotMore

import React from 'react'
import './ThreeDotMore.css'
import notification from '../assets/Notification Preferences.svg'
import customerCare from '../assets/24x7 Customer Care.svg'
import advertisement from '../assets/Advertise.svg'
import download from '../assets/Download App.svg'


function ThreeDotMore() {
  return (
    <div className='more-drawer-overlay'  >
        <div className='more-drawer' >
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

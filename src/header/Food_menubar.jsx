import React from 'react'
import './food_menubar.css'
import arrow_down from '/images/more_logo.svg'

function Food_menubar() {
  return (
    <div className='food_menubar_main'>
        <div className='food_menubar_div'>
            <span className='food_menubar_element'>
                Electronics
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                TVs & Appliances
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                Men
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                Women
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                Baby & Kids
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                Home & furniture
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                Sports, Books & More
                <img src={arrow_down} alt="" className='food_menu_logo' />
            </span>
            <span className='food_menubar_element'>
                Flights
            </span>
            <span className='food_menubar_element'>
                Offer Zone
            </span>
        </div>
    </div>
  )
}

export default Food_menubar
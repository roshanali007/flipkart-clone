import React from 'react'
import './health_filter.css'
import Category from './Category'
import Type from './Type'
import Brand from './Brand'
import Container_type from './Container_type'
import Customer_rating from './Customer_rating'
import Price from './Price'
import Discount from './Discount'
import Remaining_filter from './Remaining_filter'

function Health_filter() {
  return (
    <div className=''>
        <div>
            <div>Filter</div>
            <Category/>
            <Type/>
            <Brand/>
            <Container_type/>
            <Customer_rating/>
            <Price/>
            <Discount/>
            <div className='f_assured'>
                <label htmlFor="">
                    <input type="checkbox" />
                    <div>50% or more</div>
                </label>
            </div>
            <Remaining_filter/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Health_filter
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
import Pack_of from './Pack_of'
import { useFilter } from '../../header/FilterContext'

function Health_filter() {
  const {selectedFilters}=useFilter()
  return (
    <div className='health_filter_main'>
        <div className='health_filter_div'>
            <section className='health_filter_text'><span className='health_text_span'>Filters</span></section>    
            {
              selectedFilters.map((item)=>(
                <div>
                  {
                    item.type==='price' ? <div>{item.min}-{item.max}</div> : item.type ==='brand' || 'pack_of' ? <div>{item.value}</div> : <div></div>        
                  }
                </div>
              ))
            } 
            <Category/>
            <Type/>
            <Brand />
            <Container_type/>
            <Pack_of/>
            <Customer_rating/>
            <Price/>
            <Discount/>
            <Remaining_filter/>
        </div>
    </div>
  )
}

export default Health_filter
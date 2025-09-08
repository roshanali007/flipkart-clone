import React from 'react'
import Health_filter from './health_filter'
import Health_product from './Health_product'
import './health_body.css'

function Health_body() {
  return (
    <div className='health_body'>
      <div className='health_body_main'>
        <Health_filter/>
        <Health_product/>
      </div>
    </div>
  )
}

export default Health_body
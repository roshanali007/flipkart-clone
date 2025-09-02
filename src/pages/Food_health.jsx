import React from 'react'
import Header_food from '../header/Header_food'
import Products from '../components/products/Products'
import {products} from '../components/adData/product.json'
import './food_health.css'
import Header_food_large from '../header/Header_food_large'
import Food_menubar from '../header/Food_menubar'

function Food_health() {
  return (
    <div>
        <div className='food_health_main'>
          <Header_food/>
          <Products data={products}/>
        </div>
        <div className='food_health_large'>
                <Header_food_large/>
                <Food_menubar/>
        </div>
    </div>
    
  )
}

export default Food_health
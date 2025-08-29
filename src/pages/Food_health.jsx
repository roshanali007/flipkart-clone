import React from 'react'
import Header_food from '../header/Header_food'
import Products from '../components/products/Products'
import {products} from '../components/adData/product.json'

function Food_health() {
  return (
    <div>
        <Header_food/>
        <Products data={products}/>
    </div>
  )
}

export default Food_health
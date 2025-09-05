import React from 'react'
import './productCard.css'
import ProductCard from './ProductCard'
import {card} from '../adData/productCard.json'

function ProductsLarge() {
  return (
    <div className='productLarge_main'>
        {
            card.map((item)=>(
                <ProductCard 
                key={item.id} 
                Src={item.src}
                Sponsor={item.sponsor} 
                Name={item.name} 
                quantity={item.quan} 
                rate={item.rating} 
                Count={item.count} 
                assure={item.assure}
                price={item.price}
                prevprice={item.price}
                discount={item.discount}
                />
            ))
        }
        
    </div>
  )
}

export default ProductsLarge
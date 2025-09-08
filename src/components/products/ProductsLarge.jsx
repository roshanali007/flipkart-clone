import React from 'react'
import './productCard.css'
import ProductCard from './ProductCard'
import {card} from '../adData/productCard.json'

function ProductsLarge({data}) {
  return (
    <div className='productLarge_main'>
        {
            data.map((item)=>(
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
                prevprice={item.overline}
                discount={item.discount}
                />
            ))
        }
        
    </div>
  )
}

export default ProductsLarge
import React, { useState } from 'react'
import './health_product.css'
import path_img from '/images/path_img.svg'
import ProductsLarge from '../products/ProductsLarge'

function Health_product() {
  const [activeState,setActiveState]=useState('Popularity')
  const sort=[
    {id:1,name:'Popularity'},
    {id:2,name:'Price -- Low to High'},
    {id:3,name:'Price -- High to Low'},
    {id:4,name:'Newest First'}
  ]
  return (
    <div className='health_product_main'>
      <div className='health_product_div'>
          <div className='health_product_path'>
              <div className='each_page'>  
                <span className='home_text'>Home</span>
                <img src={path_img} alt="" className='arrow_left' />
              </div>
              <div className='each_page'>
                <span className='home_text'>Food Products</span>
                <img src={path_img} alt="" className='arrow_left' />
              </div>
              <div className='each_page'>
                <span className='home_text'>Dry Fruit, Nut & Seed</span>
                <img src={path_img} alt="" className='arrow_left arrow_display' />
              </div>
          </div>
          <div className='health_product_details'>
              <p className='detailed_para'>
                Dry fruits are healthy and nutritional snacks. They are beneficial for health in several ways. 
                They help in improving digestion, memory and other metabolic functions of the body. They help in maintaining 
                glucose levels and blood pressure. You can keep these handy when you are travelling. A box of dry fruits also 
                makes for a great gift and is often given to family and friends on auspicious occasions. A usual pack will contain 
                almonds, cashews, pistachios, figs, and more. They make for a perfect gift. Nuts and seeds are also used to garnish 
                both sweet and savoury dishes. Dry fruit and nuts online price depend on the brand and the quantities available. 
                You can also choose from organic nuts and seeds, according to your requirements. You can also opt for a mix
                if you do not want to buy individual packs of nuts and fruits. Buy top quality nuts from trusted brands such as
                <a href=""> Happilo</a>  , Naturoz, <a href="">Granola</a> , Tulsi, Nutraj, Scorist, and many more. You can place 
                an order online and get your favourite packs of nuts and fruits according to your requirements. You can get these 
                delivered to your doorstep without any hassles.
              </p>
              <p className='detailed_para'><br /></p>
          </div>
          <h1 className='health_product_head'>
              Dry Fruits, Nut & Seed
          </h1>
          <span className='health_product_span'>
              (Showing 1 - 40 products of 5,965 products)
          </span>
          <div className='health_product_sort'>
              <span className='health_sort_text'>Sort By</span>
              {   
                sort.map((item)=>{
                  return <div className={`popularity_text ${activeState===item.name?'text_active':''}`} onClick={()=>setActiveState(item.name)}>{item.name}</div> 
                })
              }
          </div>
      </div>
      <ProductsLarge/>
    </div>
  )
}

export default Health_product
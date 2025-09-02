import React from 'react'
import arrow_down from '/images/green_arrow_down.svg'
import Stars from './Stars'
import './products.css'
import like_logo from '/images/love.svg'

function Products({data}) {
    console.log(data) 
  return (
    <div className='product_main'>
        <div className='product_div'>
            {
                  data.map((item)=>{
                    return <div className='left_product border_left' key={item.id}>
                
                                <div className='product_img_div'>
                                    <img src={item.src} alt=""  className='product_img'/>
                                </div>
                                <div className='product_details'>
                                    <div className='sponsor'>Sponsored</div>
                                    <div className='product_name'>{item.name}</div> 
                                    <div className='product_price'>
                                        <div className='discount'>
                                            <img src={arrow_down} alt=""  className='arrow_down' />
                                            <span className='discount_percent' >{item.discount}</span>
                                        </div>
                                        <span className='underline_text' >{item.underline}</span>
                                        <span className='product_amount'>{item.price}</span>
                                    </div>
                                    <div className='hot_deal'>
                                        Hot Deal
                                    </div>
                                    <div className='product_rate'>
                                        <Stars rating={item.rate}/>  
                                        <div className={`${item.assure_src? 'product_assure' :'' }`}>
                                        <img src={item.assure_src} alt="" className='assurance'/>   
                                        </div>
                                    </div>  
                                </div>
                                <div className='product_like'><img src={like_logo} alt="" className='like_logo' /></div>
                            </div>  
                  }) 
                }
                
                    {/* {
                        datatwo.map((item)=>{
                            return <div className='left_product' key={item.id}>
                                        <div className='product_img_div'> 
                                            <img src={item.src} alt="" className='product_img'/>
                                        </div>
                                        <div className='product_details'>
                                            <div className='sponsor'>Sponsored</div>
                                            <div className='product_name'>{item.name}</div>
                                            <div className='product_price'>
                                                <div className='discount'>
                                                    <img src={arrow_down} alt="" />
                                                    <span className='discount_percent'>{item.discount}</span>
                                                </div>
                                                <span className='underline_text'>{item.underline}</span>
                                                <span className='product_amount'>{item.price}</span>
                                            </div>
                                            <div className='hot_deal'>Hot Deal</div>
                                            <div className='product_rate'>
                                                <Stars rating={item.rate}/>
                                            </div>
                                        </div>
                                        <div className='product_like'><img src={like_logo} alt="" /></div>
                                    </div>
                        })
                    } */}
            {/* <div className='left_product'>
                <div className='product_img_div'> 
                    <img src={open_secret} alt="" className='product_img'/>
                </div>
                <div className='product_details'>
                    <div className='sponsor'>Sponsored</div>
                    <div className='product_name'>OPEN SECRET 100 % Natural Premium California Dry fruit Badam Raw Almonds</div>
                    <div className='product_price'>
                        <div className='discount'>
                            <img src={arrow_down} alt="" />
                            <span className='discount_percent'>50%</span>
                        </div>
                        <span className='underline_text'>₹1,598</span>
                        <span className='product_amount'>₹799</span>
                    </div>
                    <div className='hot_deal'>Hot Deal</div>
                    <div className='product_rate'>
                        <Stars rating={4}/>
                    </div>
                </div>
                <div className='product_like'><img src={like_logo} alt="" /></div>
            </div> */}
        </div>
    </div>
  )
}

export default Products
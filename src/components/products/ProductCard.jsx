import React from 'react'
import './productCard.css';
import tata_sampann from '/images/tata_sampann.webp'
import assurance from '/images/assurance.png'
import white_star from '/images/white_star.svg'
import like from '/images/like_button.svg'
import sponsor from '/images/sponsored.svg'

function ProductCard({id,Src,Sponsor,Name,quantity,rate,Count,assure,price,prevprice,discount}) {
  return (
    <div className='card_main' >     
        <div className='card_div' >
            <div className='card_top' >
                <div className='card_top_img' >
                    <div className='card_img_div' > 
                        <img src={Src} alt="" className='card_img'/>   
                    </div>
                </div>
                <div className='card_like_img' >
                    <img src={like} alt="" className='like_img' />
                </div>
            </div>
            <div className='card_sponsor' >
                <img src={Sponsor} alt="" className='sponsor_img' />
            </div>
            <div className='card_name' >
                <span className='card_name_text'>{Name}</span>
            </div>
            <div className='card_quantity' >
                <span className='quantity_text' >{quantity}</span>
            </div>
            <div className='card_rating' >
                <span className='rating_text'>
                    {rate}
                    <img src={white_star} alt="" className='rating_star' />
                </span>
                <span className='rating_count'>
                    ({Count})
                </span>  
            </div>
            <div className='card_assure' >
                <img src={assure} alt="" className='assure_img' />
            </div>
            <div className='card_price_tag' >
                <div className='card_price' >{price}</div>
                <div className='card_price_overline' >{prevprice}</div>
                <div className='card_discount' >{discount}</div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
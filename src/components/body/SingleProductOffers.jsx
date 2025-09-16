import React from 'react'
import './SingleProductPrice.css'
import offer_list from '/images/offer_list.webp'

function SingleProductOffers() {
    const offerlist=[
        {
            id:1,
            combo:'Combo Offer',
            buy:'Buy 4 or more items save 7%',
            seeMore:'See all products'
        },
        {
            id:2,
            combo:'Combo Offer',
            buy:'Buy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%',
            seeMore:'See all products'
        },
        {
            id:3,
            combo:'Bank Offer',
            buy:'5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter',
            seeMore:null
        },
        {
            id:4,
            combo:'Bank Offer',
            buy:'5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarter',
            seeMore:null
        }
    ]
  return (
    <div className='product_available_offers'>
        <div className='product_offers_head'>Available offers</div>
        <div className='product_offers'>
            <div className='product_offers_list'>
                {
                    offerlist.map((item)=>{
                        return <span className='product_offer' key={item.id}>
                                <img src={offer_list} alt="" className='product_offer_img'/>
                                <li className='product_offer_li'>
                                    <span className='product_offer_combo'>{item.combo}</span>
                                    <span className='product_offer_buy'>{item.buy}</span>
                                    <span className='product_offer_see'>{item.seeMore}</span>
                                    <span className='product_offer_tc'>T&C</span>
                                </li>
                            </span>
                    })
                }
            </div>
            <div className='product_offer_view'>
                <a href="" className='product_view_link'>View 8 more offers</a>
            </div>
        </div>
        <div className='product_delivery'>
            <div className='product_delivery_pin'>
                <div className='delivery_text'>
                    Delivery
                </div>
                <div className='delivery_pincode'>
                    <form action="" className='delivery_form'>
                        <input className='delivery_input_field' placeholder='Enter Delivery Pincode'></input>
                    </form>
                    <span className='delivery_pin_check'>
                        Check
                        <div className='delivery_enter_pin'>
                            Enter pincode
                        </div>
                    </span>
                </div>
            </div>
            <div className='delivery_available_pin'>
                <div className='availablity_pin'>Currently out of stock in this area</div>
            </div>
        </div>
        <div className='product_quality'>
            <span className='quality_head'>Quantity</span>    
            <ul className='quality_ul'>
                <li className='quality_li'><span className='quality_text'>200 g</span></li>
                <li className='quality_li'><span className='quality_text'>450 g</span></li>
                <li className='quality_li'><span className='quality_text'>500 g</span></li>
                <li className='quality_li'><span className='quality_text'>1 kg</span></li>
            </ul>
        </div>
        <div className='product_highlights'>
            <div className='highlights_head'>Highlights</div>
            <ul className='hightlights_ul'>
                <li className='highlights_li'>Plain</li>
                <li className='highlights_li highlights_pouch'>Comes in a Pouch</li>
            </ul>
        </div>
        <div className='product_important'>
            <div className='important_head'>Important Note</div>
            <span className='important_text'>Image/color/design may vary</span>
        </div>
    </div>
  )
}

export default SingleProductOffers
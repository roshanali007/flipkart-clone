import React from 'react'
import './Buyproduct_Body.css'
import arrow from '/images/green_arrow_down.svg'
import wowdeal from '/images/wowdeal.svg'
import dropdown from '/images/dropdown_white.svg'
import location from '/images/buybody_location.svg'
import arrow_right from '/images/arrowRight-logo.svg'
import not_delivery from '/images/not_deliverable.svg'

function Buyproduct_Body() {
    const quantity=[
        {
            id:1,
            quantity:'200 g',
            PricePerQuan:'(₹280/250g)'
        },
        {
            id:2,
            quantity:'450 g',
            PricePerQuan:'(₹280/250g)'
        },
        {
            id:3,
            quantity:'500 g',
            PricePerQuan:'(₹280/250g)'
        },
        {
            id:4,
            quantity:'1 kg',
            PricePerQuan:'(₹280/250g)'
        }
    ]
  return (
    <div className='buybody_main'>
        <div className='buybody_selected'>
            <div className='selected_text'>Selected Quantity:</div>
            <div className='selected_quantity'>200 g</div>
        </div>
        <div className='buybody_quantities'>
            <div className='quantities_div'>
                {
                    quantity.map((item)=>(
                        <div className={`quantity_div ${item.id===1?'':'quantity_pad'}`} key={item.id}>
                            <div className={`quantity ${item.id===1?'':'quantity_color'}`}>{item.quantity}</div>
                            <div className='priceper_quan'>{item.PricePerQuan}</div>
                        </div>
                    ))
                }
            </div>
            <div className='not_delivery'>Not deliverable in your location</div>
        </div>
        <div className='buybody_name'>
            <div className='buybody_product_name'>
                <div className='buybody_visit'>
                    <div className='buybody_happilo'>Happilo</div>
                    <div className='buybody_store'>Visit store</div>
                </div>
                <div className='buybody_brand'>Premium Naturals Californian Almonds Almonds (1 x 200 g)</div>
            </div>
        </div>
        <div className='buybody_price'>
            <div className='big_billion'>Big Billion Days Price</div>
            <div className='bigbillion_price'>
                <div className='bigbillion_discount'>
                    <img src={arrow} alt="" className='discount_img'/>
                    <div className='discount_percent'>19%</div>
                </div>
                <div className='bigbillion_overline'>275</div>
                <div className='bigbillion_rate'>₹224</div>
            </div>
        </div>
        <div className='buybody_offers'>
            <div className='buybody_wowdeal'>
                <div className='wowdeal'>
                    <div className='wowdeal_div'><img src={wowdeal} alt="" /></div>
                    <div className='wowdeal_buy'>Buy at ₹197</div>
                    <div className='wowdeal_dropdown'><img src={dropdown} alt="" /></div>
                </div>
            </div>
            <div className='apply_offer'>
                <div className='apply_offer_text'>Apply offers for maximum savings!</div>
            </div>
        </div>
        <div className='buybody_delivery'>
            <div className='delivery_head'>Delivery details</div>
            <div className='delivery_details'>
                <div className='delivery_location'>
                    <div className='delivery_location_div'>
                        <img src={location} alt="" />
                        <div className='location_text'>Location not set</div>
                    </div>
                    <div className='delivery_select'>
                        <div className='select_text'>Select delivery location</div>
                        <img src={arrow_right} alt="" />
                    </div>
                </div>
                <div className='not_deliverable'>
                    <div className='not_deliverable_div'>
                        <img src={not_delivery} alt="" />
                        <div className='not_deliverable_text'>Not deliverable at your location</div>
                    </div>
                </div>
                <div className='supercomnet_main'>
                    <div className='supercomnet_div'>
                        <img src="" alt="" />
                        <div className='supercomnet_img'></div>
                    </div>
                    <div className='supercomnet_details'>
                        <div className='supercomnet_rate'></div>
                        <img src="" alt="" />
                        <div className='supercomnet_dot'></div>
                        <div className='supercomnet_text'></div>                     
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buyproduct_Body
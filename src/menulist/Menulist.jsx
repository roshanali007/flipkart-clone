import React from 'react'
import flipkart_minute from '../assets/flipkart_minute.jpg'
import moblie from '../assets/mobile.jpg'
import food_health from '../assets/food_health.png'
import beauty from '../assets/beauty.png'
import Appliances from '../assets/Appliances.png'
import genz_trends from '../assets/genz_trend.jpg'
import furniture from '../assets/furniture.jpg'
import sports from '../assets/sports.jpg'
import super_coin from '../assets/super_coin.jpg'
import next_gen from '../assets/nextGen.jpg'
import grocery from '../assets/grocery.jpg'
import fashion from '../assets/fashion.jpg'
import travel from '../assets/travel.jpg'
import home from '../assets/home.jpg'
import electronics from '../assets/electronics.jpg'
import two_wheeler from '../assets/two_wheeler.jpg'
import toys_baby from '../assets/toys_baby.png'
import auto_acc from '../assets/auto_acc.png'
import sell_phone from '../assets/sell_phone.jpg'
import more from '../assets/more.jpg'
import '../menulist/Menulist.css'


function Menulist() {
  return (
    <div className='menulist_maindiv'>
        <div className='menulist_hddiv'>
            <div className='menulist_sbdiv'>
                <div className='flipkart_minute'>
                    <img src={flipkart_minute} alt=""/>
                    <div className='text_style'>Flipkart Minutes </div>
                </div>
                <div className='moblie'>
                    <img src={moblie} alt="" />
                    <div className='text_style'>Mobiles </div>
                </div>
                <div className='food_health moblie'>
                    <img src={food_health} alt="" />
                    <div className='text_style'>Food, Health </div>
                </div>
                <div className='beauty moblie'>
                    <img src={beauty} alt="" />
                    <div className='text_style'>Beauty  </div>
                </div>
                <div className='Appliances moblie'>
                    <img src={Appliances} alt="" />
                    <div className='text_style'>Appliances  </div>
                </div>
                <div className='genz_trends moblie'>
                    <img src={genz_trends} alt="" />
                    <div className='text_style'>GenZ Trends </div>
                </div>
                <div className='furniture moblie'>
                    <img src={furniture} alt="" />
                    <div className='text_style'>Furniture </div>
                </div>
                <div className='sports moblie'>
                    <img src={sports} alt="" />
                    <div className='text_style'>Sports </div>
                </div>
                <div className='super_coin moblie'>
                    <img src={super_coin} alt="" />
                    <div className='text_style'>SuperCoin </div>
                </div>
                <div className='next_gen moblie'>
                    <img src={next_gen} alt="" />
                    <div className='text_style'>NextGen  </div>
                </div>
            </div>
            <div className='menulist_sbdiv'>
                <div className='grocery moblie'>
                    <img src={grocery} alt=""/>
                    <div className='text_style'>Grocery</div>
                </div>
                <div className='moblie'>
                    <img src={fashion} alt="" />
                    <div className='text_style'>Fashion</div>
                </div>
                <div className='food_health moblie'>
                    <img src={travel} alt="" />
                    <div className='text_style'>Travel</div>
                </div>
                <div className='beauty moblie'>
                    <img src={home} alt="" />
                    <div className='text_style'>Home</div>
                </div>
                <div className='Appliances moblie'>
                    <img src={electronics} alt="" />
                    <div className='text_style'>Electronics</div>
                </div>
                <div className='genz_trends moblie'>
                    <img src={two_wheeler} alt="" />
                    <div className='text_style'>2 Wheeler</div>
                </div>
                <div className='furniture moblie'>
                    <img src={toys_baby} alt="" />
                    <div className='text_style'>Toys, Baby..</div>
                </div>
                <div className='sports moblie'>
                    <img src={auto_acc} alt="" />
                    <div className='text_style'>Auto Acc.</div>
                </div>
                <div className='super_coin moblie'>
                    <img src={sell_phone} alt="" />
                    <div className='text_style'>Sell Phone</div>
                </div>
                <div className='next_gen moblie'>
                    <img src={more} alt="" />
                    <div className='text_style'>More</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Menulist
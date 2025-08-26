import React from 'react'
import go_back_arrow from '../assets/goback_arrow_black.svg'
import flipfoodlogo from '../assets/flipfoodlogo.png'
import { Link } from 'react-router-dom'
import searchIcon from '../assets/search-icon.svg'
import cart from '../assets/Cart.svg'
import './header_food.css'
import sort from '../assets/sort.svg'
import filter from '../assets/filter.svg'
import toprated from '../assets/toprated.webp'
import discount from '../assets/discount.png'  
import premium from '../assets/premium.png'
import price_range from '../assets/price_range.png'

function Header_food() {
  return (
    <>
        <div className='food_main'>
            
            <Link to={'/flipkart-clone'} className='food_go_back same_style_food'>
                <img src={go_back_arrow} alt="" className='arrow_back' />
            </Link>
            
            <a href="" className='food_flip' >
                <img src={flipfoodlogo} alt=""  className='flip_food_img' />
            </a>
            <div className='health_div'>
                <h1>Health Care</h1>
            </div>
            <a href="" className='food_search same_style_food' >
                <img src={searchIcon} alt="" className='search_logos' />
            </a>
            <a href="" className='food_cart same_style_food' ><img src={cart} alt="" className='search_logos'/></a>
            <a href="" className='food_login same_style_food' ><span>Login</span></a>
        </div>
        <div className='sort_filter'>
            <div className='sort'>
                <img src={sort} alt="" />
                <div className='sort_text'>Sort</div>
            </div>
            <div className='border_sort_filter'></div>
            <div className='filter'>
                <img src={filter} alt="" />
                <div className='filter_text'>Filter</div>
            </div>
        </div>
        <div className='shortcut_arrange'>
            <div className='shortcut_div'>
                <div className='toprated_main'>
                    <div className='toprated_div'>
                        <div className='toprated_logo'>
                            <img src={toprated} alt="" />
                        </div>
                        <div className='toprated_text'>
                            <span>Top Rated</span>
                        </div>
                    </div>
                </div>
                <div className='toprated_main'>
                    <div className='toprated_div'>
                        <div className='toprated_logo'>
                            <img src={discount} alt="" />
                        </div>
                        <div className='toprated_text'>
                            <span>30% or more</span>
                        </div>
                    </div>
                </div>
                <div className='toprated_main'>
                    <div className='toprated_div'>
                        <div className='toprated_logo'>
                            <img src={premium} alt="" />
                        </div>
                        <div className='toprated_text'>
                            <span>Premium Brands</span>
                        </div>
                    </div> 
                </div>
                <div className='toprated_main'>
                    <div className='toprated_div'>
                        <div className='toprated_logo'>
                            <img src={price_range} alt="" />
                        </div>
                        <div className='toprated_text'>
                            <span>Rs. 401 - Rs. 500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header_food
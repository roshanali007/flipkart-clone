import React, { useState } from 'react'
import './header.css'
import flipkart from '../assets/Flipkart.svg'
import searchIcon from '../assets/search-Icon-light.svg'
import arrowDown from '../assets/Chevron.svg'
import loginLogo from '../assets/Login.svg'
import cartLogo from '../assets/Cart.svg'
import sellerLogo  from '../assets/Become a Seller.svg'
import moreLogo from '../assets/Dropdown with more help links.svg'
import ThreeDotMore from './ThreeDotMore'

function HeaderDesk() {
    const [search,setSearch]=useState('')
    const [openmore,setOpenMore]=useState(false)
  return (
    <div className='header-div-desk'>
        <div className='header-sbdiv-desk'>
            <div className='header-child-div'>
                <header className='header-class'>
                    <div className='header-right'>
                        <div className='flipkart-div'>
                            <a href=""><img src={flipkart} alt="" /></a>
                        </div>
                        <div className='search-div'>
                            <form action="">
                                <div className='search-sub-div'>
                                    <button>
                                        <img src={searchIcon} alt="" />
                                    </button>
                                    <div className='search-input'>
                                        <input type='text' value={search} onChange={(e)=>{
                                            setSearch(e.target.value)
                                            }} placeholder='Search for Products, Brands and More'/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='header-left'>
                        <div className='login-hddiv'>
                            <div className='login-div'>
                                <a href="" className='login-link'>
                                    <img src={loginLogo} alt="" />
                                    <span>Login</span>
                                </a>
                                <img src={arrowDown} alt="" className='arrow-down' />
                            </div>
                        </div>
                        <div className='cart-hddiv'>
                            <div className='cart-div'>
                                <a href="" className='cart-img'>
                                    <img src={cartLogo} alt="" />
                                </a>
                                <a href="" className='cart'>Cart</a>
                            </div>
                        </div>
                        <div className='seller-hddiv'>
                            <div className='seller-div'>
                                <a href="" className='seller-img'>
                                    <img src={sellerLogo} alt="" />
                                </a>
                                <a href="" className='become-a-seller'>Become a Seller</a>
                            </div>
                        </div>
                        <div className='threedot-hd'>
                            <div className='threedot-hddiv'>
                                <div>
                                    <div>
                                        <div className='threedot-div'>
                                            <a  className='border-div'><img src={moreLogo} alt="" onClick={()=>{setOpenMore(true)}} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                             openmore && <ThreeDotMore onClose={()=>setOpenMore(false)}/>
                        }
                    </div>
                </header>
            </div>
        </div>
    </div>
  )
}

export default HeaderDesk
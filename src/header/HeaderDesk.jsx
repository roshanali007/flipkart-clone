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
    <header>
    <div className='header-desk'>
        <div className='desk-flip-logo'>
            <a href='/'><img src={flipkart} alt="" /></a>
        </div>
        <div className='search-head'>
            <form className='desk-search'>
                <div className='div-search'>
                    <button className='search-icon'>
                        <a>
                            <img src={searchIcon}></img>
                        </a>
                    </button>
                    <div className='search-field'>
                        
                            <input type='text' value={search} onChange={(e)=>{
                                setSearch(e.target.value)
                            }} placeholder='Search for Products, Brands and More'/>
                        
                    </div>
                </div>
            </form>
        </div>
        <div className='desk-login-profile'>
            <div className='desk-login-sbhead'>
                <div className='desk-login'>
                        <a className='profile-logo'>
                            <img src={loginLogo} alt="" />
                            <span>Login</span>
                        </a>
                        <a className='drop'><img src={arrowDown} alt="" /></a>
                </div>
            </div>
            <div className='desk-kart'>
                <a href="/" className='cart-img'><img src={cartLogo} alt="" /></a>
                <a href="" className='cart'>Cart</a>
            </div>
            <div className='desk-seller'>
                <a href="/" className='seller-img'><img src={sellerLogo} alt="" /></a>
                <a href="" className='become-a-seller'>Become a Seller</a>
            </div>
            <div className='desk-more'>
                <a >
                    <div className={`border-div ${openmore? 'active':'' }`}>
                        <img src={moreLogo} alt="" onClick={()=>{setOpenMore(true)}}/>
                    </div>
                </a>
            </div> 
            {
            openmore && <ThreeDotMore onClose={()=>setOpenMore(false)}/>
             }
        </div>
        
        
    </div>
    </header>
  )
}

export default HeaderDesk
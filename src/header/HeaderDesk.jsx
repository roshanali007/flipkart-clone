import React, { useState } from 'react'
import './header.css'
import flipkart from '../assets/Flipkart.svg'
import searchIcon from '../assets/search-Icon-light.svg'
import arrowDown from '../assets/Chevron.svg'
import loginLogo from '../assets/Login.svg'
import cartLogo from '../assets/Cart.svg'
import sellerLogo  from '../assets/Become a Seller.svg'
import moreLogo from '../assets/Dropdown with more help links.svg'

function HeaderDesk() {
    const [search,setSearch]=useState('')
  return (
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
                        
                            <input type='text' value='' onChange={(e)=>{
                                setSearch(e.target.value)
                            }} placeholder='Search for Products, Brands and More' autoComplete='off'/>
                        
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
                <a href="/"><img src={cartLogo} alt="" /></a>
            </div>
            <div className='desk-seller'>
                <a href="/"><img src={sellerLogo} alt="" /></a>
            </div>
            <div className='desk-more'>
                <a href="/"><img src={moreLogo} alt="" /></a>
            </div> 
        </div>
        
    </div>
  )
}

export default HeaderDesk
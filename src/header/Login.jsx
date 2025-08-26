import React from 'react'
import './Login.css'
import profile from './LoginAssests/profile-52e0dc.svg'
import flipplus from './LoginAssests/flipplus.svg'
import orders from './LoginAssests/orders-bfe8c4.svg'
import wishlist from './LoginAssests/wishlist.svg'
import rewards from './LoginAssests/rewards-fbd212.svg'
import giftcards from './LoginAssests/giftCard-bd87e1.svg'

function Login({data}) {
  return (
    <div className='login_more_main'>
        <div className='login_more_div'>
            <ul>
                <a href="" className='sign_up'>
                    <li>
                        <span>New customer?</span>
                        <span className='sign_up_text' >Sign Up</span>
                    </li>
                </a>
                {
                    data.map((item)=>{
                        return <a href="" className='login_more_content' key={item.id}>
                                    <li>
                                        <div className='login_more_logo'><img src={item.src} alt={item.alt} /></div>
                                        <span>{item.name}</span>
                                    </li>
                                </a>
                    })
                }   
            </ul>
        </div>
    </div>
  )
}

export default Login
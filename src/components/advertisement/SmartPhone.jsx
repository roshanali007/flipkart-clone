import React from 'react'
import '../advertisement/Advertisement.css'


function SmartPhone({data}) {
  return (
    <div className='smartphone-maindiv'>
        <div className='smartphone-hddiv'>
            <div className='smartphone-heading'><div className='smartphone_hd_pad'>Best Deals on Smartphones</div></div>
            <div className='smartphone-overflow'>
                <div className='smartphone-collection'>
                    {
                        data.map((item)=>{
                            return <a href="">
                                        <div className='smartphone'>
                                            <div className='smartphone-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='smartphone-brand'>{item.name}</div>
                                            <div className='price-tag'>{item.price}</div>
                                        </div>
                                    </a>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmartPhone
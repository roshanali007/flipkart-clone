import React from 'react'
import '../advertisement/Advertisement.css'

function HomeEquipment({data}) {
  return (
    <div className='homeEquipment-maindiv'>
        <div className='homeEquipment-hddiv'>
            <div className='homeEquipment-heading'><div className='homeEquipment_hd_pad'>Home</div></div>
            <div className='homeEquipment-overflow'>
                <div className='homeEquipment-collection'>
                    {
                        data.map((item)=>{
                            return <a href="">
                                        <div className='homeEquipment'>
                                            <div className='homeEquipment-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='homeEquipment-brand'>{item.name}</div>
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

export default HomeEquipment
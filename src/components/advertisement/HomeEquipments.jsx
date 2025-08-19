import React from 'react'
import '../advertisement/Advertisement.css'

function HomeEquipment({data,datatwo}) {
  return (
    <div className='homeEquipment-maindiv'>
        <div className='homeEquipment-hddiv'>
            <div className='homeEquipment-heading'>
                <div className='homeEquipment_hd_pad'>Home</div>
                <div className='homeequipment_hd_lg'>Beauty, Food, Toys & more</div>
            </div>
            <div className='homeEquipment-overflow'>
                <div className='homeEquipment-collection'>
                    {
                        data.map((item)=>{
                            return <a href="" className='homeLap'>
                                        <div className='homeEquipment'key={item.id}>
                                            <div className='homeEquipment-img'>
                                                <img src={item.src} alt={item.alt} /> 
                                            </div>
                                            <div className='homeEquipment-brand'>{item.name}</div>
                                            <div className='price-tag'>{item.price}</div>
                                        </div>
                                    </a>
                        })
                    }
                    {
                        datatwo.map((item)=>{
                            return <a href="" className='homeLarge'>
                                        <div className='homeEquipment'key={item.id}>
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
import React from 'react'

function Offer_third({data}) {
  return (
    <div className='offerthree_main'>
        <div className='offerthree_hddiv'>
              {
                data.map((item)=>{
                  return <div className='offerthree_div'>
                            <a href="">
                              <div className='offerthree_img' key={item.id}>
                                <img src={item.src} alt={item.alt} />
                              </div>
                            </a>
                          </div>
                })
              }   
        </div>
    </div>
  )
}

export default Offer_third
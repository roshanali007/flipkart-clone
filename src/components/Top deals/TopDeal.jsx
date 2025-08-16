import React from 'react'
import TopDealbg from '../compAssets/top_deal.webp'
import '../Top deals/topDeal.css'

function TopDeal({data}) {
  return (
    <div className='topdeal-main'>
        <div className='topdeal-sbdiv'>
            <div className='topdeal-upsec'>
                <div className='topdeal-updiv'>
                    <div className='todealbg-div'>
                        <img src={TopDealbg} alt=""  className='topdeal-bg'/>
                    </div>
                    <div className='topdeal-heading'>
                        <div className='heading-margin'>
                            Upcoming: Top deals
                        </div>
                    </div>
                </div>
            </div>
            <div className='topdeal-downsec'>
                <div className='topdeal-downdiv'>
                     <div className='topdeal-div'>
                        <div className='topdeal-content'>
                            {
                                data.map((item)=>{
                                    return <div className='headphones' key={item.id}>
                                                <a href=""><img src={item.src} alt={item.alt} /></a>
                                                
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='topdeal-sibdiv'>
                    <div className='topdeal-borderbtm'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )   
}

export default TopDeal
import React from 'react'
import TopDealbg from '../compAssets/top_deal.webp'
import headphones from '../compAssets/headphone.jpg'
import edge from '../compAssets/edge.jpg'
import hp from '../compAssets/hp.jpg'
import tv from '../compAssets/tv.jpg'
import puma from '../compAssets/puma.jpg'
import dry_fruits from '../compAssets/dry_fruits.jpg'
import tresemme from '../compAssets/tresemme.jpg'
import cookers from '../compAssets/cookers.jpg'
import '../Top deals/topDeal.css'

function TopDeal() {
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
                            <div className='headphones'>
                               <a href=""><img src={headphones} alt="" /></a> 
                                
                            </div> 
                            <div className='edge headphones'>
                                <a href=""><img src={edge} alt="" /></a>
                                
                            </div>
                            <div className='hp headphones'>
                                <a href=""><img src={hp} alt="" /></a>
                                
                            </div>
                            <div className='premium headphones'>
                                <a href=""><img src={tv} alt="" /></a>
                                
                            </div>
                            <div className='puma headphones'>
                                <a href=""><img src={puma} alt="" /></a>
                            
                            </div>
                            <div className='dry headphones'>
                                <a href=""><img src={dry_fruits} alt="" /></a>
                                
                            </div>
                            <div className='tresemme headphones'>
                                <a href=""><img src={tresemme} alt="" /></a>
                                
                            </div>
                            <div className='pressure headphones'>
                                <a href=""><img src={cookers} alt="" /></a>
                                
                            </div>
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
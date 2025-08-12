import React from 'react'
import '../jackpotdeals/JackpotDeal.css'
import wrogn from '../compAssets/wrogn.png'
import jackpotbg from '../compAssets/jackpot.jpg'
import redtape from '../compAssets/redtapejackpot.jpg'
import unizone from '../compAssets/unizone.jpg'
import redtapewhite from '../compAssets/redtapewhite.jpg'
import gasStove from '../compAssets/gasStove.jpg'
import biotique from '../compAssets/biotique.jpg'
import kurlon from '../compAssets/kurlon.jpg'
import beds from '../compAssets/beds.png'
import skincare from '../compAssets/skincare.jpg'


function JackpotDeal() {
  return (
    <div className='jackpot-main'>
            <div className='jackpot-sbdiv'>
                <div className='jackpot-upsec'>
                    <div className='jackpot-updiv'>
                        <div className='jackpotbg-div'>
                            <img src={jackpotbg} alt=""  className='jackpot-bg'/>
                        </div>
                        <div className='jackpot-heading'>
                            <div className='heading-margin'>
                                Upcoming: Top deals
                            </div>
                        </div>
                    </div>
                </div>
            <div className='jackpot-downsec'>
                <div className='jackpot-downdiv'>
                        <div className='jackpot-div'>
                        <div className='jackpot-content'>
                            <div className='headphones'>
                                <a href=""><img src={wrogn} alt="" /></a> 
                                
                            </div> 
                            <div className='edge headphones'>
                                <a href=""><img src={redtapewhite} alt="" /></a>
                                
                            </div>
                            <div className='hp headphones'>
                                <a href=""><img src={unizone} alt="" /></a>
                                
                            </div>
                            <div className='premium headphones'>
                                <a href=""><img src={redtape} alt="" /></a>
                                
                            </div>
                            <div className='puma headphones'>
                                <a href=""><img src={gasStove} alt="" /></a>
                            
                            </div>
                            <div className='dry headphones'>
                                <a href=""><img src={biotique} alt="" /></a>
                                
                            </div>
                            <div className='tresemme headphones'>
                                <a href=""><img src={kurlon} alt="" /></a>
                                
                            </div>
                            <div className='pressure headphones'>
                                <a href=""><img src={beds} alt="" /></a>
                                
                            </div>
                            <div className='pressure headphones'>
                                <a href=""><img src={skincare} alt="" /></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='jackpot-sibdiv'>
                    <div className='jackpot-borderbtm'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JackpotDeal
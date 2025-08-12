import React from 'react'
import blockbusterbg from '../compAssets/blockbuster.webp'
import boult from '../compAssets/boult.jpg'
import qled from '../compAssets/qled.png'
import moto from '../compAssets/moto.jpg'
import realme from '../compAssets/realme.jpg'
import washing from '../compAssets/washing.jpeg'
import powerbank from '../compAssets/powerbank.jpg'
import vivo from '../compAssets/vivo.jpg'
import pendrive from '../compAssets/pendrive.jpg'
import '../blockbuster/blockbuster.css'


function Blockbuster() {
  return (
    <div className='blockbuster-main'>
            <div className='blockbuster-sbdiv'>
                <div className='blockbuster-upsec'>
                    <div className='blockbuster-updiv'>
                        <div className='blockbusterbg-div'>
                            <img src={blockbusterbg} alt=""  className='blockbuster-bg'/>
                        </div>
                        <div className='blockbuster-heading'>
                            <div className='heading-margin'>
                                Upcoming: Top deals
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blockbuster-downsec'>
                    <div className='blockbuster-downdiv'>
                         <div className='blockbuster-div'>
                            <div className='blockbuster-content'>
                                <div className='headphones'>
                                   <a href=""><img src={boult} alt="" /></a> 
                                    
                                </div> 
                                <div className='edge headphones'>
                                    <a href=""><img src={qled} alt="" /></a>
                                    
                                </div>
                                <div className='hp headphones'>
                                    <a href=""><img src={moto} alt="" /></a>
                                    
                                </div>
                                <div className='premium headphones'>
                                    <a href=""><img src={realme} alt="" /></a>
                                    
                                </div>
                                <div className='puma headphones'>
                                    <a href=""><img src={washing} alt="" /></a>
                                
                                </div>
                                <div className='dry headphones'>
                                    <a href=""><img src={powerbank} alt="" /></a>
                                    
                                </div>
                                <div className='tresemme headphones'>
                                    <a href=""><img src={vivo} alt="" /></a>
                                    
                                </div>
                                <div className='pressure headphones'>
                                    <a href=""><img src={pendrive} alt="" /></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blockbuster-sibdiv'>
                        <div className='blockbuster-borderbtm'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Blockbuster
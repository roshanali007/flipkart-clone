import React from 'react'
import '../featured brands/FeatureBrands.css'
import galaxy from '../compAssets/galaxy.jpeg'
import grwm from '../compAssets/grwm.jpeg'
import summerSale from '../compAssets/summerSale.jpeg'
import premiumTws from '../compAssets/premiumTws.jpeg'
import derma from '../compAssets/derma.jpeg'
import boat from '../compAssets/boat.jpeg'
import boult from '../compAssets/boultwatch.jpeg'
import colgate from '../compAssets/colgate.jpeg'
import redtape from '../compAssets/redtape.jpeg'
import addidas from '../compAssets/addidas.jpeg'



function FeatureBrands() {
  return (
    <div className='feature-main'>
        <div className='feature-sbdiv'>
            <div className='heading'>
                <div className='heading-margin'>
                    Featured Brands
                </div>
            </div>
            <div className='feature-content'>
                <div className='feature-div'>
                    <div className='feature-element'>
                        <a href="">
                            <img src={galaxy} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={grwm} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={summerSale} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={premiumTws} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={derma} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={boat} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={boult} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={colgate} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={redtape} alt="" />
                        </a> 
                    </div>
                    <div className='feature-element'>
                        <a href="">
                            <img src={addidas} alt="" />
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureBrands
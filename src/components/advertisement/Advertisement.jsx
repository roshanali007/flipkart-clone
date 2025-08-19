import React from 'react'
import poco from '../compAssets/poco.jpeg'
import '../advertisement/advertisement.css'
import SmartPhone from './SmartPhone'
import HomeEquipment from './HomeEquipments'
import {smartphone,electronics} from  '../adData/smartphone.json'
import {homeEquipment,items} from '../adData/homeEquipment.json'

function Advertisement() {
  return ( <div>
    <div className='ad-maindiv'>
        <div className='ad-div'>
            <a href="">
                <div className='poco-mobile'><img src={poco} alt="" /></div>
                <div className='poco-tablet'><img src="https://rukminim2.flixcart.com/fk-p-flap/880/200/image/1ef56d71e3623af1.jpeg?q=60" alt="" /></div>
            </a>
        </div>
    </div>
    <SmartPhone data={smartphone} datatwo={electronics} />
    <HomeEquipment data={homeEquipment} datatwo={items} />
    </div>
  )
}

export default Advertisement
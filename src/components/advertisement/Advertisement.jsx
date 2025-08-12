import React from 'react'
import poco from '../compAssets/poco.jpeg'
import '../advertisement/advertisement.css'

function Advertisement() {
  return (
    <div className='ad-maindiv'>
        <div className='ad-div'>
            <a href="">
                <div className='poco'><img src={poco} alt="" /></div>
            </a>
        </div>
    </div>
  )
}

export default Advertisement
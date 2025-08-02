import React, { useEffect, useState } from 'react'
 import '../navbar/nav.css'

function Nav({onclose}) {
    const [visible,setVisible]= useState(false)
    const [close,setClose]= useState(false)
    useEffect(()=>{
      setTimeout(()=>setVisible(true),10)
    },[])
    const handleClose=()=>{
      setVisible(false)
      setClose(true)
      setTimeout(()=>{
        onclose()
      },300)
    }
  return (
    <div className='drawer-overlay' onClick={handleClose}>
      <div className={`drawer ${visible? 'open': ''}`} onClick={e=>e.stopPropagation()}>
        <ul className='drawer-list'>
          <li>home</li>  
          <li>home</li>
          <li>home</li>
          <li>home</li> 
          <li>home</li>
        </ul>
      </div>
        
    </div>
  )
}

export default Nav
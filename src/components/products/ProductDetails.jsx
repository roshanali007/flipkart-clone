import React from 'react'

function ProductDetails() {
     const imageList=[
        {
            id:1,
            src:"/images/imageList_1happilo.jpeg"
        },
        {
            id:2,
            src:"/images/imageList_2happilo.webp"
        },
        {
            id:3,
            src:"/images/imageList_3happilo.webp"
        },
        {
            id:3,
            src:"/images/imageList_4happilo.jpeg"
        },
        {
            id:3,
            src:"/images/imageList_5happilo.webp"
        },
        {
            id:3,
            src:"/images/imageList_6happilo.jpeg"
        }
     ]
  return (
    <div className='product_details_main'>
        <div className='product_details_div'>
            <div className='product_details_left'>
                <div className='product_images'>
                    <div className='product_imgList'>
                        <ul className='product_img_ul'>
                            {
                                imageList.map((item)=>{
                                    return <li className='product_img_li'>
                                                <div className='product_img_main'>
                                                    <div className='product_img_div'>
                                                        <img src={item.src} alt="" className='product_img' />
                                                    </div>
                                                </div>
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='product_selected_img'>
                        <div className='img_render_div'>
                            <img src="/images/imageList_1happilo.jpeg" alt="" className=''/>   
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='product_details_right'>  

            </div>
        </div>
    </div>
  )
}

export default ProductDetails
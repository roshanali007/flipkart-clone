import React from 'react'
import './price.css'

function Price() {
  return (
    <section className='price_main'>
        <div className='price_head' >
            <span className='price_head_text'>PRICE</span>
        </div>
        <div className='price_background' >
            <div className="price_bg_div">
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_high' ></div>
                <div className='price_bg_low' ></div>
            </div>
        </div>
        <div className="price_drag_range">
            <div className='price_drag'>
                <div className='drag_left_circle'><div className='price_circle'></div></div>
                <div className='drag_right_circle'><div className="price_circle"></div></div>
                <div className='drag_center_line'></div>
                <div className='drag_center'></div>
            </div>
            <div className='price_dot'>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_each_dot'>.</div>
                <div className='price_dot_end'>.</div>
            </div>
        </div>
        <div className='price_range'>
            <div className='price_min_range'>
                <select name="" id="" className='min_range_select'>
                    <option value="Min" className='min_range_option' >Min</option>
                    <option value="200" className='min_range_option' >₹200</option>
                    <option value="500" className='min_range_option' >₹500</option>
                    <option value="2000" className='min_range_option' >₹2000</option>
                    <option value="5000" className='min_range_option' >₹5000</option>
                    <option value="10000" className='min_range_option' >₹10000</option>
                </select>
            </div>
            <div className='price_to'>to</div>
            <div className='price_max_range'>
                <select name="" id="" className='max_range_select'>
                    <option value="200" className='max_range_option' >₹200</option>
                    <option value="500" className='max_range_option' >₹500</option>
                    <option value="2000" className='max_range_option' >₹2000</option>
                    <option value="5000" className='max_range_option' >₹5000</option>
                    <option value="10000" className='max_range_option' >₹10000</option>
                    <option value="max" className='max_range_option' >₹10000+</option>
                </select>
            </div>
        </div>
    </section>
  )
}

export default Price
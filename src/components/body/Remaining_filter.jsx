import React from 'react'

function Remaining_filter() {
  return (
    <div>
        <div>
            <div>OFFERS</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>Special Price</div>
            </label>
            <label htmlFor="">
                <input type="checkbox" />
                <div>Buy More, Save More</div>
            </label>
        </div>
        <div>
            <div>ORGANIC</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>Yes</div>
            </label>
            <label htmlFor="">
                <input type="checkbox" />
                <div>No</div>
            </label>
        </div>
        <div>
            <div>NEW ARRIVALS</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>New Arrivals</div>
            </label>
        </div>
        <div>
            <div>VALUE PACKS</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>Value Packs</div>
            </label>
        </div>
        <div>
            <div>FESTIVAL_MARKER</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>2</div>
            </label>
            <label htmlFor="">
                <input type="checkbox" />
                <div>4</div>
            </label>
        </div>
        <div>
            <div>GST INVOICE AVAILABLE</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>GST Invoice Available</div>
            </label>
        </div>
        <div>
            <div>AVAILABILITY</div>
            <label htmlFor="">
                <input type="checkbox" />
                <div>Include Out of Stock</div>                        
            </label>
        </div>
    </div>
  )
}

export default Remaining_filter
import React, { useMemo } from 'react'
import arrow_down from '/images/green_arrow_down.svg'
import Stars from './Stars'
import './products.css'
import like_logo from '/images/love.svg'
import { useFilter } from '../../header/FilterContext'

                                   
function Products({data}) {
    console.log(data) 
    const {activeFilters}=useFilter()
    const filteredProducts = useMemo(() => {
    let result = [...data];
    
          
    const grouped= activeFilters.reduce((acc,filters)=>{
        const [pid,sid] = filters.split('-')
        if (!acc[pid]) acc[pid]=[]
        acc[pid].push(Number(sid))
        return acc
    },{}) //doubt               
    if (grouped[1]){
        result = result.filter((p) =>{
            const price =parseInt(p.price.replace(/₹|,/g, ""))
            return (
                (grouped[1].includes(1) && price <= 200) ||
                (grouped[1].includes(2) && price >= 201 && price <= 500) ||
                (grouped[1].includes(3) && price >= 501 && price <= 2000) ||
                (grouped[1].includes(4) && price >= 2001 && price <= 5000) ||
                (grouped[1].includes(5) && price >= 5001 && price <= 10000) ||
                (grouped[1].includes(6) && price >= 10001 )
            )
        })
    }
   if (grouped[3]){
    const brands = {
            1: "Happilo",
            2: "WONDERLAND",
            3: "Farmley",
            4: "Tata Sampann",
            5: "OPEN SECRET",
            6: "True Elements",
            7: "41 foods",
            8: "Nutraj",
            9: "DAILYHERBS",
            10: "Kitchen Jungle",
            11: "PRODUCER",
            12: "FreshoCartz",
            13: "lila dry fruits",
            14: "BalSo",
            15: "Temperado",
            16: "Avlokan",
        }
        result=result.filter((p)=>{
           return grouped[3].some((subId)=>{
               return p.name.toLowerCase().includes(brands[subId].toLowerCase())
            })
        })
   }
   if(grouped[4]){
    result =result.filter((p)=>
    grouped[4].some((subId)=>{
        if (subId === 1) return p.rate >= 4
        if (subId === 1) return p.rate >= 3
        if (subId === 1) return p.rate >= 2
        if (subId === 1) return p.rate >= 1
        return true
    })
    )
   }
   return result 

  }, [activeFilters,data]);
  
  return (
     <div className='product_main'>
      <div className='product_div'>
        {filteredProducts.map((item) => (
          <div className='left_product border_left' key={item.id}>
            <div className='product_img_div'>
              <img src={item.src} alt="" className='product_img' />
            </div>
            <div className='product_details'>
              <div className='sponsor'>Sponsored</div>
              <div className='product_name'>{item.name}</div>
              <div className='product_price'>
                <div className='discount'>
                  <img src={arrow_down} alt="" className='arrow_down' />
                  <span className='discount_percent'>{item.discount}</span>
                </div>
                <span className='underline_text'>{item.underline}</span>
                <span className='product_amount'>{item.price}</span>
              </div>
              <div className='hot_deal'>Hot Deal</div>
              <div className='product_rate'>
                <Stars rating={item.rate} />
                <div className={`${item.assure_src ? 'product_assure' : ''}`}>
                  {item.assure_src && <img src={item.assure_src} alt="" className='assurance' />}
                </div>
              </div>
            </div>
            <div className='product_like'>
              <img src={like_logo} alt="" className='like_logo' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
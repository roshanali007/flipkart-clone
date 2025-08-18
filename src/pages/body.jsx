import React from 'react'
import Advertisement from '../components/advertisement/Advertisement'
import { Carousel } from '../slideshow/carousel'
import {slides,slidesTab,slidesLap} from '../data/carouselData.json'
import Menulist from '../menulist/Menulist'
import TopDeal from '../components/Top deals/TopDeal'
import Blockbuster from '../components/blockbuster/blockbuster'
import FeatureBrands from '../components/featured brands/FeatureBrands'
import JackpotDeal from '../components/jackpotdeals/JackpotDeal'
import MenulistLap from '../menulist/MenulistLap'
import Offers from '../components/offers/Offers'
import {menulist,menulistTwo} from '../data/menulistData.json'
import {blockbuster,jackpot,topdeal} from '../data/deals.json'
import {featurebrands,featurelap} from '../data/featurebrands.json'
function Body() { 
  return (
    <div className='body-container'>
        <MenulistLap/>
        <Carousel data={slides} datatwo={slidesTab} datathree={slidesLap} />
        <Menulist dataOne={menulist} dataTwo={menulistTwo}/>
        <Advertisement/>
        <TopDeal data={topdeal} />
        <Offers/>
        <Blockbuster data={blockbuster}/>
        <FeatureBrands data={featurebrands} datatwo={featurelap} />
        <JackpotDeal data={jackpot}/>
        
    </div>
  )
}

export default Body
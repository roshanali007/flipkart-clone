import React from 'react'
import Advertisement from '../components/advertisement/Advertisement'
import { Carousel } from '../slideshow/carousel'
import {slides} from '../data/carouselData.json'
import Menulist from '../menulist/Menulist'
import TopDeal from '../components/Top deals/TopDeal'
import Blockbuster from '../components/blockbuster/blockbuster'
import FeatureBrands from '../components/featured brands/FeatureBrands'
import JackpotDeal from '../components/jackpotdeals/JackpotDeal'

function Body() {
  return (
    <div className='body-container'>
        <Carousel data={slides}></Carousel>
        <Menulist></Menulist>
        <Advertisement></Advertisement>
        <TopDeal></TopDeal>
        <Blockbuster></Blockbuster>
        <FeatureBrands></FeatureBrands>
        <JackpotDeal></JackpotDeal>
    </div>
  )
}

export default Body
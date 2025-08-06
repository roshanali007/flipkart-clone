import React from 'react'
import Header from '../header/Header'
import { Carousel } from '../slideshow/carousel'
import {slides} from '../data/carouselData.json'
import HeaderDesk from '../header/HeaderDesk'

function Home() {
  return (
    <div>
        <Header></Header>
        <HeaderDesk></HeaderDesk>
        <Carousel data={slides}></Carousel>
    </div>
  ) 
} 

export default Home
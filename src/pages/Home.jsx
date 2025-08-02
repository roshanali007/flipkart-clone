import React from 'react'
import Header from '../header/Header'
import { Carousel } from '../slideshow/carousel'
import {slides} from '../data/carouselData.json'

function Home() {
  return (
    <div>
        <Header></Header>
        <Carousel data={slides}></Carousel>
    </div>
  )
}

export default Home
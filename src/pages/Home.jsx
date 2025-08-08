import React from 'react'
import Header from '../header/Header'
import { Carousel } from '../slideshow/carousel'
import {slides} from '../data/carouselData.json'
import HeaderDesk from '../header/HeaderDesk'
import './Home.css'

function Home() {
  return (
    <div>
        <Header></Header>
        <HeaderDesk></HeaderDesk>
        <div className='body'>
            <Carousel data={slides}></Carousel>
        </div>
    </div>
  ) 
} 

export default Home
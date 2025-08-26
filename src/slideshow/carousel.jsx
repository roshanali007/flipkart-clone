
import React, { useEffect, useRef, useState } from 'react'
import './carousel.css'        

export const Carousel = ({ data, datatwo, datathree, datafour }) => {
  const [slideone, setSlideOne] = useState(0)
  const [slidetwo, setSlideTwo] = useState(0)
  const [slidethree, setSlideThree] = useState(0)
  const [slidefour, setSlideFour] = useState(0)
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false)
  const scrollTimeout = useRef(null)

  const carouselOneRef = useRef(null)
  const carouselTwoRef = useRef(null)
  const carouselThreeRef = useRef(null)
  const carouselFourRef = useRef(null)


  const manuelscroll = (e, type) => {
    if (isProgrammaticScroll || scrollTimeout.current) return

    scrollTimeout.current = setTimeout(() => {
      const scrollLeft = e.target.scrollLeft
      const slideWidth = e.target.clientWidth
      const index = Math.round(scrollLeft / slideWidth)

      if (type === 'one') setSlideOne(index)
      if (type === 'two') setSlideTwo(index)
      if (type === 'three') setSlideThree(index)
      if (type === 'four') setSlideFour(index)

      scrollTimeout.current = null
    }, 50) 
  }

  const nextstate = () => {
    const nextOne = slideone === data.length - 1 ? 0 : slideone + 1
    const nextTwo = slidetwo === datatwo.length - 1 ? 0 : slidetwo + 1
    const nextThree = slidethree === datathree.length - 1 ? 0 : slidethree + 1
    const nextFour = slidefour === datafour.length - 1 ? 0 : slidefour + 1

    setSlideOne(nextOne)
    setSlideTwo(nextTwo)
    setSlideThree(nextThree)
    setSlideFour(nextFour)
  }

  const prevstate = () => {
    const prevOne = slideone === 0 ? data.length - 1 : slideone - 1
    const prevTwo = slidetwo === 0 ? datatwo.length - 1 : slidetwo - 1
    const prevThree = slidethree === 0 ? datathree.length - 1 : slidethree - 1
    const prevFour = slidefour === 0 ? datafour.length - 1 : slidefour - 1

    setSlideOne(prevOne)
    setSlideTwo(prevTwo)
    setSlideThree(prevThree)
    setSlideFour(prevFour)
  }

  
  const scrollToSlide = (ref, index) => {
    if (ref.current) {
      setIsProgrammaticScroll(true)
      ref.current.scrollTo({
        left: index * ref.current.clientWidth,
        behavior: 'smooth',
      })
    }
  }
       
  useEffect(() => {
    scrollToSlide(carouselOneRef, slideone)
  }, [slideone])

  useEffect(() => {
    scrollToSlide(carouselTwoRef, slidetwo)
  }, [slidetwo])

  useEffect(() => {
    scrollToSlide(carouselThreeRef, slidethree)
  }, [slidethree])

  useEffect(() => {
    scrollToSlide(carouselFourRef, slidefour)
  }, [slidefour])

  useEffect(() => {
    const timer = setInterval(nextstate, 3000)
    return () => clearInterval(timer)
  }, [slideone, slidetwo, slidethree, slidefour])


  useEffect(() => {
    const resetFlag = () => setIsProgrammaticScroll(false)

    const refs = [carouselOneRef, carouselTwoRef, carouselThreeRef, carouselFourRef]
    refs.forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener('scrollend', resetFlag)
      }
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener('scrollend', resetFlag)
        }
      })        
    }
  }, [])

  return (
    <div className="carousel-container carouselTab-container">
      <div className="carousel-subcontainer carouselTab-subcontainer">
        <div className="carousel-head">
          <div className="carousel-sbhead">
            <button className="left_btn" onClick={prevstate}>
              <span className="left_arrow"></span>
            </button>
            <button className="right_btn" onClick={nextstate}>
              <span className="right_arrow"></span>
            </button>
            <div className="carousel">
              <div className="carousel-track carousel-img" ref={carouselOneRef} onScroll={(e) => manuelscroll(e, 'one')}>
                {data.map((item, idx) => (
                  <img src={item.src} alt={item.alt} key={idx} className="slide" />
                ))}
              </div>
              <div className="carousel-track carouselTab-img" ref={carouselTwoRef} onScroll={(e) => manuelscroll(e, 'two')}>
                {datatwo.map((item, idx) => (
                  <img src={item.src} alt={item.alt} key={idx} className="slide" />
                ))}
              </div>
              <div className="carousel-track carouselLab-img" ref={carouselThreeRef} onScroll={(e) => manuelscroll(e, 'three')}>
                {datathree.map((item, idx) => (
                  <img src={item.src} alt={item.alt} key={idx} className="slide" />
                ))}
              </div>
              <div className="carousel-track carouselLarge-img" ref={carouselFourRef} onScroll={(e) => manuelscroll(e, 'four')}>
                {datafour.map((item, idx) => (
                  <img src={item.src} alt={item.alt} key={idx} className="slide" />
                ))}
              </div>
            </div>
          </div>
          <span className="indicators carousel-img">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideOne(idx)}
                className={`indicator ${slideone === idx ? 'active' : 'indicator_notactive'}`}
              />
            ))}
          </span>
          <span className="indicators carouselTab-img">
            {datatwo.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideTwo(idx)}
                className={`indicator ${slidetwo === idx ? 'active' : 'indicator_notactive'}`}
              />
            ))}
          </span>
          <span className="indicators carouselLab-img">
            {datathree.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideThree(idx)}
                className={`indicator ${slidethree === idx ? 'active' : 'indicator_notactive'}`}
              />
            ))}
          </span>
          <span className="indicators carouselLarge-img">
            {datafour.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideFour(idx)}
                className={`indicator ${slidefour === idx ? 'active' : 'indicator_notactive'}`}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}    
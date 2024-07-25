import React,{useRef} from 'react'
import './Experience.css'
import { WORK_EXPERIENCE } from '../utils/data'
import ExpCard from './ExpCard/ExpCard'
import Slider from 'react-slick'

const Experience = () => {
  const slideRef = useRef()
  const settings = {
      dots:false,
      infinite: true,
      speed: 500,
      slidesToShow : 1,
      arrows:false,
      responsive:[
          {
              breakpoint: 769,
              settings:{
                  slidesToShow:1,
                  slidesToScroll:1
              }
          }
      ]
  }

  const nextSlide = () => slideRef.current.slickNext()
  const prevSlide = () => slideRef.current.slickPrev()
    return (
        <section className='exp-container' id="experience">
          <h5>Work Experience</h5>
          <div className='exp-content'>
            <div className='arrow-right' onClick={nextSlide}>
               <span className='material-symbols-outlined'>chevron_right</span>
            </div>
            <div className='arrow-left' onClick={prevSlide}>
               <span className='material-symbols-outlined'>chevron_left</span>
            </div>
            <Slider ref={slideRef} {...settings}>
            {
                WORK_EXPERIENCE.map((item) => {
                    return(
                        <ExpCard
                          key={item?.title}
                          details={item}
                        />
                    )
                })
            }
            </Slider>
          </div>
        </section>
    )
}

export default Experience
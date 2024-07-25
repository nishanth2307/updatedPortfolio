import React from "react";
import './Hero.css'
import ReactIcon from '../../assets/react.png'
import HeroImage from '../../assets/hero_image.jpg'
import BannerImage from '../../assets/hero_image_banner.jpg'
import JavascriptIcon from '../../assets/javascript.png'
import CSSIcon from '../../assets/Css.png'
import HTMLIcon from '../../assets/html.png'
const Hero = () => {
    return(
      <section className="hero-container" id="home">
         <div className="hero-content">
             <h2>Hi I am Nishanth N</h2>
             <p>Passionate Frontend Developer | Transforming ideas into Seamless and 
                visually stunning Websites!!
             </p>
         </div>
         <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={ReactIcon} alt=""></img>
                </div>
                <img src={BannerImage} alt=""></img>
            </div>
            <div>
                <div className="tech-icon">
                    <img src={HTMLIcon} alt=""></img>
                </div>
                <div className="tech-icon">
                    <img src={CSSIcon} alt=""></img>
                </div>
                <div className="tech-icon">
                    <img src={JavascriptIcon} alt=""></img>
                </div>
            </div>
         </div>
      </section>
    )
}

export default Hero
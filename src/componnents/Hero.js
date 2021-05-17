import Categories from "./hero/Categories"
// import Slider from "./hero/Slider"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import imageSlide from "../assets/images/slider1.jpg"
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    imageSlide,
    imageSlide,
    imageSlide
];


const Hero = () => {
    return (
        <div className="hero">
            <Categories/>
            <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
        </div>
    )
}

export default Hero

import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import image from './images/image.jpg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';



const slideImages = [
    {url: image},
    {url: image1},
    {url: image2},
  ];


const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="image" style={{'backgroundImage': `url(${slideImage.url})`}}></div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;
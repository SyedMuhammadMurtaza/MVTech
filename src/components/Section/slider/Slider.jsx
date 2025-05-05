'use client';

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/css/slider.css"
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 900, min: 300 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "/images/projects/E-Commerce-App.jpg",
      
  },
   //Second image
   {
    url:"/images/projects/Aveuyor-Display.png"
  },
   //Second image
   {
    url:"/images/projects/Display-Rustic2.jpg"
  },
  {
    url:
      "/images/projects/Workout-App.jpg"
  },
  {
    url:"/images/projects/Dreamscape-Display2.jpg"
  },

  {
    url:"/images/projects/Dynamo-Display.jpg"
 },
 
  
 {
    url:"/images/projects/Webagency-Display.jpg"  
   },
  //Second image url
  {
    url:
      "/images/projects/Health-App.jpg"
  },
 
 {
    url:
      "/images/projects/Fitness-App.jpg"
  },


//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
//   }
];
const Slider = () => {
  return (
    
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;

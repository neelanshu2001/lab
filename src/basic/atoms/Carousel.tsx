import React, { Component ,useState} from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const Carousel =({CarouselData})=>  {
  /*constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };*/
    const [curSlide,setSlide]=useState(0);
  
    return (
      <div className="mt-8">
        <div className="max-w-lg h-72 flex overflow-hidden relative">
          {CarouselData.map((slide, index) => {
            return (
              <img
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={
                  index === curSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }
              />
            );
          })}
        </div>
      </div>
    );
  
}
export default Carousel;


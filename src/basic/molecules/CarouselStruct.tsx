import React, { Component,useState,useEffect } from "react";
//import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const CarouselData=[
    {
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];
const Carousel=()=> {
    const [current,setSlide]=useState({slide:0,
    paused:false});
  /*constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }*/
   useEffect(()=>{
    /*setInterval(() => {
        if (current.paused === false) {
          let newSlide =
            current.slide === CarouselData.length - 1
              ? 0
              : current.slide + 1;
          setSlide({...current , slide: newSlide });
        }
      }, 3000);*/
   })
 

  const nextSlide = () => {
    let newSlide =
     current.slide === CarouselData.length - 1
        ? 0
        : current.slide + 1;
    setSlide({...current, slide: newSlide });
  };

  const prevSlide = () => {
    let newSlide =
      current.slide === 0
        ? CarouselData.length - 1
        : current.slide - 1;
    setSlide({ ...current, slide: newSlide });
  };

  const setCurrentSlide = (index:number) => {
    setSlide({ ...current,slide: index });
  };


    return (
      <div className="mt-8 transition-all duration-1000">{//not working currently
      }
        <div className="relative max-w-lg h-72 flex overflow-hidden  ">
          <AiOutlineLeft
            onClick={prevSlide}
            className=" absolute left-0 top-2/4 text-3xl  text-white cursor-pointer"
          />

         {/* <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === current.slide
                      ? "block w-full h-auto object-cover"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                   setSlide({...current, paused: true });
                  }}
                  onMouseLeave={() => {
                    setSlide({ ...current, paused: false });
                  }}
                />
              );
            })}
          </Swipe>*/}

          <div className="absolute w-full flex justify-center bottom-0 ">
            {CarouselData.map((element, index) => {
              return (
                <div
                  className={
                    index === current.slide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={nextSlide}
            className=" absolute right-0 top-2/4 text-3xl my-auto text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }


export default Carousel;
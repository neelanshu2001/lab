import React from 'react';
import NewsCard from '../atoms/NewsCard';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Marquee from 'react-fast-marquee';
const NewsBox:FC<{news:Array<object>}>=({news})=>{
    return (
        <div>
        <div className="hidden md:flex relative group  transition-all duration-1000  overflow-x-hidden ">
        {/* <div className='flex flex-row animate-marquee group-hover:animate-none'>
            {
            news.map((p,idx)=>{
                return(
                <NewsCard p={p} key={idx}/>
                )
            }) }
        </div>
        <div className='flex flex-row animate-marquee2 group-hover:animate-none absolute inset-0   '>
            {
            news.map((p,idx)=>{
                return(
                <NewsCard p={p} key={idx}/>
                )
            }) }
        </div> */}
        <Marquee pauseOnHover={true} speed={25}>
        { news.map((p,idx)=>{
                return(
                <NewsCard p={p} key={idx}/>
                )
            }) }
        </Marquee>
    </div>
    <div className="block  md:hidden ">
    <Carousel autoPlay={true}  infiniteLoop={true} interval={1500} showStatus={false} showThumbs={false} showIndicators={false} showArrows={true} >
            
            {news.map((p, idx) => {
               return(
                <div className="flex flex-auto justify-center" key={idx}>
                <NewsCard p={p} />
                </div>
                )
            })}
            </Carousel>
            </div>
    </div>

    );
}

export default NewsBox;
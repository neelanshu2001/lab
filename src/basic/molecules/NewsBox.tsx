import React from 'react';
import NewsCard from '../atoms/NewsCard';
const NewsBox=({news})=>{
    return (
        <div className="relative group  transition-all duration-1000  overflow-x-hidden ">
        <div className='flex flex-row animate-marquee group-hover:animate-none'>
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
        </div>
    </div>
    );
}

export default NewsBox;
import React from 'react';
import ResearchCard from '../atoms/ResearchCard';

const ResearchBox=({research})=>{
    return (
        <div className='flex flex-col w-5/6 mx-auto shadow-lg'>
            {
                research.length>0 &&
                   research.map((item,idx)=>{
                    return(
                        <ResearchCard item={item} key={idx}/>
                    )
                   }) 
            }
            
        </div>
    );
}

export default ResearchBox;
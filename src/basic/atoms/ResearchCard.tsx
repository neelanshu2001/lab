import React, { FC } from 'react';
import logo from '../../assets/logo.png'
const ResearchCard:FC<{item:any}>=({item})=>{
    return (
      
             <div className="w-full lg:max-w-full flex">
                <div className=" h-28 md:h-48 lg:h-auto w-24 md:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
                    <img src={logo}/>
                </div>
                <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 md:p-4 flex flex-col justify-between leading-normal">
                    <div className="m-2 md:mb-8">
                   
                    <div className="text-gray-900 font-bold text-xs md:text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700  md:h-auto text-[0.65rem] md:text-base text-start">{item.description}</p>
                    </div>
                    
                </div>
                </div>
        
    );
}

export default ResearchCard;
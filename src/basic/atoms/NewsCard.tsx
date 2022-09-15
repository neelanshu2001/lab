import React, { FC } from 'react';
import logo from '../../assets/logo.png'
const NewsCard:FC<{p:any}>=({p})=> {
   // console.log('Hello');
    return (
 
            <div className="max-w-sm w-4/6 md:w-full lg:max-w-full lg:flex mx-2 md:mx-4">
                
                <div className="border-r border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 md:p-4 flex flex-col justify-between leading-normal">
                <img className='h-28 md:h-36 max-h-36 w-28 md:w-56 h-36 max-w-xs' src={p.image} />
                    <div className="mb-4 md:mb-8">
                    <div className="text-gray-900 font-bold text-xs md:text-sm lg:text-lg mb-1 md:mb-2">{p.title}</div>
                    <div className="text-xs md:text-sm lg:text-sm">{p.description}</div>
                     </div>
                    <div className="flex items-center">
                   
                    <div className="text-xs lg:text-sm text-end">
                        {/* <div className="text-gray-900 leading-none">{p.user}</div> */}
                        <div className="hidden lg:block text-xs text-gray-600">{p.date}</div>
                    </div>
                    </div>
                </div>
            </div>

    ) ;
}

export default NewsCard;
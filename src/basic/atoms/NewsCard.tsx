import React from 'react';
import logo from '../../assets/logo.png'
const NewsCard=({p})=> {
   // console.log('Hello');
    return (
 
            <div className="max-w-sm w-full lg:max-w-full lg:flex mx-4">
                
                <div className="border-r border border-gray-400  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <img src={logo}/>
                    <div className="mb-8">
                    <div className="text-gray-900 font-bold text-lg mb-2">Can coffee make you a better developer?</div>
                     </div>
                    <div className="flex items-center">
                   
                    <div className="text-sm text-start">
                        <div className="text-gray-900 leading-none">{p.user}</div>
                        <div className="text-xs text-gray-600">{p.date.toString()}</div>
                    </div>
                    </div>
                </div>
            </div>

    ) ;
}

export default NewsCard;
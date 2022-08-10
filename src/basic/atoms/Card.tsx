import React, { FC } from 'react';
import PropTypes from 'prop-types';
import cardImage from '../../assets/1.jpg'


const Card:FC<{name:string,description:string}>=({name,description})=> {
   // console.log(name);
    return (
        <div className='hover:cursor-pointer hover:opacity-95 hover:text-blue-400 w-3/12'>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl">
        <img className="w-full h-24 lg:h-48 " src={cardImage} alt="Sunset in the mountains" />
        <div className="px-2 md:px-6 pt-2 md:pt-4">
            <div className="font-bold text-sm md:text-xl mb-2 font-sans ">{name}</div>
            <div className='pb-2 sm:hidden lg:block '>
            <div className="hidden md:block truncate text-xs md:text-sm text-start font-serif  px-3 py-1 bg-gray-100 rounded-lg  md:max-h-screen">
            {description}
            </div>

            </div>
        </div>
        
        </div>
        </div>
    );
}

export default Card;
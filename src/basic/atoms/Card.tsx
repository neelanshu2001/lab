import React from 'react';
import PropTypes from 'prop-types';
import cardImage from '../../assets/1.jpg'


const Card=({name,description})=> {
   // console.log(name);
    return (
        <div className='hover:cursor-pointer hover:opacity-95 hover:text-blue-400 w-3/12'>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl">
        <img className="w-full lg:h-48 sm:h-40" src={cardImage} alt="Sunset in the mountains" />
        <div className="px-6 pt-4">
            <div className="font-bold text-xl mb-2 font-sans ">{name}</div>
            <div className='pb-2 sm:hidden lg:block '>
            <div className=" text-sm text-start font-serif  px-3 py-1 bg-gray-100 rounded-lg ">
            {description}
            </div>

            </div>
        </div>
        
        </div>
        </div>
    );
}

export default Card;
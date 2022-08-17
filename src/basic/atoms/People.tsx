import React,{FC} from 'react';
import Student1 from '../../assets/Student1.jpg';
import Student2 from '../../assets/Student2.jpg';
import Student3 from '../../assets/Student3.jpg'
const People:FC<{data:any}>=({data}) =>{
   
    // const image=require('../../assets')+data.image+'.jpg';
    
    return (
        <div className='flex flex-col shadow-md p-1 md:p-2  rounded-md'>
            <img src={data.image} className='h-28 md:h-48 w-32 md:w-48 mx-auto object-fill md:object-fill'/>
            <div className='font-sans text-sm md:text-base lg:text-lg text-center font-semibold mt-2 pb-2'>{data.name}</div>
        </div>
    );
}

export default People;
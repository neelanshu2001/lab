import React from 'react';
import Navbar from '../basic/molecules/Navbar';
import bg from '../assets/bg_student.jpg'
const Students=()=> {
    return (
        <div className=''>
            
           <Navbar /> 
           <div className='object-contain relative'>
             <img src={bg} className="-mt-40 object-cover brightness-75 h-[80vh] w-full contrast-125 " />
             
             <div className=' absolute top-1/2 left-0 w-full'>
                 <div className={` text-center  font-bold text-white overflow-hidden  transition-all delay-100 duration-[1800ms]  text-4xl md:text-5xl lg:text-6xl  `} >
                     Students
                 </div>
                 </div>
             </div>
          
         
         </div>
    );
}

export default Students;
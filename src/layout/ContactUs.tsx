import React from 'react';
import Navbar from '../basic/molecules/Navbar';
import bg from '../assets/bg.jpg'
const ContactUs=()=>{
    return (
        <div className=''>
            
           <Navbar /> 
           <div className='object-contain relative'>
             <img src={bg} className="-mt-60 object-cover brightness-75 h-[90vh] w-full contrast-125 " />
             
             <div className=' absolute top-1/2 left-0 w-full'>
                 <div className={` text-center  font-bold text-white overflow-hidden  transition-all delay-100 duration-[1800ms]   p-4 text-4xl md:text-5xl lg:text-6xl  `} >
                    Contact Us
                 </div>
                 </div>
             </div>
          
         
         </div>
    );
}

export default ContactUs;
import React, { useEffect, useState } from 'react';
import Navbar from '../basic/molecules/Navbar';
import bg from '../assets/bg.jpg';
import Loading from '../basic/molecules/Loading';
const navigation = [
  { name: 'Home', href: '/', current: false},
  {name:'News',href:'/',current:false},
  { name: 'Research', href: '/', current: false },
  { name: 'Publications', href: '/publications', current: false },
  {name:'Students',href:'/students',current:false},
  //{name:'Positions',href:'/positions',current:false},
  { name: 'Contact Us', href: '/contact', current: true },
]

const ContactUs=()=>{
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1400)
  },[])
    return (
      <div className="">
        {!loading ?
        (<div className='overflow-hidden'>
            
           <Navbar navigation={navigation}/> 
           <div className='object-contain relative '>
             <img src={bg} className="relative -mt-60 object-cover brightness-75 h-[90vh] w-full contrast-125  overflow-hidden" />
             
             <div className=' absolute top-1/2 left-auto w-full '>
                 <div className={`text-center font-bold text-white overflow-hidden  transition-all delay-100 duration-[1800ms]   p-4 text-4xl md:text-5xl lg:text-6xl  `} >
                    Contact Us
                 </div>
                 <p className="text-white text-center text-justify p-2 w-9/12 lg:w-2/3 mx-auto leading-relaxed text-base my-4 text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde, voluptatibus nemo molestiae iure, repudiandae quaerat ipsam, labore sed dolorem nisi odit at esse ullam suscipit quidem necessitatibus aut modi.
            </p>
         
                
                 </div>
             </div>
             <div className="text-gray-700  mx-auto">
        <div className="container px-5 mb-4 mx-auto ">
        <div className="flex  mt-5 justify-center mx-4 lg:ml-12">
           <div className="grow-0 hidden lg:block border-2 p-2 rounded-lg bg-opacity-50">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.0025008325335!2d75.92298991768891!3d22.529083257293262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962ef871120d36d%3A0xeb447c044aeddf06!2sPOD%201D%2C%20Chromium!5e0!3m2!1sen!2sin!4v1660394067512!5m2!1sen!2sin" 
            title="map" scrolling="no" frameBorder="0"
            width="600" height="100%"
            className="grow-0 " 
            loading="lazy" 
          />
            </div>
         <div className="">
         {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde, voluptatibus nemo molestiae iure, repudiandae quaerat ipsam, labore sed dolorem nisi odit at esse ullam suscipit quidem necessitatibus aut modi.
            </p> */}
         
          <div className="bg-blue-100 lg:w-3/4 md:w-3/4 mx-auto border-2 p-6 shadow-md rounded-lg">
         
            <div className="flex flex-wrap -m-2">
              <div className="px-1 lg:p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 lg:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="px-1 lg:p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 lg:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <p className=" mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
                </div>
              </div>
              <div className="-mt-6 lg:p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="bg-white w-full  rounded border border-gray-300 focus:border-indigo-500 h-28 md:h-32 text-base outline-none text-gray-700 lg:py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-1 md:p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-base md:text-base">
                  Send Message
                </button>
              </div>
              </div>
              {/* <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">eelab@iiti.ac.in</a>
                <p className="leading-normal my-5">
                  Applied Electromagnetism Lab
                  <br />
                  IIT Indore
                </p>
                
              </div> */}
            </div>
          </div>
        </div>
        </div>
      </div>
         </div> ): <Loading/>
        }
         </div>
    );
}

export default ContactUs;





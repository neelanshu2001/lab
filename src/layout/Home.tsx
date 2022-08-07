import React,{useState} from 'react';
import bg from '../assets/bg.jpg'
import Navbar from '../basic/molecules/Navbar';
import CardStrip from '../basic/molecules/CardStrip'
import CarouselStruct from '../basic/molecules/CarouselStruct';
import iiti from '../assets/iiti.png';
import logo from '../assets/logo.png'
import News from './News';
import Research from './Research';
const cards=[
    {name:'Research',
    description:'The research fields in which the lab is focused. The cureent research work and available positions'},
    {name:'Positions',
    description:'The current vacancies in the lab. Join us on an exiting and arduous adventure to boost your career by leaps and bounds !!'},
    {name:'Publication',
    description:'Still not convinced? Check out our recent publications'}
]
const Home=()=> {
    const[welcome,setWelcome]=useState(0);

    const targets=document.querySelectorAll("#on-scroll");
    console.log(targets);
   const observer=new IntersectionObserver((targets)=>{
    targets.forEach((target)=>{
        if(target.isIntersecting)
        {
            //console.log(target)
            setWelcome(12);
            //document.getElementsByClassName('.slide').style.
    
        }
        else{
            setWelcome(0);
          
        }
    })
    
   })
   targets.forEach(target=>{
   // console.log(target);
    observer.observe(target);
   })
  
    return (
        <div id='Home'>
            
           <Navbar /> 
        
          <div className="  w-full mx-auto relative ">
            <div className='object-contain'>
             <img src={bg} className="-mt-60 object-cover brightness-75 h-[90vh] w-full  " />
             <div className={` flex flex-row justify-between absolute  top-1/2 -mt-20 left-0 drop-shadow-lg  w-full    font-bold text-white `}>
                 <div id='on-scroll' className={`slide transition-all delay-100 duration-[1800ms]  ml-${welcome.toString()} py-auto backdrop-brightness-90 text-3xl md:text-5xl lg:text-5xl flex  items-center flex-col `} >
                    <div className='transition-all '>
                     Welcome to the Electro Lab
                     </div>
                     
                     <div className=' hidden md:flex bg-white px-4 rounded-lg py-2 flex-row mt-20 justify-center items-center shadow-lg trainstion-all duration-500 hover:scale-105 '>
                        <div className="h-44 "><img src={iiti} className='h-44 object-contain  '/></div>
                        <div className="h-44"><img src={logo} className='h-44 object-contain'/></div>
                        
                        
            
                     </div>
                 </div>
                 
                 <div className="opacity-90 mr-16 hidden xl:block">
                 <CarouselStruct />
                 </div>
             </div>
             </div>
           </div>
           <div>
            <div className="text-slate-800 font-mono text-5xl text-center flex flex-col justify-items-center mx-auto mt-16 ">
                <div className={`text-5xl font-semibold font-sans `} >
                About Us
                </div>
                
                <div className="w-4/6 text-lg  mx-auto">
                    <div className="text-slate-900 flex flex-row justify-center justify-items-center text-start text font-sans text-base gap-x-4 mt-10">
                        <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus expedita nihil voluptate corporis distinctio ullam ducimus repudiandae minima inventore, incidunt nisi, dolores nemo quas explicabo? Pariatur nihil fugiat aspernatur!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque odit inventore assumenda excepturi quia aspernatur. Molestiae, quae aperiam accusamus laborum in numquam recusandae quaerat. Quod accusantium quam fugit corporis cum.
              
                        </div>
                        <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus expedita nihil voluptate corporis distinctio ullam ducimus repudiandae minima inventore, incidunt nisi, dolores nemo quas explicabo? Pariatur nihil fugiat aspernatur!Lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque odit inventore assumenda excepturi quia aspernatur. Molestiae, quae aperiam accusamus laborum in numquam recusandae quaerat. Quod accusantium quam fugit corporis cum.
              
                        </div>
                    </div>
                
                 </div>
                  <div className={`my-8 `}  >
                <CardStrip cards={cards}/>
                </div>
                <News />
                <Research />
            </div>
           </div>
           
        </div>
    );
}

export default Home;
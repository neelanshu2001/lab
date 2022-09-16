import React,{useEffect,useState} from 'react';
import bg from '../assets/bg.jpg'
import Navbar from '../basic/molecules/Navbar';
import CardStrip from '../basic/molecules/CardStrip'
import CarouselStruct from '../basic/molecules/CarouselStruct';
import iiti from '../assets/iiti.png';
import logo from '../assets/logo.png'
import News from './News';
import Research from './Research';
import {client} from '../client'
import Loading from '../basic/molecules/Loading';


const cards=[
    {name:'Research',
    description:'The research fields in which the lab is focused. The cureent research work and available positions'},
    {name:'Positions',
    description:'The current vacancies in the lab. Join us on an exiting and arduous adventure to boost your career by leaps and bounds !!'},
    {name:'Publication',
    description:'Still not convinced? Check out our recent publications'}
]
const Home=()=> {
    const[welcome,setWelcome]=useState(12);
    const[loading,setLoading]=useState(true);
    const [research,setResearch]=useState<any[]>([]);
    const [carouselData,setCarousel]=useState<any[]>([]);
    const [news,setNews]=useState<any[]>([]);
    const [desc,setDesc]=useState<any>();
    const [desc2,setDesc2]=useState<any>();
    const getData=async()=>{
        const response=await client.getEntry('6jWMUP3kkgPXQBrn44onsj');
        console.log(response);
        try {
            
        if(response.fields)
        {
            const fields:any=response.fields;
            setDesc(fields.about1);
            setDesc2(fields.about2);
        }
        } catch (error) {
            console.log(error)
        }
        
    }
    const getCarousel=async()=>{
        const response=await client.getEntry('68k0zzyY4alZFzRQe6ds6H');
        //console.log(response.fields.images);
        try {
            if(response.fields)
            {
                const fields:any=response.fields
                const data=fields.images.map((cur:any)=>{
                   
                    const image=cur.fields.file.url;
                    return {image};
                })
                //console.log(data);
                setCarousel(data);
                //console.log(response);
            }
        } catch (error) {
            console.log(error)
        }
      
        
        
        
    }
    const getResearch=async()=>{
        try {
            const response=await client.getEntries({content_type:'research'})
            const responseData=response.items;
            if(responseData)
            {
                const data=responseData.map((s)=>{
                const sys=s.sys;
                const fields:any=s.fields;
                const {id}=sys;
                const title=fields.title;
                const image= fields.image.fields.file.url;
                const description=fields.description;
                const updatedS={id,title,description,image}
                return updatedS;
                })
               // console.log(data)
            setResearch(data);
            }
           // console.log(research)
        } catch (error) {
            console.log(error)
        }
    }
    const getNews=async()=>{
        try {
            const response=await client.getEntries({content_type:'news'})
            const responseData=response.items;
            if(responseData)
            {
                const data=responseData.map((s)=>{
                const sys=s.sys;
                const fields:any=s.fields;
                const {id}=sys;
                const title=fields.title;
                const image= fields.image.fields.file.url;
                const description=fields.description;
                const date=fields.date
                const updatedS={id,title,description,image,date}
                return updatedS;
                })
                //console.log(data)
            setNews(data);
            }
           // console.log(research)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        setLoading(true);
        getResearch()
        getNews()
        getCarousel()
        getData()
        setTimeout(()=>{
            setLoading(false);
        },1400)
        
    },[])
    const targets=document.querySelectorAll("#on-scroll");
    //console.log(targets);
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
        <div className="">
        {!loading ?( 
         <div id='Home'>
         
           <Navbar /> 
           
            <React.Fragment>
          <div className="  w-full mx-auto relative ">
            <div className='object-contain'>
             <img src={bg} className="-mt-60 object-cover brightness-75 h-[75vh] md:h-[90vh] w-full  " />
             <div className={` flex flex-row justify-between absolute  top-1/2 md:-mt-20 left-0 drop-shadow-lg  w-full    font-bold text-white `}>
                 <div id='on-scroll' className={`slide transition-all delay-100 duration-[1800ms] text-center md:ml-12 py-auto backdrop-brightness-90 text-3xl md:text-5xl lg:text-5xl flex  items-center flex-col `} >
                    <div className='transition-all '>
                     Welcome to the Electro Lab
                     </div>
                     
                     <div className=' hidden md:flex bg-white px-4 rounded-lg py-2 flex-row mt-20 justify-center items-center shadow-lg trainstion-all duration-500 hover:scale-105 '>
                        <div className="h-44 "><img src={iiti} className='h-44 object-contain  '/></div>
                        <div className="h-44"><img src={logo} className='h-44 object-contain'/></div>
                        
                        
            
                     </div>
                 </div>
                 
                 <div className="opacity-75 mx-auto w-2/5 hidden xl:flex  justify-center ">
                 <CarouselStruct carouselData={carouselData}/>
                 </div>
             </div>
             </div>
           </div>
           <div>
            <div className=" text-3xl md:text-5xl text-slate-800 font-mono  text-center flex flex-col justify-items-center mx-auto mt-4 md:mt-16 ">
                <div className={` font-semibold font-sans `} >
                About Us
                </div>
                
                <div className="w-11/12 md:w-4/6 text-sm md:text-lg  mx-auto">
                    <div className="text-slate-900 flex flex-row justify-center justify-items-center text-start font-sans text-xs md:text-base gap-x-1 md:gap-x-4 mt-4 md:mt-10">
                        <div className="indent-2 text-justify">
                       {desc}
                        </div>
                        <div className="indent-2 text-justify">
                        {desc2}
                        </div>
                    </div>
                
                 </div>
                  <div className={`my-8  `}  >
                <CardStrip cards={cards}/>
                </div>
                <News news={news} />
                <Research research={research}/>
            </div>
           </div>
           </React.Fragment>
           
        </div>
        ):<Loading/>}
        </div>
    
     
    );
}

export default Home;
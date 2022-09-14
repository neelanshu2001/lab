import React, { useEffect,useCallback,useState } from 'react';
import Navbar from '../basic/molecules/Navbar';
import bg from '../assets/bg_student.jpg'
import gLeader from '../assets/gLeader.jpg'
import PeopleBox from '../basic/molecules/PeopleBox';
import {client} from '../client';


const navigation = [
    { name: 'Post Doc', current: false },
    {name:'PhD',current:false},
    { name: 'MTech', current: false },
    { name: 'BTech', current: false },
    // {name:'Students',href:'/students',current:false},
    // //{name:'Positions',href:'/positions',current:false},
    // { name: 'Contact Us', href: '/contact', current: false },
  ]

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

const Students=()=> {
  const[students,setStudents]=useState([]);
  const getStudents=useCallback(async()=>{
    try {
      const response= await client.getEntries({ content_type:'students'});
      const responseData=response.items
      if(responseData)
      {
        const data=responseData.map((s)=>{
          const {sys,fields}=s;
          const {id}=sys;
          const name=fields.name;
          const image= fields.image.fields.file.url;
          const programme=fields.programme;
          const updatedS={id,name,programme,image}
          return updatedS;
        })
        setStudents(data);
        console.log(data)
      }
      
    } catch (error) {
      console.log(error)
    }
  },[])
  const getLeader=async()=>{
    try {
      const response=await client.getEntries({});
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getStudents()
  },[])
    return (
        <div className=''>
            
           <Navbar /> 
           <div className='object-contain relative'>
             <img src={bg} className="-mt-60 object-cover brightness-75 h-[75vh] md:h-[90vh] w-full contrast-125  " />
             
             <div className=' absolute top-1/2 left-0 w-full'>
                 <div className={` text-center  font-bold text-white overflow-hidden  transition-all delay-100 duration-[1800ms]  text-4xl md:text-6xl lg:text-6xl  `} >
                    <div className={`p-2 md:p-4 `} >
                    Members
                 </div>
                 </div>
                 <div className="mx-auto my-4">
                 <div className="mx-auto flex justify-center space-x-3 ">
                    {navigation.map((item) => (
                      <div 
                        key={item.name}
                        onClick={()=>{
                          //console.log(item.name)
                          const ele=document.getElementById(item.name);
                          ele!=null && ele.scrollIntoView({ behavior: 'smooth',block:'center'});
                        }}
                        className={classNames(
                          item.current ? 'hover:cursor-pointer opacity-100 bg-slate-900 bg-opacity-50 text-white' : 'hover:cursor-pointer opacity-100 text-gray-300 hover:bg-opacity-25 bg-opacity-50 bg-slate-800 hover:bg-slate-900 hover:text-white',
                          'px-1 md:px-3 py-1 rounded-md text-sm md:text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                 </div>
                 </div>
             </div>
          <div className="my-10 md:w-5/6 px-2 md:px-0 mx-auto">
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4">
            Group Leader
            </div>
            <div className="w-100% md:w-5/6 mx-auto mt-4 md:mt-12">
                <div className="flex flex-intial jusitfy-between">
                <img src={gLeader} className='h-44 md:h-72 lg:h-96 object-fill' />
                <div className="text-xs md:text-sm lg:text-base text-jusitfy indent-2 md:indent-8 mx-2 md:mx-4 lg:mx-8">
                    <div className="">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    </div>
                    <div className="indent-0 my-2 hidden md:block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt dolores qui nulla deleniti, culpa quisquam, odit eveniet omnis perferendis dolore accusamus tempore sunt magnam labore vitae eaque fuga ipsa alias.
                    </div>
                    </div>
                </div>
            </div>
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='Post Doc'>
            Post Doctorals
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={students.filter(student=>{
                  return student.programme==='Post Doc'
                })}/>
            </div> 
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='PhD'>
            PhD
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={students.filter(student=>{
                  return student.programme==='PhD'
                })}/>
            </div>
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='MTech'>
            M Tech
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={students.filter(student=>{
                  return student.programme==='MTech'
                })}/>
            </div>
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='BTech'>
            B Tech
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={students.filter(student=>{
                  return student.programme==='BTech'
                })} />
            </div>
          </div>
         
         </div>
    );
}

export default Students;
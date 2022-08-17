import React from 'react';
import Navbar from '../basic/molecules/Navbar';
import bg from '../assets/bg_student.jpg'
import gLeader from '../assets/gLeader.jpg'
import PeopleBox from '../basic/molecules/PeopleBox';
const data=[{
    name:'Arnold Swchazenger',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc80bYJdDLcv9xJUpsvKZ1j7ng5RGp8_452w&usqp=CAU'
},
{
    name:'Lara Hudson',
    image:'https://www.artsci.utoronto.ca/sites/artsci.utoronto.ca/files/Student-Profile-AmiBaba.jpeg'
},
{name:'Wendy',
image:'https://www.artsci.utoronto.ca/sites/artsci.utoronto.ca/files/Student-Profile-AmiBaba.jpeg'},
{name:'Sincere Student',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc80bYJdDLcv9xJUpsvKZ1j7ng5RGp8_452w&usqp=CAU'}
]

const data2=[{name:'Sincere Student',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc80bYJdDLcv9xJUpsvKZ1j7ng5RGp8_452w&usqp=CAU'}
]

const data3=[{
    name:'Arnold Swchazenger',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc80bYJdDLcv9xJUpsvKZ1j7ng5RGp8_452w&usqp=CAU'
},
{name:'Sincere Student',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc80bYJdDLcv9xJUpsvKZ1j7ng5RGp8_452w&usqp=CAU'}
]
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
                <PeopleBox data={data}/>
            </div> 
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='PhD'>
            PhD
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={data2}/>
            </div>
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='MTech'>
            M Tech
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={data3}/>
            </div>
            <div className="font-serif text-xl md:text-3xl my-2 md:my-4" id='BTech'>
            B Tech
            </div>
            <div className="w-5/6 mx-auto mt-4 md:mt-12">
                <PeopleBox data={data}/>
            </div>
          </div>
         
         </div>
    );
}

export default Students;
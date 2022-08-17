import React from 'react';
import Navbar from '../basic/molecules/Navbar';
import bg from '../assets/bg_pub.jpg';
import PublicationBox from '../basic/molecules/PublicationBox';


const pub=[{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://en.wikipedia.org/wiki/Antenna_(radio)',Type:'journal'}
,{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'Nano atenna to cover city in spectrum',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'Nano atenna to cover city in spectrum',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'Nano atenna to cover city in spectrum',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'journal'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'scopus'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'scopus'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'sci'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'sci'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'sci'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'sci'},
,]

const navigation = [
    { name: 'Conference', current: false },
    {name:'Sci Indexed',current:false},
    { name: 'Scopus Indexed', current: false },
    { name: 'Journal', current: false },
    // {name:'Students',href:'/students',current:false},
    // //{name:'Positions',href:'/positions',current:false},
    // { name: 'Contact Us', href: '/contact', current: false },
  ]
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
const Publications=()=> {
    return (
        <div className=''  id='Publications'>
            
           <Navbar /> 
           <div className='object-contain relative' >
             <img src={bg} className="-mt-60 object-cover brightness-75 h-[75vh] md:h-[90vh] w-full contrast-125 " />
             
             <div className=' text-center  font-bold text-white overflow-hidden  transition-all delay-100 duration-[1800ms] text-4xl md:text-6xl lg:text-6xl   absolute top-1/2 left-0 w-full'>
                 <div className={`p-2 md:p-4 `} >
                     Publications 
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
                          item.current ? 'hover:cursor-pointer opacity-100 bg-slate-900 bg-opacity-50 text-white' : 'hover:cursor-pointer opacity-100 text-gray-300 hover:bg-opacity-25 bg-opacity-75 bg-slate-800 hover:bg-slate-900 hover:text-white',
                          'px-1 md:px-3 py-1 md:py-1 rounded-md text-sm md:text-lg font-medium'
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
             <div className="hover:cursor-default text-slate-800 font-mono text-3xl md:text-5xl text-center ">
             <div className='my-4 md:my-10' id='conference'>
            Conference
            <div className='mt-4 md:mt-10'>
            <PublicationBox pub={pub} req={'conference'}/>
            </div>
            <div className="mt-4 md:mt-10" id='Journal'>
            Journals
            </div>
            <div className='mt-4 md:mt-10'>
            <PublicationBox pub={pub} req={'journal'}/>
            </div>
            <div className="mt-4 md:mt-10" >
           Sci Indexed
            </div>
            <div className='mt-4 md:mt-10' id='Sci Indexed'>
            <PublicationBox pub={pub} req={'sci'}/>
            </div>
            <div className="mt-4 md:mt-10" >
           Scopus Indexed
            </div>
            <div className='mt-4 md:mt-10' id='Scopus Indexed'>
            <PublicationBox pub={pub} req={'scopus'}/>
            </div>
            </div>
            
        </div>
          
         
         </div>

    );
}

export default Publications;
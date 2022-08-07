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
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
{name:'"IEEE Standard Definitions of Terms for Antennas, IEEE Standard 145™–2013, Inst. for Electrical and Electron. Eng., New York", Dec. 2013.',link:'https://ieeexplore.ieee.org/document/9428648/references#references',Type:'conference'},
,]

const Publications=()=> {
    return (
        <div className=''>
            
           <Navbar /> 
           <div className='object-contain relative'>
             <img src={bg} className="-mt-60 object-cover brightness-75 h-[90vh] w-full contrast-125 " />
             
             <div className=' text-center  font-bold text-white overflow-hidden  transition-all delay-100 duration-[1800ms] text-4xl md:text-5xl lg:text-6xl   absolute top-1/2 left-0 w-full'>
                 <div className={` p-4 `} >
                     Publications 
                 </div>
                 {/*<div className=" md:text-4xl flex flex-row justify-center ">
                    <div className="mx-2">Journals</div>
                    <div className="">Conferences</div>
    </div>*/}
                 </div>
             </div>
             <div className="hover:cursor-default text-slate-800 font-mono text-5xl text-center ">
             <div className='my-10' id='Research'>
            Conference
            <div className='mt-10'>
            <PublicationBox pub={pub} req={'conference'}/>
            </div>
            <div className="mt-10">
            Journals
            </div>
            <div className='mt-10'>
            <PublicationBox pub={pub} req={'journal'}/>
            </div>
            </div>
            
        </div>
          
         
         </div>

    );
}

export default Publications;
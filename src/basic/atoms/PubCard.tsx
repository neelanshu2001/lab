import React from 'react';

const PubCard=({data,idx})=> {
    //console.log('Hello')
    return (
         
            <div className=" w-full flex  hover:cursor-pointer text-gray-900 hover:text-blue-500 font-bold text-sm font-normal  " onClick={()=>{
                //console.log('clicked')
                window.open(data.link,'_blank')
            }}>
                
                <div className="w-full  flex   text-start border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-1 ">
                    <div className="mx-2 ">
                    [{idx}] 
                    </div>
                    <div className=" mb-2">{data.name}</div>                   
                    
                </div>
             </div>
       
    );
}

export default PubCard;
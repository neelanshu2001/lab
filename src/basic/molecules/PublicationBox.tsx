import React from 'react';
import PubCard from '../atoms/PubCard';
import { FC } from 'react';
const PublicationBox:FC<{pub:any ,req:string}>=({pub,req})=> {
    var idx=0;
    return (
        <div className='flex flex-col justify-center items-center w-11/12 mx-auto'>
            {pub.length>0 && pub.map((p:any,i:number)=>{
               
                if(p.Type===req)  
                {
                    idx+=1;
                    //console.log(p);
                    return(
                        <PubCard data={p} idx={idx} key={i}/>
                   )
                   
                }
                
            })}
        </div>
    );
}

export default PublicationBox;
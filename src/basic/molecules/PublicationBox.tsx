import React from 'react';
import PubCard from '../atoms/PubCard';

const PublicationBox=({pub,req})=> {
    var idx=0;
    return (
        <div className='flex flex-col justify-center items-center w-5/6 mx-auto'>
            {pub.length>0 && pub.map((p,i)=>{
                
                if(p.type===req)  
                {
                    //console.log(p);
                    return(
                        <PubCard data={p} idx={i} key={i}/>
                   )
                   idx=idx+1;
                }
                
            })}
        </div>
    );
}

export default PublicationBox;
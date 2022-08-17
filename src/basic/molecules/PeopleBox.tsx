import React, { FC } from 'react';
import People from '../atoms/People';

const PeopleBox:FC<{data:any}>=({data})=> {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-rows-auto'>
            {data.map((item:any,idx:number)=>{
                return (
                    <People data={item} key={idx}/>
                )
            })}
        </div>
    );
}

export default PeopleBox;
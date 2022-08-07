import React from 'react';
import ResearchCard from '../atoms/ResearchCard';
import PropTypes from 'prop-types';
import { FC } from 'react';
/*interface Type{
    research:Array<object>,
}*/
const ResearchBox : FC<{research:Array<object>}>=({research})=>{
    return (
        <div className='flex flex-col w-5/6 mx-auto shadow-lg'>
            {
                research.length>0 &&
                   research.map((item,idx)=>{
                    return(
                        <ResearchCard item={item} key={idx}/>
                    )
                   }) 
            }
            
        </div>
    );
}

ResearchBox.propTypes={
    research:PropTypes.array.isRequired,
}

export default ResearchBox;
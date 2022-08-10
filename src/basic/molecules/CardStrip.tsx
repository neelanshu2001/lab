import React, { FC } from 'react';
import Card from '../atoms/Card'

const CardStrip:FC<{cards:any}>=({cards}) =>{
    //console.log(cards);
    return (
        <div className='mx-auto flex flex-row justify-center flex-wrap justify-items-center justify-self-center gap-x-2 md:gap-x-12  md:w-5/6' >
           {
            
            cards.map((card:any,key:any)=>{
                return(
                    <Card key={key} name={card.name} description={card.description} />
                )
               
            })
           } 
        </div>
    );
}

export default CardStrip;
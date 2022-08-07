import React from 'react';
import Card from '../atoms/Card'

function CardStrip({cards}) {
    //console.log(cards);
    return (
        <div className='mx-auto flex flex-row justify-center flex-wrap justify-items-center justify-self-center gap-x-12 w-5/6' >
           {
            
            cards.map((card,key)=>{
                return(
                    <Card key={key} name={card.name} description={card.description} />
                )
               
            })
           } 
        </div>
    );
}

export default CardStrip;
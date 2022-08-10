import React from 'react';
import ResearchBox from '../basic/molecules/ResearchBox';
const research=[{name:'New Photon discovered ' , description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error vero alias sed similique quos dicta. Molestias odio tempora facere quae alias doloremque culpa illum aliquid nostrum voluptatum, minus fugit labore!'},
{name:'New Photon discovered ' , description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error vero alias sed similique quos dicta. Molestias odio tempora facere quae alias doloremque culpa illum aliquid nostrum voluptatum, minus fugit labore!'},
{name:'New  discovered ' , description:'Lorem, ipt labore!'},
{name:'New Photon discovered ' , description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error vero alias sed similique quos dicta. Molestias odio tempora facere quae alias doloremque culpa illum aliquid nostrum voluptatum, minus fugit labore!'}]
const Research=()=> {
    return (
        <div className='my-16 overflow-visible font-semibold font-sans' id='Research'>
            Research
            <div className='mt-10 hover:cursor-default'>
            <ResearchBox research={research} />
            </div>
            
        </div>
    );
}

export default Research;
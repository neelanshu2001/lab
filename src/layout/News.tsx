import React from 'react';
import NewsBox from '../basic/molecules/NewsBox';
// const news=[{news:'New position available',date:new Date(),user:'Neelanshu Garg'},
// {news:'Research Alert',date:new Date(),user:'Neelanshu Garg'},
// {news:'New position available',date:new Date(),user:'Neelanshu Garg'},
// {news:'New position available',date:new Date(),user:'Neelanshu Garg'},
// {news:'New position available',date:new Date(),user:'Neelanshu Garg'}];
const News=({news}:any)=> {
    //console.log(news);
    return (
        <div className='hover:cursor-default font-semibold font-sans' id='News'>
            News
            <div className='mt-10'>
            <NewsBox news={news} />
            </div>
           
        </div>
    );
}

export default News;
import React from 'react';
import vectorImg from '../assets/Vector (2).png'
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div className='p-5 shadow-md'>
            <div className="">
                <img className='rounded-sm w-full object-cover' src={news.thumbnail_url} alt="" />
            </div>
           <h2 className='font-bold text-2xl p-5'>{news.title}</h2>
           <p className='text-xl text-primary p-5'>{news.details}</p>
           <Link to={`/category/${news.category_id}`} className='btn btn-secondary '><img src={vectorImg} alt="" /> Back to All category </Link>
        </div>
    );
};

export default NewsDetailsCard;
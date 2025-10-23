import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    //  console.log(id,data)
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        }
        else if (id == "1") {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id)
            console.log(filteredNews)
            setCategoryNews(filteredNews);
        }

    }, [data, id])


    return (
        <div>
            <h2 className='text-center text-primary text-xl font-bold mb-5'> Total <span className='text-secondary'> {categoryNews.length}</span> news Found </h2>
            <div className="grid grid-cols-1 gap-5">
                {
                    categoryNews.map((news)=>(<NewsCard key={news.id} news={news}></NewsCard>))
                }
            </div>
        </div>
    )
};


export default CategoryNews;
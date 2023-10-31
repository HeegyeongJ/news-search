import React, { useEffect, useState } from 'react';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNewsList();
        console.log(news);
    }, [])

    const getNewsList = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=698fb8601daf4b75b37ddc98ccd12a8c');
            const data = await response.json();
            setNews(data.articles);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            {news.map(item => (
                <div key={item.title}>{item.title}</div>
            ))}
        </div>
    );
};

export default News;
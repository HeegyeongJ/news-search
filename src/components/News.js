import React, { useEffect, useState } from 'react';

const News = ({ searchValue }) => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (searchValue) {
            getNewsList(searchValue);
        } else {
            
        }
        setIsLoading(false)
        console.log(news);
    }, [searchValue])

    const getNewsList = async (searchValue) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=698fb8601daf4b75b37ddc98ccd12a8c`);
            const data = await response.json();
            setNews(data.articles);
            setIsLoading(true)
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            {isLoading ? news.map((article, index) => (
                <div>
                    <h2 key={index}>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            )) : <p></p>}
        </div>
    );
};

export default News;
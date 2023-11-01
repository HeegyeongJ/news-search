import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const News = () => {
    const news = useSelector(state => state.news.articles)
    const status = useSelector(state => state.status)

    
    if (status === 'failed' || (news && news.length) === 0) {
        return <div>empty</div>
    }
   
    return (
        <div>
            {news && news.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default News;
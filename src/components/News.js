import { useSelector } from 'react-redux';

const News = () => {
    const news = useSelector(state => state.news)
    const articles = news.articles


    return (
        <div>
            {articles ? articles.map((article, index) => (
                <div>
                    <h2 key={index}>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            )) : <p></p>}
        </div>
    );
};

export default News;
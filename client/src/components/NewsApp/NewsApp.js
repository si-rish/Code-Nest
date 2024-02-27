// NewsApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsApp.css'; // Import your CSS file

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('technology'); // Default category

  useEffect(() => {
    // Fetch data from News API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=bd258473653b4ce89200c151093b8b57&language=en`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); // Trigger a re-fetch when the category changes

  return (
    <div className="news-app-container">

      <div className="left-section">
        {/* <div className="search-filter">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="technology">Technology</option>
            <option value="programming">Programming</option>
            <option value="ai">Artificial Intelligence</option>
          </select>
        </div> */}
        <div className="card-container">
          {news.slice(0, 20).map((article, index) => (
            <div className="card" key={index}>
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <button className='read-more' onClick={() => window.open(article.url, '_blank')}>
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        {news.slice(0, 25).map((article, index) => (
          <div className="small-card" key={index}>
            <h4>{article.title}</h4>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;

import React from 'react';
import './RoadmapCard.css'; // Import your CSS file

const RoadmapCard = ({ categories }) => {
  return (
    <div className="card-grid">
      {categories.map((category, index) => (
        <div key={index} className="category-container">
          <h2>{category.name}</h2>
          <div className="card-container">
            {category.topics.map((topic, topicIndex) => (
              <div key={topicIndex} className="card">
                <img src={process.env.PUBLIC_URL + `/images/${topic.image}`} alt={`${topic.name} logo`} />
                <h3>{topic.name}</h3>
                <p>{topic.caption}</p>
                <a href={process.env.PUBLIC_URL + `/docs/${topic.roadmapDocs}`} target="_blank" rel="noopener noreferrer">
                  <button className="roadmap-btn">{topic.buttonText || "Get Roadmap"}</button> </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapCard;
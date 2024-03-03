import React from 'react';
import "./TableOfContent.css"

const TableOfContents = ({ topics, onTopicSelect }) => {
  return (
    <div className="table-of-contents">
      <h2>Table of Contents : Logical Reasoning</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.name} onClick={() => onTopicSelect(topic.name)}>
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;

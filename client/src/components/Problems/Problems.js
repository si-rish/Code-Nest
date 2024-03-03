import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import TopicContent from './TopicContent';
import problemsData from './ProblemsData.json';
import Navbar from '../Navbar/Navbar';

const Problems = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = problemsData.topics;

  const handleTopicSelection = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
    <>
      <Navbar />
      <div className="coding-container">
        <TableOfContents topics={topics} onTopicSelect={handleTopicSelection} />
        {selectedTopic && (
          <TopicContent data={problemsData.topics.find((topic) => topic.name === selectedTopic)} />
        )}
      </div>
    </>
  );
};

export default Problems;

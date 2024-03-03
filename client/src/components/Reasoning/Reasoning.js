import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import TopicContent from './TopicContent';
import reasoningData from './ReasoningData.json';
import Navbar from '../Navbar/Navbar';

const Reasoning = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = reasoningData.topics;

  const handleTopicSelection = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
  <>
    <Navbar/>
    <div className="aptitude-container">
      <TableOfContents topics={topics} onTopicSelect={handleTopicSelection} />
      {selectedTopic && <TopicContent data={reasoningData.topics.find(topic => topic.name === selectedTopic)} />}
    </div>
  </>
  );
};

export default Reasoning;

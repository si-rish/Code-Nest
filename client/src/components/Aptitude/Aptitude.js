import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import TopicContent from './TopicContent';
import aptitudeData from './AptitudeData.json';
import './Aptitude.css';
import Navbar from '../Navbar/Navbar';

const Aptitude = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = aptitudeData.topics;

  const handleTopicSelection = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
  <>
    <Navbar/>
    <div className="aptitude-container">
      <TableOfContents topics={topics} onTopicSelect={handleTopicSelection} />
      {selectedTopic && <TopicContent data={aptitudeData.topics.find(topic => topic.name === selectedTopic)} />}
    </div>
  </>
  );
};

export default Aptitude;

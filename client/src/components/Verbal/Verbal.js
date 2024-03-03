import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import TopicContent from './TopicContent';
import verbalData from './VerbalData.json';

import Navbar from '../Navbar/Navbar';

const Verbal = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = verbalData.topics;

  const handleTopicSelection = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
  <>
    <Navbar/>
    <div className="aptitude-container">
      <TableOfContents topics={topics} onTopicSelect={handleTopicSelection} />
      {selectedTopic && <TopicContent data={verbalData.topics.find(topic => topic.name === selectedTopic)} />}
    </div>
  </>
  );
};

export default Verbal;

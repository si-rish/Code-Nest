import React, { useState } from 'react';
import TableOfContents from './TableOfContents';
import TopicContent from './TopicContent';
import interviewData from './InterviewData.json';

import Navbar from '../Navbar/Navbar';

const Interview = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = interviewData.topics;

  const handleTopicSelection = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
    <>
      <Navbar/>
      <div className="interview-container">
        <TableOfContents topics={topics} onTopicSelect={handleTopicSelection} />
        {selectedTopic && <TopicContent data={interviewData.topics.find(topic => topic.name === selectedTopic)} />}
      </div>
    </>
  );
};

export default Interview;

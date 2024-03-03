import React, { useState } from 'react';
import './TopicContent.css';

const InterviewTopicContent = ({ data }) => {
  const [showAnswers, setShowAnswers] = useState(() => Array(data.questions.length).fill(false));

  const handleToggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  if (!data) {
    return <div className="topic-content">Select a topic to view its content.</div>;
  }

  return (
    <div className="topic-content">
      <h2>{data.name}</h2>
      <ul>
        {data.questions.map((question, index) => (
          <li key={index}>
            <div className="question-card">
              <p>● {question.question}</p>
              <button className='show-answer-btn' onClick={() => handleToggleAnswer(index)}>
                {showAnswers[index] ? 'Hide Answer' : 'Show Answer'}
              </button>
              {showAnswers[index] && (
                <div>
                  <p>
                    <strong>Answer:</strong> {question.answer}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewTopicContent;

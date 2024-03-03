import React from 'react';
import './TopicContent.css';

const CodingQuestionCard = ({ question, index, onToggleAnswer, showAnswer }) => {
  const handleToggleAnswer = () => {
    onToggleAnswer(index);
  };

  return (
    <div className="question-card">
      <p>● {question.question}</p>
      <p>Ans: {question.output}</p>

      <button className='show-answer-btn' onClick={handleToggleAnswer}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>

      {showAnswer && (
        <div>
          <p>
            <strong>Answer:</strong>
            <br />
            <pre className='coding-logic'>{question.logic}</pre>
          </p>
        </div>
      )}
    </div>
  );
};

const TopicContent = ({ data }) => {
  console.log('Received data:', data);
  const [showAnswers, setShowAnswers] = React.useState(() => Array(data.questions.length).fill(false));

  if (!data) {
    return <div className="topic-content">Select a topic to view its content.</div>;
  }

  const handleToggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="topic-content">
      <h2>{data.name}</h2>
      <ul>
        {data.questions.map((question, index) => (
          <li key={index}>
            <CodingQuestionCard
              question={question}
              index={index}
              onToggleAnswer={handleToggleAnswer}
              showAnswer={showAnswers[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicContent;

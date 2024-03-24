import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faUser , faPencil, faTrash} from '@fortawesome/free-solid-svg-icons';
import "./CommunityPage.css"
import showToast from 'crunchy-toast';

function CommunityPage() {
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username);
    }

    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/questions');
      // Set showDescription property for each question
      const updatedQuestions = response.data.map((question) => ({
        ...question,
        showDescription: false,
        showComments: false, // Initialize showComments property for each question
        commentContent: '', // Initialize commentContent property for each question
      }));
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handlePostQuestion = async () => {
    try {
      if (selectedQuestion) {
        // Update existing question
        await axios.put(`http://localhost:5000/api/questions/${selectedQuestion._id}`, { title, description });
      } else {
        // Post new question
        await axios.post('http://localhost:5000/api/questions', { title, description, username, createdAt: new Date() });
      }
      fetchQuestions(); // Refresh the questions after posting
      setShowModal(false);
      setTitle('');
      setDescription('');
      setSelectedQuestion(null);
      showToast('Question Posted', 'success', 3000);
    } catch (error) {
      console.error('Error posting/updating question:', error);
      showToast('Error in Posting', 'alert', 3000);
    }
  };

  const handleDeleteQuestion = async (id) => {
    try {
      // Show confirmation dialog
      const confirmDelete = window.confirm("Are you sure you want to delete this question?");
      
      if (confirmDelete) {
        // User confirmed deletion
        await axios.delete(`http://localhost:5000/api/questions/${id}`);
        setQuestions(questions.filter((question) => question._id !== id));
        showToast('Question Deleted', 'success', 3000);
      } else {
        // User canceled deletion
        showToast('Deletion Cancelled', 'info', 3000);
      }
    } catch (error) {
      console.error('Error deleting question:', error);
      showToast('Error in deleting', 'alert', 3000);
    }
};

  const toggleDescription = (question) => {
    question.showDescription = !question.showDescription;
    setQuestions([...questions]);
  };

  const openUpdateModal = (question) => {
    setTitle(question.title);
    setDescription(question.description);
    setSelectedQuestion(question);
    setShowModal(true);
  };

  const toggleComments = (question) => {
    question.showComments = !question.showComments;
    setQuestions([...questions]);
  };

  const handleAddComment = async (questionId, content) => {
    try {
      await axios.post(`http://localhost:5000/api/questions/${questionId}/comments`, { user: username, content });
      fetchQuestions(); // Refresh the questions after adding comment
      showToast('Answer Posted', 'success', 3000);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (questionId, commentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/questions/${questionId}/comments/${commentId}`);
      fetchQuestions(); // Refresh the questions after deleting comment
      showToast('Comment Deleted', 'success', 3000);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <h1 className='community-page-heading'>Community Post</h1>
      <h3 className='community-page-caption'>Codenest is a place to gain and share knowledge. <br />It's a platform to ask questions and connect with people who contribute unique insights and quality answers.</h3>
      <button className='post-question-btn' onClick={() => setShowModal(true)}>Post Question</button>

      {showModal && (
        <div className="community-modal">
          <div className="community-modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>{selectedQuestion ? 'Update Question' : 'Post a Question'}</h2>
            <div className='community-modal-form'>
            <input className='modal-form-input' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className='modal-textarea' placeholder="Detail question..?" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
              <button className='modal-add-btn' onClick={handlePostQuestion}>{selectedQuestion ? 'Update' : 'Add'}</button>
              <button className='modal-cancel-btn' onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="community-question-list">
        {questions.map((question) => (
          <div key={question._id} className="community-question-card">
            <div className="metadata">
              <span className='community-user-profile'><FontAwesomeIcon icon={faUser} className='card-user-profile' /> {username}</span>
              <span><FontAwesomeIcon icon={faCalendarDay} className='card-date' /> {new Date(question.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <hr className='community-hr-line'/>
            <h3 className='community-title' onClick={() => toggleDescription(question)}>{question.title}?</h3>
            {question.showDescription && <p className='community-description'> {question.description}</p>}
            <div>
              <button className='community-comment-btn' onClick={() => toggleComments(question)}>
                {question.showComments ? 'Hide Answers' : `Show Answers (${question.comments.length})`}
              </button>

              <button className='community-update-btn' onClick={() => openUpdateModal(question)}><FontAwesomeIcon icon={faPencil} className='card-update-icons' /></button>

              <button className='community-delete-btn' onClick={() => handleDeleteQuestion(question._id)}><FontAwesomeIcon icon={faTrash} className='card-delete-icons' /></button>
            </div>

            {question.showComments && (
              <div className="comments-section">
                <h4>Answers :</h4>
                {question.comments.map((comment) => (
                  <div key={comment._id} className="comment">
                    <pre><span className='comment-user'>{comment.user}:</span> <br/> <span className='comment-text'>{comment.content}</span></pre>
                    <button className='community-delete-btn' onClick={() => handleDeleteComment(question._id, comment._id)}>Delete</button>
                  </div>
                ))}
                <div>
                  <textarea
                  className='comment-textarea'
                    type="text"
                    placeholder="Add a Answer"
                    value={question.commentContent}
                    onChange={(e) => {
                      const updatedQuestions = [...questions];
                      const questionIndex = updatedQuestions.findIndex((q) => q._id === question._id);
                      updatedQuestions[questionIndex].commentContent = e.target.value;
                      setQuestions(updatedQuestions);
                    }}
                  />
                  <button className='community-post-comment' onClick={() => handleAddComment(question._id, question.commentContent)}>Post Answer</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;

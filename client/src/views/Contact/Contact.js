import React from 'react';
import styled from 'styled-components';

// Styled components for CSS styling
const MainContainer = styled.main`
  position: relative;
  padding-top: 7rem; /* Adjust as needed */
  background-color: #1f2937;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 75vw;
  margin: 0 auto;
  color: #d1d5db;
  text-align: center;
`;

const FormContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 95vw;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  label {
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    outline: none;
  }

  textarea {
    resize: vertical;
    min-height: 8rem;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    color: #fff;
    background-color: #4f46e5;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #4338ca;
  }
`;

// React component
const Contact = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <div>
          <h3>Contact</h3>
          <h2>Get in touch</h2>
          <p>We’d love to hear from you! Please fill out the form below.</p>
        </div>
        <FormContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Full name</label>
              <input type="text" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" required />
            </div>
            <div>
              <label>Phone number</label>
              <div>
                <select>
                  <option>US</option>
                  <option>ES</option>
                  <option>MR</option>
                </select>
                <input type="number" placeholder="+1 (555) 000-000" required />
              </div>
            </div>
            <div>
              <label>Message</label>
              <textarea required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </ContentContainer>
      <div style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </MainContainer>
  );
};

export default Contact;

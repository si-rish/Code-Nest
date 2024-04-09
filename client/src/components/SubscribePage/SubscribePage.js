// App.js
import React from 'react';
import './SubscribePage.css';

function SubscribePage() {
  return (
    <section className="subscribe-section">
      <div className="subscribe-sub-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="subscribe-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
        <h3 className="subscribe-title">Subscribe to our newsletter</h3>
        <p className="subscribe-description">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      <div className="subscribe-form-container">
        <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </form>
        {/* <p className="subscribe-privacy-text">
          No spam ever, we are care about the protection of your data.
          <a className="subscribe-privacy-link" href="javascript:void(0)">
            Read our Privacy Policy
          </a>
        </p> */}
       
      </div>
      
    </section>
  );
};

export default SubscribePage;
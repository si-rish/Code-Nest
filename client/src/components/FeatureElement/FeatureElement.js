import React from 'react';
import './FeatureElement.css'; // Import the external CSS file

const FeatureElement = () => {
  return (
    <section className="section">
      <div className="feature-element-container">
      <hr/>
        <div className="feature-element-heading">
         
          <h2 className="feature-element-title">Explore the Features That Propel Your Growth as a Developer</h2>
          {/* <p className="feature-element-description">Empower Your Coding Journey with Code Nest.</p> */}
        </div>
        <div className="feature-element-content grid">
          <div className="feature-element-content-first-left">
            {/* <h3 className="feature-element-subtitle">Ad vix debet docendi</h3>
            <p className="feature-element-text">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p> */}
            <ul className="feature-element-list">
              <li className="feature-element-list-item">
                <svg className="feature-element-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="feature-element-list-content">
                  <h4 className="feature-element-list-title">For Tech News Updates</h4>
                  <p className="feature-element-list-text">Daily tech news for staying ahead in the industry.</p>
                  <a href=''>
                    <button>Read more</button>
                    </a>
                </div>
              </li>
              <li className="feature-element-list-item">
                <svg className="feature-element-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="feature-element-list-content">
                  <h4 className="feature-element-list-title">For Personalized Guidance Path</h4>
                  <p className="feature-element-list-text">Tailored career paths for coding success.</p>
                  <a href=''>
                    <button>Read more</button>
                    </a>
                </div>
              </li>
              <li className="feature-element-list-item">
                <svg className="feature-element-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="feature-element-list-content">
                  <h4 className="feature-element-list-title">For Recommendations</h4>
                  <p className="feature-element-list-text">Curated resources for skill improvement.</p>
                  <a href=''>
                    <button>Read more</button>
                    </a>
                </div>
              </li>
              {/* ... Add more list items here ... */}
            </ul>
          </div>
          <div className="feature-element-content-right">
            <img src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfDF8MHx8fDA%3D" alt="Random image" className="feature-element-image" />
          </div>
        </div>
         

        <div className="feature-element-content grid">
          <div className="feature-element-content-right">
            <img src="https://images.unsplash.com/photo-1668554245893-2430d0077217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8MXwwfHx8MA%3D%3D" className="feature-element-image" />
          </div>
          <div className="feature-element-content-left">
            {/* <h3 className="feature-element-subtitle">Eam nibh gloriatur ex</h3>
            <p className="feature-element-text">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p> */}
            <ul className="feature-element-list">
              <li className="feature-element-list-item">
                <svg className="feature-element-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="feature-element-list-content">
                  <h4 className="feature-element-list-title">Resources</h4>
                  <p className="feature-element-list-text">Expert support for successful project completion.</p>
                  <a href=''>
                    <button>Read more</button>
                    </a>
                </div>
              </li>
              <li className="feature-element-list-item">
                <svg className="feature-element-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="feature-element-list-content">
                  <h4 className="feature-element-list-title">Preparation</h4>
                  <p className="feature-element-list-text">Ace coding interviews with practice problems.</p>
                  <a href=''>
                    <button>Read more</button>
                    </a>
                </div>
              </li>
              <li className="feature-element-list-item">
                <svg className="feature-element-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="feature-element-list-content">
                  <h4 className="feature-element-list-title">Help Support</h4>
                  <p className="feature-element-list-text">Instant coding help from AI for smoother project progress.</p>
                  <a href=''>
                    <button>Read more</button>
                    </a>
                </div>
              </li>
              {/* ... Add more list items here ... */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureElement;

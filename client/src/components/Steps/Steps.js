import React from 'react';
import './Steps.css';

function Steps() {
  return (
    <section className="steps-container">
      <div className="steps-flex-container">
        <div className="steps-flex-wrap">
          <div className="steps-content-section">
            <div className="step-container">
              <div className="step-line" />
              <div className="step-icon">
                <svg className="steps-icon">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="step-content">
                <h2 className="step-title">LEARN</h2>
                <p className="step-description">Dive into MERN stack, Git, GitHub, and relevant npm packages with our personalized learning resources.</p>
              </div>
            </div>
            <div className="step-container">
              <div className="step-line" />
              <div className="step-icon">
                <svg className="steps-icon">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="step-content">
                <h2 className="step-title">PRACTICE</h2>
                <p className="step-description">Solve coding challenges, collaborate with peers, and sharpen your skills in our vibrant community.</p>
              </div>
            </div>
            <div className="step-container">
              <div className="step-line" />
              <div className="step-icon">
                <svg className="steps-icon">
                  <circle cx="12" cy="5" r="3" />
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div className="step-content">
                <h2 className="step-title">IMPLIMENT</h2>
                <p className="step-description">Bring your ideas to life by building real-world MERN stack applications.</p>
              </div>
            </div>
            <div className="step-container">
              <div className="step-line" />
              <div className="step-icon">
                <svg className="steps-icon">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="step-content">
                <h2 className="step-title">GET HIRED</h2>
                <p className="step-description">Showcase your skills, get career guidance, and connect with industry professionals to land your dream job.</p>
              </div>
            </div>
            {/* <div className="step-container">
              <div className="step-icon">
                <svg className="steps-icon">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div className="step-content">
                <h2 className="step-title">FINISH</h2>
                <p className="step-description">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
              </div>
            </div> */}
          </div>
          <img className="steps-hero-img" src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1712736821~exp=1712740421~hmac=5e0850fcba1fc518ea1914bbb95c12bc7ef07f48c28a25edf0dfca0a45db6ed3&w=996" alt="step" />
        </div>
      </div>
    </section>
  );
}

export default Steps;
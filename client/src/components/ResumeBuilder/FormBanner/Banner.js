import React from 'react';
import Resumeimg1 from '../../assets/resumeimg1.png';
import './Banner.css';
import StepsBanner from './StepsBanner';
// import Body from '../../components/ResumeBuilder/FormBody/Body';


const Banner = () => {

  // Function to scroll to the Body component
  const scrollToComponent = () => {
    // Get the offset of the Body component
    const componentOffset = document.getElementById('StepBanner').offsetTop;
    // Scroll to the Body component
    window.scrollTo({
      top: componentOffset,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div className="banner">
      <div className="image-container">
        <img src ={Resumeimg1} alt="Banner Image" />
      </div>
      <div className="text-container">
        <h2>Unlock your career potential with our resume builder</h2>
        <p>Create a standout resume in minutes..</p>
        <button onClick={scrollToComponent}>Build My Resume</button>
        
      </div>
    </div>
    <StepsBanner />
    <span id="StepBanner" style={{ paddingTop: '100vh' }}></span>
    </>
  );
};

export default Banner;

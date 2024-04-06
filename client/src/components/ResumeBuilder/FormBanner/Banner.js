import React from 'react';
import Resumeimg1 from '../../assets/resumeimg1.png';
import './Banner.css';
import StepsBanner from './StepsBanner';


const Banner = () => {
  return (
    <>
    <div className="banner">
      <div className="image-container">
        <img src ={Resumeimg1} alt="Banner Image" />
      </div>
      <div className="text-container">
        <h2>Unlock your career potential with our resume builder</h2>
        <p>Create a standout resume in minutes..</p>
        <button>Build My Resume</button>
      </div>
    </div>
    <StepsBanner/>
    </>
  );
};

export default Banner;

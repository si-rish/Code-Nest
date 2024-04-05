// FeatureSection.js
import React from 'react';
import './FeatureSection.css';
import icon from "../assets/icon.svg";
import ai from "../assets/ai.png";
import update from "../assets/update.png";
import road from "../assets/road.png";
import project1 from "../assets/project.png";

const FeatureSection = () => {
  return (
    <div className="feature-section-container">
      <div className="feature-content-container">
        <div className="feature-header">
          <h2 className="feature-subtitle">Empower Your Coding Journey</h2>
          <p className="feature-title">Unlock the Full Potential of Your Coding Skills</p>
          <p className="feature-description">Join Code Nest and experience a platform that goes beyond solving coding problems. Explore the latest technologies, discover recommended books, access career roadmaps, get project guidance, and share your achievements with a vibrant coding community.</p>
        </div>
        <div className="feature-items-container">
          <FeatureItem icon={ai} title="AI-Powered Solutions" description="Get personalized coding solutions using AI algorithms tailored to your unique challenges." />
          <FeatureItem icon={update} title="Stay Updated" description="Access daily news about evolving technologies and stay ahead in the fast-paced tech world." />
          <FeatureItem icon={road} title="Career Roadmaps" description="Navigate your programming career path with detailed roadmaps and actionable steps." />
          <FeatureItem icon={project1} title="Projects Guidance" description="Receive guidance and inspiration for your coding projects, turning your ideas into reality." />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="icon-container">
        <img src={icon} alt="Feature Icon" className="feature-section-icon" />
      </div>
      <div className="text-container">
        <div className="feature-title">{title}</div>
        <div className="feature-description">{description}</div>
      </div>
    </div>
  );
};

export default FeatureSection;

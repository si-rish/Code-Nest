// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectData }) => {
  // Check if projectData is defined before destructuring
  if (!projectData) {
    return null; // or render some default content or loading state
  }

  // Destructure _id if present, default to an empty string if not
  const { _id = '', projectName, ownerName, description, codeLink, demoLink } = projectData;

  return (
    <div className="project-card">
      <h2>{projectName}</h2>
      <p className='project-description'>{description}</p>
      <p className='owner-name'>Created by: {ownerName}</p>
      <div className="card-footer">
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button>Code</button>
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className='preview-btn'>Preview</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

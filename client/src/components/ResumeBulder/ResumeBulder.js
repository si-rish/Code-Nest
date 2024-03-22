import React, { useState } from 'react';
import './ResumeBulder.css'; // Import your CSS file for styling

const ResumeForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [skill, setSkill] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [workDuration, setWorkDuration] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic goes here
    // For simplicity, we're just logging the form data
    console.log({
      name,
      email,
      phone,
      address,
      github,
      linkedin,
      skill,
      university,
      degree,
      year,
      location,
      role,
      company,
      workDuration,
      workDescription,
      projectName,
      projectDate,
      projectDescription
    });
  };

  // Function to handle form cancellation
  const handleCancel = () => {
    // Reset all form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setGithub('');
    setLinkedin('');
    setSkill('');
    setUniversity('');
    setDegree('');
    setYear('');
    setLocation('');
    setRole('');
    setCompany('');
    setWorkDuration('');
    setWorkDescription('');
    setProjectName('');
    setProjectDate('');
    setProjectDescription('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="personal-details">
          <h2>Personal Details</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <input type="text" placeholder="GitHub Link (Optional)" value={github} onChange={(e) => setGithub(e.target.value)} />
          <input type="text" placeholder="LinkedIn Link (Optional)" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <select value={skill} onChange={(e) => setSkill(e.target.value)} required>
            <option value="">Select Skill</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="education">
          <h2>Education</h2>
          <input type="text" placeholder="University Name" value={university} onChange={(e) => setUniversity(e.target.value)} required />
          <input type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} required />
          <input type="text" placeholder="Year Duration" value={year} onChange={(e) => setYear(e.target.value)} required />
          <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="work-experience">
          <h2>Work Experience</h2>
          <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
          <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} required />
          <input type="text" placeholder="Duration" value={workDuration} onChange={(e) => setWorkDuration(e.target.value)} required />
          <textarea placeholder="Description (Max 150 words)" value={workDescription} onChange={(e) => setWorkDescription(e.target.value)} required />
        </div>
        <div className="project-section">
          <h2>Project Section</h2>
          <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
          <input type="text" placeholder="Project Date" value={projectDate} onChange={(e) => setProjectDate(e.target.value)} required />
          <textarea placeholder="Description (Max 150 words)" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} required />
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;

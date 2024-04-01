import React, { useState, useEffect} from 'react';

import './ResumeBulder.css'; // Import your CSS file for styling
import axios from 'axios';

const ResumeForm = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [state, setState] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [skills, setSkills] = useState([]); // State variable for selected skills
  const [skillInput, setSkillInput] = useState(''); 
  
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [passingYear, setPassingYear] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');
  const [workPositionTitle, setWorkPositionTitle] = useState('');
  const [workCompanyName, setWorkCompanyName] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDate, setProjectDate] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Function to handle form submission
  // const handleSubmit = (e) => {    @
  //   e.preventDefault();     @
    // Your submission logic goes here
    // For simplicity, we're just logging the form data
    // console.log({     @
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Send form data to the backend server
        const response = await axios.post('http://localhost:5000/api/resume', {
  
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      pinCode,
      state,
      github,
      linkedin,
      skills,
      university,
      degree,
      passingYear,
      fieldOfStudy,
      workCompanyName,
      workPositionTitle,
      workStartDate,
      workEndDate,
      workDescription,
      projectName,
      projectDate,
      projectDescription
    });
 



  console.log(response.data);
} catch (error) {
  console.error('Error submitting resume:', error);
}
};




  const addSkill = () => {
    if (skillInput.trim() !== '' && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  // Function to handle removing a skill
  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  // Function to handle form cancellation
  const handleCancel = () => {
    // Reset all form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setPinCode('');
    setState('');
    setGithub('');
    setLinkedin('');
    setSkills([]);
    setUniversity('');
    setDegree('');
    setPassingYear('');
    setFieldOfStudy('');
    setWorkPositionTitle('');
    setWorkCompanyName('');
    setWorkStartDate('');
    setWorkEndDate('');
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
        <h3 className='tag-line'>Get started with the basics: your name and contact information.</h3>
          <div className="container">
          <div className="left-side">
            <h3>First Name</h3>
          <input type="text" placeholder="" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <h3>Email</h3>
          <input type="email"placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <h3>Address</h3>
          <input type="text" placeholder="" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <h3>PinCode</h3>
          <input type="text" placeholder="" value={pinCode} onChange={(e) => setPinCode(e.target.value)} required />
          <h3>GitHub URL</h3>
          <input type="text" placeholder="(Optional)" value={github} onChange={(e) => setGithub(e.target.value)} />

          </div>

          <div className="right-side">
          <h3>Last Name</h3>
          <input type="text" placeholder="" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <h3>Phone</h3>
          <input type="tel" placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <h3>City</h3>
          <input type="text" placeholder="" value={city} onChange={(e) => setCity(e.target.value)} required />
          <h3>State</h3>
          <input type="text" placeholder="" value={state} onChange={(e) => setState(e.target.value)} required />
          <h3>LinkedIn URL</h3>
          <input type="text" placeholder="(Optional)" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
          </div>

          </div>
        
        </div>
<hr></hr>
                                                                  {/* ----------------------------Professional Experience----------------------------- */}
        <div className="work-experience">
          <h2>Professional Experience</h2>
          <h3 className='tag-line'>Tell us about your most recent job.</h3>
          <div className="container">
          <div className="left-side">
          <h3>Company Name</h3>
          <input type="text" placeholder="" value={workCompanyName} onChange={(e) => setWorkCompanyName(e.target.value)} required />
          <h3>Start Date</h3>
        
        <input
          type="date"
          name="startDate"
          id="startDate"
          placeholder="(Optional)" 
          value={setWorkStartDate.workStartDate}
          onChange={(e) => setWorkStartDate(e.target.value)} />
          
          </div>

          <div className="right-side">
          <h3>Position Title</h3>
          <input type="text" placeholder="Job-title" value={workPositionTitle} onChange={(e) => setWorkPositionTitle(e.target.value)} />
          
        <h3>End Date</h3>
        <input
          type="date"
          name="endDate"
          id="endDate"
          placeholder="(Optional)"
          value={setWorkEndDate.endDate}
          onChange={(e) => setWorkEndDate(e.target.value)} />

        </div>
        </div>
        <h3>Work Summary</h3>
          <textarea placeholder="Description (Max 150 words)" value={workDescription} onChange={(e) => setWorkDescription(e.target.value)} />

</div>


        {/* <div className="skills">
          <h2>Skills</h2> */}
          {/* <select value={skill} onChange={(e) => setSkill(e.target.value)} required>
            <option value="">Select Skill</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            {/* Add more options as needed */}
          {/* </select> */}
 {/* </div> */}

                                                               {/* ------------------------------Education----------------------------------- */}

          <div className="education">
          <h2>Education</h2>
          <h3 className='tag-line'>Add your most relevant education, including programs you're currently enrolled in.</h3>
          <div className="container">
          <div className="left-side">
            <h3>University Name</h3>
          <input type="text" placeholder="" value={university} onChange={(e) => setUniversity(e.target.value)} required />
          <h3>Degree</h3>
          <input type="text" placeholder="" value={degree} onChange={(e) => setDegree(e.target.value)} required />
          </div>

          <div className="right-side">
            <h3>Duration</h3>
          <input type="text" placeholder="In Year" value={passingYear} onChange={(e) => setPassingYear(e.target.value)} required />
          <h3>Field of Study</h3>
          <input type="text" placeholder="" value={fieldOfStudy} onChange={(e) => setFieldOfStudy(e.target.value)} required />
          </div>
        </div>
        </div>

                                                               {/* ----------------------------Skills----------------------------- */}


 <div className="skills">
          <h2>Skills</h2>
       
          <input
            type="text"
            placeholder="Add Skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          <button type="button" onClick={addSkill}>Add</button>
          <div className="selected-skills">
            {skills.map((skill, index) => (
              <div key={index} className="selected-skill">
                {skill} &nbsp;
                <h4 type="button" onClick={() => removeSkill(index)}>x</h4>
              </div>
            ))}
          </div>
        </div>

    
                                                  {/* ----------------------------------------------Project Section-------------------------------- */}

        <div className="project-section">
          <h2>Project Section</h2>
          <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
          <input type="text" placeholder="Project Date" value={projectDate} onChange={(e) => setProjectDate(e.target.value)} required />
          <textarea placeholder="Description (Max 150 words)" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} required />
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleSubmit}>Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <a href='ResumeApp'><button type='next'></button></a>
        </div>
      </form>
    </div>
    
  );
};

export default ResumeForm;

import React, { useState } from 'react';

function ResumeApp() {
  const [formData, setFormData] = useState({
    positionTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    isCurrentlyEmployed: false,
    workSummary: '',
    skills: [],
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? event.target.checked : value,
    }));
  };

  return (
    <div>
      <form>
        <label htmlFor="positionTitle">Position Title:</label>
        <input
          type="text"
          name="positionTitle"
          id="positionTitle"
          value={formData.positionTitle}
          onChange={handleChange}
        />
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
        <label htmlFor="isCurrentlyEmployed">Currently Employed:</label>
        <input
          type="checkbox"
          name="isCurrentlyEmployed"
          id="isCurrentlyEmployed"
          checked={formData.isCurrentlyEmployed}
          onChange={handleChange}
        />
        <label htmlFor="workSummary">Work Summary:</label>
        <textarea
          name="workSummary"
          id="workSummary"
          value={formData.workSummary}
          onChange={handleChange}
        />
        {/* Add skill input fields here */}
      </form>
    </div>
  );
}

export default ResumeApp;

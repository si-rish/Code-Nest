import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import './form.css'

const PersonalDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pinCode: '',
    state: '',
    country: '',
    linkedin: '',
    github: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to MongoDB
      const response = await axios.post('/api/savePersonalDetails', formData);
      console.log(response.data);
      // Navigate to next section
      // You can implement navigation logic here
    } catch (error) {
      console.error('Error saving personal details:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Details</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="address" id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="pinCode">PinCOde</label>
        <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="linkedin">Linkedin URL</label>
        <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="github">Github URL</label>
        <input type="text" id="github" name="github" value={formData.github} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;

// backend/models/Resume.js
import { Schema, model } from 'mongoose';

const resumeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  pinCode: String,
  state: String,
  github: String,
  linkedin: String,
  skills: [String],
  university: String,
  degree: String,
  passingYear: String,
  fieldOfStudy: String,
  workStartDate: String,
  workEndDate: String,
  workPositionTitle: String,
  workCompanyName: String,
  workDescription: String,
  projectName: String,
  projectDate: String,
  projectDescription: String
});

module.exports = mongoose.model('Resume', resumeSchema);

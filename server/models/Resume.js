import { Schema, model } from 'mongoose';

const resumeSchema = new Schema({
    personalInformation: {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    professionalExperience: [{
        jobTitle: {
            type: String,
            required: true
        },
        employer: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date
        },
        description: {
            type: String
        }
    }],
    educationalBackground: [{
        institution: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
        },
        fieldOfStudy: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date
        }
    }],
    skills: [String],
    interestsAndHobbies: [String],
    certifications: [{
        certificateName: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        dateOfIssue: {
            type: Date,
            required: true
        },
        certificateId: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Resume = model('Resume', resumeSchema);

export default Resume;

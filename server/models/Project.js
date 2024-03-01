import {model, Schema} from "mongoose";

const projectSchema = new Schema({
    projectName: { 
        type: String, 
        required: true 
    },
    ownerName: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true, 
        maxlength: 500 
    },
    codeLink: { 
        type: String, 
        required: true 
    },
    liveDemoLink: { 
        type: String 
    }

});

const Project = model('Project', projectSchema);


export default Project;
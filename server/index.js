import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
dotenv.config();
import cors from 'cors';


import path from 'path';
const __dirname = path.resolve();

import mongoose from 'mongoose';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().single('image')); // Handle file uploads
app.use(cors());


const connectMongoDB = async () =>{
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    
    if(connection){
        console.log('Connected to MongoDB');
    }
}
connectMongoDB();


const projectSchema = new mongoose.Schema({
    projectName: String,
    ownerName: String,
    description: String,
    codeLink: String,
    demoLink: String,
  });
  
  const Project = mongoose.model('Project', projectSchema);



  
  app.post('/api/projects', async (req, res) => {
    try {
      const {
        projectName,
        ownerName,
        description,
        codeLink,
        demoLink,
      } = req.body;
  
      const project = new Project({
        projectName,
        ownerName,
        description,
        codeLink,
        demoLink,
      });
  
  
      await project.save();
      res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
      console.error('Error adding data:', error.message);
      res.status(500).json({ message: 'Data adding failed' });
    }
  });
  


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }


  // ...

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    res.status(500).json({ message: 'Error fetching projects' });
  }
})
.post(async (req, res) => {
  try {
    const {
      projectName,
      ownerName,
      description,
      codeLink,
      demoLink,
    } = req.body;

    const project = new Project({
      projectName,
      ownerName,
      description,
      codeLink,
      demoLink,
    });

    await project.save();
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error adding data:', error.message);
    res.status(500).json({ message: 'Data adding failed' });
  }
});

// ...




const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});
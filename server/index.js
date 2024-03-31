import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import cors from 'cors';
import OpenAI from "openai";
import path from 'path';
const __dirname = path.resolve();

import mongoose from 'mongoose';
import User from './models/User.js';

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().single('image')); // Handle file uploads
app.use(cors());





const connectMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URL);

  if (connection) {
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



if (process.env.NODE_ENV === "production") {
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
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/chatbot', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt in the request body' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "assistant", content: prompt }],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const assistantMessage = response.choices[0].message;
    const Answer = assistantMessage.content;

    res.send({ Answer });

    // res.send(response.data);
    // console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/signup", async(req, res)=>{
  const {username, email, password} = req.body;

  const user = new User({
    username: username,
    email: email,
    password: password
  });

  try{
    const savedUser = await user.save();

    return res.json({
      success: true,
      data: savedUser,
      message: "User registered successfully"
    })
  }
  catch(e){
    return res.json({
      success: false,
      message: e.message
    })
  }
})

app.post("/login", async(req, res)=>{
  const {email, password} = req.body;

  const user = await User.findOne({email: email, password: password});

  if(user){
    return res.json({
      success: true,
      data: user,
      message: "User logged in successfully"
    })
  }
  else
  {
    return res.json({
      success: false,
      message: "Invalid email or password"
    })
  }
})











if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});



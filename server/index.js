import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import path from 'path';
const __dirname = path.resolve();

import mongoose from 'mongoose';


const app = express();
app.use(express.json());


const connectMongoDB = async () =>{
    const connection = await mongoose.connect(process.env.MONGODB_URL);
    
    if(connection){
        console.log('Connected to MongoDB');
    }
}
connectMongoDB();


app.get('/ping', (req, res) => {
    res.send('pongo');
})

app.post('/product', (req, res) => {

    console.log(req.body);

    res.json({
        success: true,
        data: {},
        message: "Product added successfully"
    })

});



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }




const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});
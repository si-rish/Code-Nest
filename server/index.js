import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

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

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});
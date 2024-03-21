import React, { useState } from 'react'
import "./Chatbot.css"
import logo from "../assets/logo.png"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import GptResponse from './GptResponse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Chatbot() {
    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponse("");
        setLoading(true);
        const res = await axios.post("http://localhost:5000/chatbot" , {prompt: prompt})
        setResponse(res);
        setLoading(false);
        console.log(res);
    };

    

    return (
        <>
            <div className='chatbot-container'>
                <img src={logo} className='chatbot-img' alt='logo' />
                <div>
                <p className='chatbot-tagline'>From Code to Conversation: Where AI Transforms Dialogues into Masterpieces, Byte by Byte.</p> 
                <button onClick={handleOpen} className='chatbot-btn'>Ask me Anything &nbsp; <FontAwesomeIcon icon={faSearch} className='chatbot-search' /></button>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className='chatbot-modal'
                >
                    <Box className='chatbot-box-container' >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Drop Your Questions ?
                        </Typography>
                        <form style={{display: "flex", flexDirection: "column" , alignItems:"center"}} onSubmit={(e)=> {(handleSubmit(e))}}>
                        <TextField value={prompt} onChange={(e) => setPrompt(e.target.value)} id="outlined-basic" label="Query" variant="outlined" sx={{margin: "15px 0px", width: "100%"}} />
                        <button type='submit' className='chatbot-submit-btn'>Submit</button>
                        </form>

                        
                        {loading && <LinearProgress sx={{margin: "20px 0"}} />}
                        {response && <GptResponse response={response}/>}
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Chatbot
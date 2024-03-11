import React from 'react'
import "./Chatbot.css"

const GptResponse = ({ response}) => {
    const res = response.data.Answer


  return (
    <div className='chatbot-answer'>
        {res}
    </div>
  )
}

export default GptResponse
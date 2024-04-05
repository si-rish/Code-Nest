import React from 'react'
import "./Resume.css"
import Navbar from '../../components/Navbar/Navbar'
import Body from '../../components/ResumeBuilder/FormBody/Body'
function Resume() {
  return (
    <div className='Resume'>
    <Navbar/>
    <Body/>
    </div>
  )
}

export default Resume

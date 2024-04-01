import React from 'react'
import "./Resume.css"
import Navbar from '../../components/Navbar/Navbar'
import ResumeForm from '../../components/ResumeBulder/ResumeBulder'
// import PersonalDetailsForm from '../../components/ResumeBulder/form'
import ResumeApp from '../../components/ResumeBulder/Experience'

function Resume() {
  return (
    <>
    <Navbar/>
    <ResumeForm/>
    
    {/* <PersonalDetailsForm/> */}
    </>
  )
}

export default Resume

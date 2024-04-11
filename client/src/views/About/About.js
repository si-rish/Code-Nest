import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'

function About() {
  return (
    <>
    <Navbar/>
   
    
    <div>
      <section className="secright">
        <div className="paras">
          <h1 className="sectiontag text-big">About us</h1>
          <h3 className="subsectiontag text-small">Code Nest is a community platform that helps college students navigate their coding and academic journey. Code Nest goes beyond the ordinary. Not only does it provide a haven for coding enthusiasts, but it also offers a diverse array of question sets covering reasoning, aptitude, coding problems, and interview-based questions. </h3>
        </div>
        <div className="thumbnail">
          <img src="https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg?t=st=1712823144~exp=1712826744~hmac=0b7fd5cd9802a08fc4d206f84ac18f3c74cbf1ad0f9fc9c85ea91aa35b0bf1ee&w=996" alt="cityimage" className="fluidimg" />
        </div>
      </section>

      <section className="secleft">
        <div className="paras">
          <h1 className="sectiontag text-big">Our Vision</h1>
          <h3 className="subsectiontag text-small">At Code Nest, we envision a future brimming with talented and passionate tech professionals. We believe every college student has the potential to excel in the coding world, and we're dedicated to providing a comprehensive platform that equips them with the necessary skills, knowledge, and support.</h3>
        </div>
        <div className="thumbnail">
          <img src="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1712822932~exp=1712826532~hmac=75f38290e657a072e879d05632934826a29b7316c1aa12f9bdd861f7c5138658&w=996" alt="cityimage" className="fluidimg" />
        </div>
      </section>

      <section className="secright">
        <div className="paras">
          <h1 className="sectiontag text-big">Placement Preparation</h1>
          <h3 className="subsectiontag text-small"> Landing your dream job starts with thorough preparation. Code Nest offers a wealth of resources to help you prepare for interviews, including aptitude tests, interview questions, and tips for success. We'll guide you through every step of the job application process, from polishing your resume to acing the interview.</h3>
        </div>
        <div className="thumbnail">
          <img src="https://img.freepik.com/free-photo/close-up-people-studying-together_23-2149204732.jpg?t=st=1712823418~exp=1712827018~hmac=8b89f899ab1e07c07f4a16c0418d27d80ff4b3f471dface4e54611de42ee1f54&w=996" alt="cityimage" className="fluidimg" />
        </div>
      </section>
    </div>
  




    </>
  )
}

export default About
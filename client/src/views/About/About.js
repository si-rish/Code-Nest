import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'

function About() {
  return (
    <>
    <Navbar/>
    <div>About</div>
    
    <div>
      <section className="secright">
        <div className="paras">
          <h1 className="sectiontag text-big">About us</h1><br />
          <h3 className="subsectiontag text-small">Code Nest is a community platform that helps college students navigate their coding and academic journey. Code Nest goes beyond the ordinary. Not only does it provide a haven for coding enthusiasts, but it also offers a diverse array of question sets covering reasoning, aptitude, coding problems, and interview-based questions. </h3>
        </div>
        <div className="thumbnail">
          <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cityimage" className="fluidimg" />
        </div>
      </section>

      <section className="secleft">
        <div className="paras">
          <h1 className="sectiontag text-big">Our Vision</h1><br />
          <h3 className="subsectiontag text-small">Language</h3>
        </div>
        <div className="thumbnail">
          <img src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cityimage" className="fluidimg" />
        </div>
      </section>

      <section className="secright">
        <div className="paras">
          <h1 className="sectiontag text-big">About us</h1><br />
          <h3 className="subsectiontag text-small">Code Nest is a community platform that helps college students navigate their coding and academic journey. Code Nest goes beyond the ordinary. Not only does it provide a haven for coding enthusiasts, but it also offers a diverse array of question sets covering reasoning, aptitude, coding problems, and interview-based questions. </h3>
        </div>
        <div className="thumbnail">
          <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cityimage" className="fluidimg" />
        </div>
      </section>
    </div>
  




    </>
  )
}

export default About
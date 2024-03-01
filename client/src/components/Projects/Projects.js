import React from 'react'
import ProjectForm from './ProjectForm'
import Navbar from '../Navbar/Navbar'
import ProjectCard from './ProjectCard'
import "./Projects.css"

function Projects() {
  return (
    <>
    <Navbar/>
    <div className="project-headline">
            
            <p>Welcome to our Projects Library! Explore a diverse collection of projects created by our community. Each project card showcases a unique creation, including project name, description, creator details, and links to the code and previews. To contribute your project, simply click the "Add" button, fill in the details in the form, and watch your project join the library. Dive into the world of creativity, innovation, and collaboration!</p>
        </div>
        <br/>
        <hr/>
    <ProjectForm/>
    <ProjectCard/>
    </>
  )
}

export default Projects
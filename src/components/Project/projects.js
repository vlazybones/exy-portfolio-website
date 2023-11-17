import React, { useEffect } from "react"
import tmsProj from "../../assets/tmssnip2.png"
import ProjectItem from "./projectItem"
import './project.css'

function Project() {
  return (
    <>
    <section id="project">
      <div className="projects">
      <h2 className="projectTitle">Past Projects</h2>
      <span className="projDesc">Throughout my journey as a software developer, I've had the privilege to work on a diverse range of coding projects that have deepened my technical expertise.
        These projects have taught me the importance of innovation, collaboration, and a constant drive for improvement.</span>
        <div className="projectList">
            <ProjectItem image={tmsProj} name="Task Management Website" text="A task management website using Kanban board, built with: ReactJS, Nodejs, and MySQL. "/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Project
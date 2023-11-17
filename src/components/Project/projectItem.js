import React, { useEffect } from "react"
import './project.css'

function ProjectItem ( {image, name, text} ) {
  return (
    <>
      <div className="projectItem">
        <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
        <div className="projectItemDescDiv">
          <h1> {name} </h1>
          <p> {text} </p>
        </div>
      </div>
    </>
  )
}

export default ProjectItem;
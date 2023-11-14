import React, { useEffect } from "react"
import './portfolio.css';
import tmsfrontend from '../../assets/tms-frontend.png'
import tmsbackend from '../../assets/tms-backend.png'

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <h2 className="worksTitle">Past Projects</h2>
        <span className="worksDesc">Throughout my journey as a software developer, I've had the privilege to work on a diverse range of coding projects that have deepened my technical expertise.
        These projects have taught me the importance of innovation, collaboration, and a constant drive for improvement.</span>
        <div className="worksImgs">
            <a href="https://github.com/vlazybones/project-tms-frontend" target="_blank"><img src={tmsfrontend} alt="kanbanProjectFE" className="worksImg" /></a>
            <a href="https://github.com/vlazybones/project-tms-backend" target="_blank"><img src={tmsbackend} alt="kanbanProjectBE" className="worksImg" /></a>
        </div>
      </section>
    </>
  )
}

export default Portfolio
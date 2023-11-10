import React, { useEffect } from "react"
import './intro.css'
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Intro() {
  return (
    <>
      <div>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName">Eylin</span><br />Software Engineer</span>
                <p className="introPara">A passionate problem solver who thrives on the thrill of<br />transforming ideas into functional, efficient software. </p>
                <Link><button className="btn"><FontAwesomeIcon icon={faSuitcase} /> &nbsp;Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
      </div>
    </>
  )
}

export default Intro
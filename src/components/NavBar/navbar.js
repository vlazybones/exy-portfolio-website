import React, { useEffect } from "react"
import './navbar.css';
import logo from '../../assets/exylogo.png'
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'

function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Skills</Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Experience</Link>
            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} className="desktopMenuListItem">Projects</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImage" />Contact Me</button>
    </nav>
  )
}

export default Navbar
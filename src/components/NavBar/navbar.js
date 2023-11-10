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
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Experience</Link>
            <Link className="desktopMenuListItem">Projects</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImage" />Contact Me</button>
    </nav>
  )
}

export default Navbar
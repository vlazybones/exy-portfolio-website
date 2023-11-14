import React, { useEffect } from "react"
import './contact.css';

function Contact() {
  return (
    <>
      <section id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">Kindly complete the form provided below to initiate a conversation regarding potential employment opportunities.</p>
        <form action="" className="contactForm"></form>
        <input type="text" className="name" placeholder="Your Name"/>
        <input type="email" className="email" placeholder="Your Email"/>
        <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
        <button type="submit" value='Send' className="submitBtn">Submit</button>
      </section>
    </>
  )
}

export default Contact
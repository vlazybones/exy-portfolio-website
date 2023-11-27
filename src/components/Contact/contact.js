import React, { useRef, useState } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [feedbackStyle, setFeedbackStyle] = useState({ color: 'transparent', paddingTop: '10px' });

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && email && message !== " ") {
          emailjs.sendForm('service_34hgk5r', 'template_3boxi57', form.current, 'CpWbX0vREoqEB2alC')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setFeedbackStyle({ color: '#7bed9f' });
          setFeedbackMessage("Email successfully sent!");
          setTimeout(() => {
            setFeedbackMessage("");
            setFeedbackStyle({ color: 'transparent' });
          }, 2000);
      }, (error) => {
          console.log(error.text);
      });
    }
    else {
      setFeedbackStyle({ color: '#ff6b81' });
      setFeedbackMessage("Please fill in all form data before submitting.");
    
      setTimeout(() => {
        setFeedbackMessage("");
        setFeedbackStyle({ color: 'transparent' });
      }, 2000);
    }
  };

  return (
    <>
      <section id="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">To initiate a conversation regarding potential employment opportunities: </p>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='from_name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" className="email" placeholder="Your Email" name='from_email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="message" className="msg" rows="5" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <p style={feedbackStyle}>{feedbackMessage} </p>
          <button type="submit" value='Send' className="submitBtn">Submit</button>
        </form>

      </section>
    </>
  )
}

export default Contact;

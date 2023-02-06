import React, {useRef } from 'react';
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import CommonPage from './CommonPage';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_r7rsqwu', 'template_dh7hm3h', form.current, 'FajtIl2FY0W-Kagl1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }
  return (
    <CommonPage>
      <div id="contact">
        <div className='contact'>
          <div id='contactHead'>
            <h1>Contact me</h1>
            <div id='firstChild'></div>
            <div id='secondChild'></div>
          </div>
        </div>
        <div className='question'>
          <h2>Do You Have Any Questions ?</h2>
          <h4>I'M AT YOUR SERVICE</h4>
        </div>
        <div className='waytoContact'>
          <div className='call'>
            <FaPhone className='icon'/>
            <h3>Call Me On</h3>
            <h3>8830226189</h3>
          </div>
          <div className='call'>
            <MdEmail className='icon'/>
            <h3>Email Me On</h3>
            <h3>yogeshthakare402@gmail.com</h3>
          </div>
        </div>
        <div className='question'>
          <h2>SEND ME AN EMAIL</h2>
          <h4>I'M VERY RESPONSIVE TO MESSAGES</h4>
        </div>
        <div className='messageForm'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='firstinput'>
            <input type="text" name="user_name" id="user_name" placeholder='Name' required/>
            <input type="email" name="user_email" id="user_email" placeholder='Email' required/>
            </div>
            <input type="text" name="subject" id="subject" placeholder='Subject' required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
            
            <button id='msgbtn'>Click to Send an Email</button>
          </form>
        </div>
      </div>
    </CommonPage>

  )
}

export default Contact
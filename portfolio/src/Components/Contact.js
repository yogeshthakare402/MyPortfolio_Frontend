import React from 'react';
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import CommonPage from './CommonPage';
import './Contact.css'

function Contact() {
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
          <form action="">
            <div className='firstinput'>
            <input type="text" name="name" id="name" placeholder='Name' required/>
            <input type="email" name="email" id="email" placeholder='Email' required/>
            </div>
            <input type="text" name="subject" id="subject" placeholder='Subject' required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'>Message</textarea>
            <button id='msgbtn'>Send Message</button>
          </form>
        </div>
      </div>
    </CommonPage>

  )
}

export default Contact
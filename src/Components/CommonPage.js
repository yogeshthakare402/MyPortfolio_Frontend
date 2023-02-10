import React, { useEffect } from 'react';
import './CommonPage.css';
import { Link } from 'react-router-dom';
import { MdHome, MdPerson, MdContacts, MdOutlineMenuBook, MdMenu } from 'react-icons/md';

function CommonPage({ children }) {

    const ChangeColor = () => {
        // console.log(window.location)
        
        // let url ="https://yogesh-d-thakare-portfolio.netlify.app/about"
        let url = "http://localhost:3000/about"
        
        if (window.location.href === url) {
            return "activeMenu"
        } else {
            return "selectMenu"
        }
    }
        
    
    return (
        <section id='commonPage'>
            <div id='asideLeft'>
                <div id='logo'>
                    <img src="https://marketplace.canva.com/EAE0z77esCk/2/0/1600w/canva-blue-modern-letter-c-tech-logo-design-FLOwZ3R5uro.jpg" alt="logo" />
                    <div id='animatelogo'></div>
                </div>


                <div className='menu'>
                    <Link to={"/"} className='selectMenu'>
                        <div ><MdHome className='icon' /></div>
                        <div>Home</div>
                    </Link>
                    <Link to={"/about"} className={ChangeColor()}>
                        <div><MdPerson className='icon' /></div>
                        <div>About Me</div>
                    </Link>
                    <Link to={"/services"} className='selectMenu'>
                        <div><MdMenu className='icon' /></div>
                        <div >Services</div>
                    </Link>
                    <Link to={"/portfolio"} className='selectMenu'>
                        <div><MdOutlineMenuBook className='icon' /></div>
                        <div >Portfolio</div>
                    </Link>
                    <Link to={"/contact"} className='selectMenu'>
                        <div><MdContacts className='icon' /></div>
                        <div >Contact</div>
                    </Link>
                </div>
            </div>
            <div id='asideRight'>
                {children}
            </div>
        </section>
    )
}

export default CommonPage
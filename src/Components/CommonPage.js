import React from 'react';
import './CommonPage.css';
import { Link } from 'react-router-dom';
import { MdHome, MdPerson, MdContacts, MdOutlineMenuBook, MdMenu } from 'react-icons/md';

function CommonPage({ children }) {

    const changeColor = () => {
        if (window.location.href === "http://localhost:3000/about") {
            return <div><Link to={"/about"} className='menuListFocus'>About Me</Link></div>
        } else {
            return <div><Link to={"/about"} className='menuList'>About Me</Link></div>
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
                    <div className='selectMenu'>
                        <div ><MdHome className='icon' /></div>
                        <div><Link to={"/"} className='menuList'>Home</Link></div>
                    </div>

                    <div className='selectMenu'>
                        <div><MdPerson className='icon' /></div>
                        {changeColor()}
                    </div>
                    <div className='selectMenu'>
                        <div><MdMenu className='icon' /></div>
                        <div ><Link to={"/services"} className='menuList'>Services</Link></div>
                    </div>
                    <div className='selectMenu'>
                        <div><MdOutlineMenuBook className='icon' /></div>
                        <div ><Link to={"/portfolio"} className='menuList'>Portfolio</Link></div>
                    </div>
                    <div className='selectMenu'>
                        <div><MdContacts className='icon' /></div>
                        <div ><Link to={"/contact"} className='menuList'>Contact</Link></div>
                    </div>
                </div>
            </div>
            <div id='asideRight'>
                {children}
            </div>
        </section>
    )
}

export default CommonPage
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import CommonPage from './CommonPage';

function Home() {
    console.log("hello");

return (
    <CommonPage>
        <div id='homeInfo'>
            <div className='info'>
                <h1>Hello, my name is <space className='name'> Yogesh Thakare</space></h1>
                <h2>I am a <space className='name'>Full Stack Developer</space></h2>
                <div id='para'>I'm Full Stack Developer with extensive experience for over 1 Years. <br />
                    My expertise is to create Frontend app and Backend api to make page responsive
                </div>
                <button id='btn'><Link to={"/about"} className='aboutPage'>More about me</Link></button> 
            </div>
            <div id='passport'>
                <div id='upper'></div>
                <div id='lower'></div>
                <img src={window.location.origin + '/Yogesh_Thakare.png'} alt="passport" />
            </div>
        </div>
    </CommonPage>

)
}

export default Home
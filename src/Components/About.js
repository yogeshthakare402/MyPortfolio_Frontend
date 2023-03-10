import React from 'react';
import CommonPage from './CommonPage';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
    // console.log("hi");
    let cvurl = 'https://yogesh-d-thakare-portfolio.netlify.app/Yogesh_Devidas_Thakare-V7-2023.pdf';
    // let cvurl = 'http://localhost:3000/Yogesh_Devidas_Thakare-V7-2023.pdf'
    const filename = cvurl.split("/").pop()

    return (
        <CommonPage>
            <div id="about">
                <div className='about'>
                    <div id='head'>
                        <h1 >About me</h1>
                        <div id='firstChild'></div>
                        <div id='secondChild'></div>
                    </div>
                    <div id='infoPara'>
                        <h2>I'm Yogesh Thakare and <span className='name'>Full Stack Developer</span> </h2>
                        <div className="para">I am a Full-Stack developer with experience in designing Frontend and Backend API, User Interface (UI) web applications, <br /> and responsive websites using HTML5, CSS3, JavaScript, React.Js, Node.js, Express.js, and MongoDB. My role is to write and style <br /> the front-end components that meet the requirements of our mocks. <br />
                            -Used GitHub for source code management and for version control. <br />
                            -Capable of quickly learning and delivering solutions as an individual and as part of a team.</div>
                    </div>
                </div>

                <div className='aboutSkills'>
                    <div className='list'>
                        <ul>
                            <li><span className='listData'>Birthday:</span> 08 June 1996</li>
                            <hr />
                            <li><span className='listData'>Age:</span> 26 Years</li>
                            <hr />
                            <li><span className='listData'>Degree:</span> Mechanical Engineering</li>
                            <hr />
                            <li><span className='listData'>Email:</span> yogeshthakare402@gmail.com</li>
                            <hr />
                            <li><span className='listData'>Phone:</span> 8830226189 / 7798871276</li>
                            <hr />
                            <li><span className='listData'>City:</span> Mumbai</li>
                            <hr />
                            <li><span className='listData'>GitHub:</span><Link className='gitLink' to="https://github.com/yogeshthakare402" target="_blank">https://github.com/yogeshthakare402</Link> </li>
                            <hr />

                            <button id='btn'><a className='gitLink' href={cvurl} download={filename}>Download Resume</a> </button>
                        </ul>
                    </div>
                    <div id='rangelist'>
                        <div className='rangeList'>
                            <div className="rangeCss">
                                <label htmlFor="javascript">Javascript</label>
                                <div>50%</div>
                            </div>
                            <div className='container'>
                                <div id='javascript'></div>
                            </div>
                        </div>
                        <hr />
                        <div className='rangeList'>
                            <div className="rangeCss">
                                <label htmlFor="html">HTML</label>
                                <div>50%</div>
                            </div>

                            <div className='container'>
                                <div id='html'></div>
                            </div>
                        </div>
                        <hr />
                        <div className='rangeList'>
                            <div className="rangeCss">
                                <label htmlFor="css">CSS</label>
                                <div>50%</div>
                            </div>

                            <div className='container'>
                                <div id='css'></div>
                            </div>
                        </div>
                        <hr />
                        <div className='rangeList'>
                            <div className="rangeCss">
                                <label htmlFor="react">React.js</label>
                                <div>50%</div>
                            </div>

                            <div className='container'>
                                <div id='react'></div>
                            </div>
                        </div>
                        <hr />
                        <div className='rangeList'>
                            <div className="rangeCss">
                                <label htmlFor="node">Node.js</label>
                                <div>50%</div>
                            </div>

                            <div className='container'>
                                <div id='node'></div>
                            </div>
                        </div>
                        <hr />
                        <div className='rangeList'>
                            <div className="rangeCss">
                                <label htmlFor="mongo">MongoDB</label>
                                <div>50%</div>
                            </div>

                            <div className='container'>
                                <div id='mongo'></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='eduExp'>
                    <div className='education'>
                        <h2>Education</h2>
                        <div className='line'></div>
                        <div className='degree'>
                            <h3>Bachlore of Mechanical Engineering</h3>
                            <h4>Sinhgad Institute Of Technology, Lonavala, Pune</h4>
                            <h5>Jul 2016 - Aug 2019</h5>
                            <h5>CGPA- 8.56</h5>
                        </div>
                        <div className='line'></div>
                        <div className='degree'>
                            <h3>Diploma in Mechanical Engineering</h3>
                            <h4>Government Polytechnic Washim</h4>
                            <h5>Jun 2014 - Jun 2016</h5>
                            <h5>Percentage - 81.24%</h5>
                        </div>
                        <div className='line'></div>
                        <div className='degree'>
                            <h3>Electrical Science-HSC-12th</h3>
                            <h4>Vidyabharati Junior College Karanja (Lad)</h4>
                            <h5>Jun 2012 - Jun 2014</h5>
                            <h5>Percentage - 70.20%</h5>
                        </div>
                        <div className='line'></div>
                        <div className='degree'>
                            <h3>SSC-10th</h3>
                            <h4>Shree Narsinha Vidhyalaya Dhamni (Khadi)</h4>
                            <h5>Jun 2010 - Jun 2011</h5>
                            <h5>Percentage - 74.24%</h5>
                        </div>
                    </div>
                    <div className='experience'>
                        <h2>Experience</h2>
                        <div className='line'></div>
                        <div className ='exp'>
                            <h3>Full Stack Developer- Internship</h3>
                            <h4>10X Academy</h4>
                            <h5>July 2022 - Dec 2022</h5>
                            <p>Completed Full Stack Developer Course and learned skills like HTML, CSS, Javascript, React.js, Node.js, ExpressJS, MongoDB. Worked on various projects like Real Estate Project, Age Calculator, Instaclone App etc. during the internship period</p>
                        </div>
                        <div className='line'></div>
                        <div className='exp'>
                            <h3>Technical Hiring - Consultant</h3>
                            <h4>Stanley David and Associates</h4>
                            <h5>Aug 2021 - Present</h5>
                            <p>Responsible for End to end recruitment cycle. Followed up with candidates for better joining ratios and successfully managed to enhance candidate experience Understanding the client requirements & source senior candidates from Job portals like Naukri, Linkedin, Monster India.
                            </p>
                        </div>
                        <div className='line'></div>
                        <div className='exp'>
                            <h3>Computer Aided Design Engineer</h3>
                            <h4>Vivek Amberkar Product Design</h4>
                            <h5>Feb 2021 - Aug 2021</h5>
                            <p>Responsibilities include the Design and implementation of New Product development from concept to production line start-up Preparing rough sketches from verbal instructions. Design and development of plastic enclosures and sheet metal enclosures Developed part & assembly drawing (2D & 3D) using CAD like Solidworks, Fusion 360.Studying and converting 2D data to 3D data.
                            </p>
                        </div>
                        <div className='line'></div>
                        <div className='exp'>
                            <h3>Quality Engineer</h3>
                            <h4>Leonine Engineers Private Limited</h4>
                            <h5>Sep 2020 - Feb 2021</h5>
                            <p>Do various Quality checks to avoid defects in the products. Involved in Pre-Process, In Process andpost process Inspection Used Six Sigma, 5S, Kaizen, to improve the Production and Quality of product and maintain the Standard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='certificates'>
                    <div id='certiHead'> <h2>Certificates</h2></div>

                    <div className='certi'>
                        <img src={window.location.origin + '/Yogesh_Thakare_FullStack_Certficate.jpg'} alt="Fullstack_Certificate" />
                    </div>
                </div>
            </div>
        </CommonPage>

    )
}

export default About
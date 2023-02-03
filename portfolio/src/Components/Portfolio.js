import React from 'react';
// import Iframe from 'react-iframe';
import CommonPage from './CommonPage';
import './Portfolio.css'

function Portfolio() {
  return (
    <CommonPage>
      <div id="portfolio">
        <div className='portfolio'>
          <div id='portHead'>
            <h1>Portfolio</h1>
            <div id='firstChild'></div>
            <div id='secondChild'></div>
          </div>
        </div>
        <div className='portfolio'>
          <h2>My Last Projects are :- </h2>
        </div>
        <div>
          <div id='card'>
            <div className='card'>
            <img id='realestate' src={window.location.origin + '/realestate.png'} alt="realestate" onClick={console.log("hello")}/>
            <h3>Real Estate Project</h3>
            </div>
          
          </div>
        </div>
      </div>
    </CommonPage>

  )
}

export default Portfolio
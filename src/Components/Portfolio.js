import React from 'react';
// import Iframe from 'react-iframe';
import CommonPage from './CommonPage';
import './Portfolio.css';
import { Link } from 'react-router-dom';

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
              <Link className='links' to={"https://reale-estate-app.netlify.app/"} target={"_blank"}>
                <img id='realestate' src={window.location.origin + '/realestate.png'} alt="realestate" onClick={console.log("hello")} />
                <h3>Real Estate Project</h3>
              </Link>
            </div>
            

            <div className='card'>
            <Link className='links' to={"https://shopping-cart-yt.netlify.app/"} target={"_blank"}>
              <img id='shoppingcart' src={window.location.origin + '/Shopping_Cart.png'} alt="shoppingCart" onClick={console.log("hello")} />
              <h3>Shopping Cart</h3>
              </Link>
            </div>

            {/* <div className='card'>
            <img id='shoppingcart' src={window.location.origin + '/Shopping_Cart.png'} alt="shoppingCart" onClick={console.log("hello")}/>
            <h3>Shopping Cart</h3>
            </div>

            <div className='card'>
            <img id='shoppingcart' src={window.location.origin + '/Shopping_Cart.png'} alt="shoppingCart" onClick={console.log("hello")}/>
            <h3>Shopping Cart</h3>
            </div> */}

          </div>
        </div>
      </div>
    </CommonPage>

  )
}

export default Portfolio
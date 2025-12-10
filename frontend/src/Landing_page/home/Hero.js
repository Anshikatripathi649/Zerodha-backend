import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5' style={{textAlign: "center"}}>
            <div className='row'>
                <div className='mb-5'>
                      <img src='media/images/homeHero.png' alt='Hero Image' style={{width:"100%"}}></img>
                </div>
                <h1 className='fs-2 mt-5'>Invest in everything</h1>
                <p className='fs-4 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" className='signupbtn btn btn-primary fs-5 mb-5' style={{maxWidth:"25%", margin:"0 auto"}}>
                    Sign up for free
                </Link>
            </div>
        </div>
     );
}

export default Hero;
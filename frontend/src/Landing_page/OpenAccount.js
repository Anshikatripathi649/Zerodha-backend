import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccounts() {
    return ( 
        <div className='container p-4 mb-5' style={{textAlign: "center"}}>
            <div className='row'>
                <h1 className='fs-3 mt-5 mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 text-muted mb-4' >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                  <Link to="/signup" className='signupbtn btn btn-primary fs-5 mb-5' style={{maxWidth:"25%", margin:"0 auto"}}>
                    Sign up for free
                </Link>
            </div>
        </div>
     );
}

export default OpenAccounts;
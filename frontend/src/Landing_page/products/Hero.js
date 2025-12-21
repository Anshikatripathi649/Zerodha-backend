import React from 'react';

function Hero() {
    return ( 
        <div className="container p-4">
             <div className='row p-5 m-5 border-bottom mb-5' style={{textAlign:"center"}}>
                <h1 className='fs-2 mb-3 px-5' style={{color:"#424242"}}>
                   Zerodha Products
                </h1>
                <p className='fs-4' style={{color:"#424242"}}>
                    Sleek, modern, and intuitive trading platforms
                </p>
                <p className='fs-5 mb-5'>
                    Check out our 
                    <a href=''
                    style={{textDecoration:"none" , color:"#387ED1"}}> investment offerings 
                    <i class="fa-solid fa-arrow-right-long"></i>
                    </a> 
                </p>
            </div>
        </div>
     );
}

export default Hero;
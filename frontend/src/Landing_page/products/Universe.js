import React from 'react';

function Universe() {
    return ( 
        <div className="container text-center ">
            <div className="row p-5">
                <h1 className="fs-3 mb-4"> 
                    The Zerodha Universe
                </h1>
                <p className='mb-5 fs-5'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className='row'>
                    <div className="col m-5 " style={{color:"#9B9B9B", fontSize:"14px"}}>
                        <div className='mb-5'>
                            <img src='media/images/zerodhaFundhouse.png' style={{height:"55px", width:"60%"}}
                            className='mb-4'
                        />
                        <p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                        </div>
                          <div className='mt-5'>
                             <img src='media/images/streakLogo.png'  style={{height:"55px", width:"60%"}}
                             className='mb-4'/>
                        <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                         </div>
                    </div>
                    <div className="col m-5"  style={{color:"#9B9B9B", fontSize:"14px"}}>
                         
                         <div className='mb-5'>
                            <img src='media/images/sensibullLogo.svg'  style={{height:"55px", width:"60%"}}
                            className='mb-4'/>
                        <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more. 

                        </p>
                        </div>
                         <div className='mt-5'>
                            <img src='media/images/smallcaseLogo.png'  style={{height:"55px", width:"60%"}}
                            className='mb-4'/>
                        <p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                         </div>

                    </div>
                    <div className="col m-5"  style={{color:"#9B9B9B", fontSize:"14px"}}>
                        <div className='mb-5'>
                             <img src='media/images/tijori.svg'  
                             style={{height:"55px", width:"60%"}} className='mb-4'/>
                        <p> Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                            </p>
                        </div>
                        <div className='mt-5' >
                             <img src='media/images/dittoLogo.png' 
                             style={{height:"55px", width:"60%"}} className='mb-4'/>
                        <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                        </div>
 
                    </div>
                    
                </div>
                 <button className='signupbtn btn btn-primary fs-5 mb-5' style={{maxWidth:"25%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Universe;
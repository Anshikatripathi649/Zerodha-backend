import React from 'react';

function Hero() {
    return ( 
        <div className='container p-4'>
            <div className='row p-5 mb-5 text-center' style={{textAlign:"center"}}>
                <h1 className='fs-2 px-5 mb-4 mt-4' style={{color:"#424242"}}>
                     Charges
                </h1>
                <p className='fs-4' style={{color:"#9B9B9B"}}> List of all charges and taxes</p>
            </div>
             <div className='row p-5 text-center'>
                        <div className='col p-3'>
                            <img src='media/images/pricing0.svg'
                            style={{width:"250px" , height:"184.78px"}}
                            className=''></img>
                            <h1 className='fs-2 mt-4'  style={{color:"#212529"}}>Free equity delivery</h1>
                            <p className='text-muted fs-5 mx-4 mt-4 mb-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        </div>
                        <div className='col p-3'>
                            <img src='media/images/other-trades.svg'
                            style={{width:"250px" , height:"184.78px"}}
                             className=''></img>
                             <h1 className='fs-2 mt-4' style={{color:"#212529"}}>Intraday and F&O trades</h1>
                            <p className='text-muted fs-5 mx-4 mt-4 mb-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                        </div>
                        <div className='col p-3'>
                            <img src='media/images/pricing0.svg'
                             style={{width:"250px" , height:"184.78px"}}
                             className=''></img>
                             <h1 className='fs-2 mt-4' style={{color:"#212529"}}>Free direct MF</h1>
                            <p className='text-muted fs-5 mx-4 mt-4 mb-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                        </div>
                    </div>
        </div>
        
     );
}

export default Hero;
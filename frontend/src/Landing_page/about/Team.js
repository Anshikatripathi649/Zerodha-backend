import React from 'react';

function Team() {
    return ( 
         <div className='container px-5 '>
            <div className='row' style={{textAlign:"center"}}>
                <h1 className='fs-3 m-4 p-5' style={{color:"#424242"}}>
                    People
                </h1>
            </div>
            <div className="row mb-5 pb-5 mt-4"
                 style={{lineHeight:"1.6", color:"#424242"}}>
                <div className="col fs-5 text-center">
                   <img src='media/images/nithinKamath.jpg'
                   style={{width:"60%", borderRadius:"100%"}}></img>
                   <h5 className='mt-4' style={{color:"#666"}}>Nitin Kamath</h5>
                   <h6 className='mt-3' style={{color:"#666"}}>Founder, CEO</h6>
                </div>
                <div className="col fs-5 " style={{color:"#424242"}}>
                     <p>
                       Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href='' style={{textDecoration:"none", color:"#387ED1"}}>Homepage</a> / 
                        <a href='' style={{textDecoration:"none", color:"#387ED1"}}>TradingQnA</a> / 
                        <a href='' style={{textDecoration:"none", color:"#387ED1"}}>Twitter</a> 
                        
                    </p>
                     
                </div>
            </div>

        </div>
     );
}

export default Team;
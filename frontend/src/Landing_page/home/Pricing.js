import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-4'>
            <div className='row p-4'>
                <div className='col-6 fs-5 p-4' style={{textAlign:"left"}}>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p className='mb-4 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                         <a href="" 
                     style={{textDecoration:"none",
                        display:"inline"
                     }}>
                        See pricing<i class="fa-solid fa-arrow-right-long"></i>
                     </a>
                </div>
                <div className='col-6 p-4'>
                    <div className='row'>
                        <div className='col d-flex  align-items-center'>
                            <img src='media/images/pricing0.svg'
                            style={{width:"70%"}}
                            className='px-0 mx-0'></img>
                            <p style={{fontSize:"11px" , padding:"0px", margin:"0px"}}
                            className='text-muted'>Free account opening</p>
                        </div>
                        <div className='col d-flex  align-items-center'>
                            <img src='media/images/pricing0.svg'
                            style={{width:"70%"}}
                             className='px-0 mx-0'></img>
                            <p style={{fontSize:"11px" , padding:"0px", margin:"0px"}}
                            className='text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col d-flex  align-items-center'>
                            <img src='media/images/other-trades.svg'
                            style={{width:"70%"}}
                             className='px-0 mx-0'></img>
                            <p style={{fontSize:"11px" , padding:"0px", margin:"0px"}}
                            className='text-muted'> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default Pricing;
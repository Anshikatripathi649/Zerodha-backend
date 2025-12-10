import React from 'react';

function Awards() {
    return ( 
        <div className='container p-4'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 mt-4'>
                    <h1 className='fs-3' >Largest stock broker in India</h1>
                    <p style={{textAlign:"left"}} className='fs-5'>
                        2+ million Zerodha clienst contibute to over 15% of all retail order volumes
                        in India daily by trading and investing in:
                    </p>
                    <div className="row">
                         <div className='col-6 p-4'>
                        <ul style={{textAlign:"left"}} >
                            <li><p>Futures and Options</p></li>
                            <li><p></p>Commodity derivatives</li>
                            <li><p></p>Currency derivaties</li>
                        </ul>
                    </div>
                     <div className='col-6 p-4' >
                         <ul style={{textAlign:"left"}} className='pl-0'>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Gove.securities</p></li>
                        </ul>
                     </div>
                      <img src='media/images/pressLogos.png'
                      style={{width:"90%"}}
                      className='mt-4'></img>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;
import React from 'react';

function Brokerage() {
    return ( 
    <>
    <div className='container border-top'>
        <div className='row mt-5 pt-5'>
            <div className='col '>
                 <a href='' style={{textDecoration:"none", color:"#387ED1"}}
                 >
                    <h2 className='text-center fs-3'>Brokerage calculator</h2> </a> 
                 <ul style={{color:"#9B9B9B", lineHeight:"1.8"}}
                 className='mt-5'>
                    <li className='mb-3 fs-6'>Call & Trade and RMS auto-squareoff: 
                        Additional charges of &#8377;50 + GST per order.
                    </li>
                    <li className='mb-3 fs-6'> contract notes will be sent via e-mail.</li>
                    <li className='mb-3 fs-6'>Physical copies of contract notes, if required,
                        shall be charged &#8377;20 per contract note. Courier charges apply.

                    </li> 
                    <li className='mb-3 fs-6'>For NRI account (non-PIS), 0.5% or &#8377;100 per
                        executed order for equity (whichever is lower).
                    </li>
                    <li className='mb-3 fs-6'>For NRI account (PIS), 0.5% or &#8377;200 per
                        executed order for equity (whichever is lower).</li>
                    <li className='mb-3 fs-6'> If the account is in debit balance, any order placed will be 
                        charged &#8377;40 per executed order instead of &#8377;20 
                        per executed order.
                    </li>
                 </ul>        
            </div>
            <div className='col'>
                <a href=''  style={{textDecoration:"none", color:"#387ED1"}}>
                    <h2 className='text-center fs-3'> List of charges</h2> </a>    
            </div>
                        
        </div>
    </div>
    </>
);
}

export default Brokerage;
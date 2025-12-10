import React from 'react';

function Stats() {
    return ( 
        <div className="container p-4">
            <div className='row p-4'>
                <div className='col-6' style={{textAlign:"left"}}>
                    <h1 className='fs-3'>Trust with confidence</h1>
                        <h2 className='fs-4 mt-5'>Customer-first always</h2>
                        <p className='text-muted fs-5 mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                        <p className='text-muted fs-5 mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        <h2 className='fs-4 mt-4'>The Zerodha universe</h2>
                        <p className='text-muted fs-5 mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h2 className='fs-4 mt-4'>Do better with money</h2>
                        <p className='text-muted fs-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 ' style={{textAlign:"center"}}>
                    <img src='media/images/ecosystem.png' alt="ecosystem img"
                    style={{width:"100%", height:"88%"}}
                    className='pt-5'></img>
                    <a href='#' style={{textDecoration:"none"}}
                     className='mx-5'>
                        Explore our products
                        <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    <a href='#' style={{textDecoration:"none"}}>

                        Try Kite demo 
                        <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                </div>
            </div>
        </div>
     );
}

export default Stats;
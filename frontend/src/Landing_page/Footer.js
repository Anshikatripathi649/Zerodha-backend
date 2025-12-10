import React from 'react';

function Footer() {
    return ( 
        <div className='p-5 border-top'style={{backgroundColor:"#fbfbfb"}} >
            <div className='row mb-5 footer-a p-5'>
                <div className='col mx-5 m-3'>
                    <img src='media/images/logo.svg' alt='logo img'
                    style={{width:"70%" }}></img>
                    <p className='text-muted pt-3'> &copy; 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p className='text-muted'>All rights reserved.</p>
                    <p className='fs-5 mb-3 text-muted'>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-square-facebook mx-2"></i>
                        <i class="fa-brands fa-instagram mx-2"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        
                    </p>
                    <hr/>
                    <p className='fs-5 text-muted'>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-whatsapp mx-2"></i>
                        <i class="fa-brands fa-telegram"></i>
                    </p>
                </div>
                <div className='col mx-2 m-3 footer-a'>
                    <p className='fs-5'>Account</p>
                    <a href='' style={{textDecoration:"none"}}>Open demat account</a>
                    <br/>
                    <a href=''>Minor demat account</a><br/>
                    <a href=''>NRI demat account</a> 
                    <br/>
                    <a href=''>Commodity</a>
                    <br/>
                    <a href=''>Dematerialisation</a>
                    <br/>
                    <a href=''>Fund transfer</a>
                    <br/> 
                    <a href=''>MTF</a>
                    <br/>
                    <a href=''>Referral program</a>
                </div>
                <div className='col mx-5 m-3 footer-a'>
                     <p className='fs-5'>Support</p>
                    <a href=''>Contact us</a>
                    <br/>
                    <a href=''>Support portal</a>
                    <br/>
                    <a href=''>How to file a complaint?</a> 
                    <br/>
                    <a href=''>Status of your complaints</a>
                    <br/>
                    <a href=''>Bulletin</a>
                    <br/>
                    <a href=''>Circular</a> 
                    <br/>
                    <a href=''>Z-Connect blog</a>
                    <br/>
                    <a href=''>Downloads</a>
                </div>
                <div className='col mx-5 m-3 footer-a'>
                     <p className='fs-5'>Company</p>
                    <a href=''>About</a>
                    <br/>
                    <a href=''>Philosophy</a>
                    <br/>
                    <a href=''>Press & media</a> 
                    <br/>
                    <a href=''>Careers</a>
                    <br/>
                    <a href=''>Zerodha Cares (CSR)</a><br/>
                    <a href=''>Zerodha.tech</a> 
                    <br/>
                    <a href=''>Open source</a>
                     
                </div>
                <div className='col mx-5 m-3 footer-a'>
                    <p className='fs-5'>Quick links</p>
                    <a href=''>Upcoming IPOs</a>
                    <br/>
                    <a href=''>Brokerage charges</a>
                    <br/>
                    <a href=''>Market holidays</a>
                    <br/>
                    <a href=''>Economic calendar</a>
                    <br/>
                    <a href=''>Calculators</a>
                    <br/>
                    <a href=''>Markets</a>
                    <br/>
                    <a href=''>Sectors</a>
                </div>
            </div>
            <p className='footer-para px-5 mx-5 '>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p className='footer-para px-5 mx-5'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p className='footer-para px-5 mx-5'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

            <p className='footer-para px-5 mx-5'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p className='footer-para px-5 mx-5'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p className='footer-para px-5 mx-5'>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

            <p className='footer-para px-5 mx-5'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

            <p></p>
            <p></p>
        </div>
     );
}

export default Footer;
import React from 'react';

function CreateTicket() {
    return ( 
        <>
        <div className='container p-5'>
         <h1 className='fs-2 mb-5'>To create a ticket, select a relevant topic</h1>
          <div className='row'>
            <div className='col-8'>
              <div class="accordion mb-4" >
            <div class='accordion-item'>
                <h2 class="accordion-header">
              <button class="accordion-button border-bottom fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAccountOpening" aria-expanded="true" aria-controls="collapseOne"
              style={{boxShadow:"none", backgroundColor:"white"}}>
                    <i class="fa-solid fa-circle-plus fs-3 m-1" 
                    style={{color:"#638cecff"}}
                 ></i>
                Account Opening
              </button>
            </h2>
            <div id="collapseAccountOpening" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
             <ul>
                <li><a class="dropdown-item" href="#">Resident individual</a></li>
                <li><a class="dropdown-item" href="#"> Minor</a></li>
                <li><a class="dropdown-item" href="#">Non Resident Indian (NRI)</a></li>
                <li><a class="dropdown-item" href="#">Company, Partnership, HUF and LLP </a></li>
                <li><a class="dropdown-item" href="#">Glossary</a></li>
             </ul>
            </div>
            </div>
             
           </div>
           
            </div>
            <div class="accordion mb-4">
                <div class='accordion-item'>
                    <h2 class="accordion-header">
                  <button class="accordion-button border-bottom fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZerodhaAccount" aria-expanded="true" aria-controls="collapseOne"
                  style={{boxShadow:"none", backgroundColor:"white"}}>
                    
                    <i class="fa-regular fa-circle-user fs-3 m-1" 
                    style={{color:"#638cecff"}}></i>
                    Your Zerodha Account 
                  </button>
                </h2>
                <div id="collapseZerodhaAccount" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <ul>
                    <li><a class="dropdown-item" href="#">Your Profile</a></li>
                    <li><a class="dropdown-item" href="#">Account modification</a></li>
                    <li><a class="dropdown-item" href="#"> Client Master Report (CMR) and Depository Participant (DP)</a></li>
                    <li><a class="dropdown-item" href="#">Company, Partnership, HUF and LLP </a></li>
                    <li><a class="dropdown-item" href="#">Glossary</a></li>
                 </ul>
                </div>
                </div>
                 
              </div>
               
            </div>
            <div class="accordion mb-4">
                <div class='accordion-item'>
                    <h2 class="accordion-header">
                  <button class="accordion-button border-bottom fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseKite" aria-expanded="true" aria-controls="collapseOne"
                  style={{boxShadow:"none", backgroundColor:"white"}}>
                    <i class="fa-solid fa-chart-line fs-3 m-1" 
                    style={{color:"#638cecff"}}></i>
                    Kite
                  </button>
                </h2>
                <div id="collapseKite" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <ul>
                    <li><a class="dropdown-item" href="#">IPO </a></li>
                    <li><a class="dropdown-item" href="#">Trading FAQs</a></li>
                    <li><a class="dropdown-item" href="#">Margin Trading Facility (MTF) and Margins</a></li>
                    <li><a class="dropdown-item" href="#">Charts and orders</a></li>
                    <li><a class="dropdown-item" href="#">Alerts and Nudges</a></li>
                    <li><a class="dropdown-item" href="#">General</a></li>
                 </ul>
                </div>
                </div>
                 
              </div>
               
            </div>
            <div class="accordion mb-4">
                <div class='accordion-item'>
                    <h2 class="accordion-header">
                  <button class="accordion-button border-bottom fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFunds" aria-expanded="true" aria-controls="collapseOne"
                  style={{boxShadow:"none", backgroundColor:"white"}}>
                     <i class="fa-solid fa-indian-rupee-sign fs-3 m-1" 
                    style={{color:"#638cecff"}}></i>
                    Funds
                  </button>
                </h2>
                <div id="collapseFunds" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <ul>
                    <li><a class="dropdown-item" href="#">Add money</a></li>
                    <li><a class="dropdown-item" href="#">Withdraw money</a></li>
                    <li><a class="dropdown-item" href="#">Add bank accounts</a></li>
                    <li><a class="dropdown-item" href="#">eMandates</a></li>
                     
                 </ul>
                </div>
                </div>
                 
              </div>
               
            </div>
            <div class="accordion mb-4">
                <div class='accordion-item'>
                    <h2 class="accordion-header">
                  <button class="accordion-button border-bottom fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConsole" aria-expanded="true" aria-controls="collapseOne"
                  style={{boxShadow:"none", backgroundColor:"white"}}>
                    <i class="fa-solid fa-chart-pie fs-3 m-1" 
                    style={{color:"#638cecff"}}></i>
                    Console
                  </button>
                </h2>
                <div id="collapseConsole" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <ul>
                    <li><a class="dropdown-item" href="#">Portfolio</a></li>
                    <li><a class="dropdown-item" href="#">Corporate actions</a></li>
                    <li><a class="dropdown-item" href="#">Funds statement</a></li>
                    <li><a class="dropdown-item" href="#"> Reports </a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Segments</a></li>
                 </ul>
                </div>
                </div>
                 
              </div>
               
            </div>
            <div class="accordion mb-4">
                <div class='accordion-item'>
                    <h2 class="accordion-header">
                  <button class="accordion-button border-bottom fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCoin" aria-expanded="true" aria-controls="collapseOne"
                  style={{boxShadow:"none", backgroundColor:"white"}}>
                    <i class="fa-solid fa-chart-column fs-3 m-2" 
                    style={{color:"#638cecff"}}></i>
                    Coin
                  </button>
                </h2>
                <div id="collapseCoin" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <ul>
                    <li><a class="dropdown-item" href="#">Mutual funds</a></li>
                    <li><a class="dropdown-item" href="#"> National Pension Scheme (NPS)</a></li>
                    <li><a class="dropdown-item" href="#">Features on Coin</a></li>
                    <li><a class="dropdown-item" href="#">Payments and Orders</a></li>
                    <li><a class="dropdown-item" href="#">General</a></li>
                 </ul>
                </div>
                </div>
                 
              </div>
               
            </div>
           
            </div>
             <div className='col-4  px-4'>
              <div className='row'
               style={{backgroundColor:"#fce7cbce" , borderLeft:"10px solid orange", color:"#397DD0",
                fontSize:"16px"
               }}>
                <ul className=''>
                  <li className='m-3'><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                  <li className='m-3'><a href=''>Rights Entitlements listing in Novenber 2025</a></li>
                </ul>
               
              </div>
                <div className='row mt-4 border'>
                <h1 style={{backgroundColor:"#F6F6F6" , fontSize:"16px",}}
                  className='p-3 border-bottom'>Quick links</h1>
                <ol style={{ color:"#397DD0"}}>
                  <li className='m-4 '>Track account opening </li>
                  <li className='m-4 '>Track segment activation</li>
                  <li className='m-4'>Intraday margins</li>
                  <li className='m-4 '>Kite user manual</li>
                  <li className='m-4 '>Learn how to create a ticket</li>
                   
                </ol>
               </div>
            </div>
          </div>
        </div>
        </>
     );
}

export default CreateTicket;
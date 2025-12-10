import React from 'react';

function Hero() {
    return ( 
        <div className=' p-5' style={{color:"#424242", backgroundColor:"#F6F6F6"}}>
             <div className='container px-4'>
                <div className='row  p-2 d-flex flex-row  justify-content-around'>
                  <div className='col-8 fs-2'> 
                     <h1 style={{fontWeight:"bolder" }}>Support Portal</h1>
                 </div>

                 <div className='col-4 d-flex justify-content-end align-items-center'> 
                     <button className='btn btn-primary fs-5'>My tickets</button>
                 </div>
                </div>
                <div className='row p-2 mt-4'>
                    <div class="input-group searchBox  m-3" 
                      style={{boxShadow:"0px 0px 3px 0 rgba(0, 0, 0, 0.2)", width:"100%"}}>
                    <div class="input-group-text p-3 p-3"
                    style={{backgroundColor:"white"}}>
                       <i class="fa-solid fa-magnifying-glass fs-5"
                       style={{color:"#424242"}}></i>
                    </div>
                    <input type="text" class="form-control p-3" aria-label="Text"
                    placeholder="Eg: How do I open my account, How do i activate F&O..."
                    style={{border:"1px solid #e2dfdfff", borderLeft:"none", boxShadow:"none"}} />
                    </div>
                </div>
             </div>
        
            
        </div>
     );
}

export default Hero;
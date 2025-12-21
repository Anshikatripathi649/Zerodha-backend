import React from 'react';

function RightSection({
    imageURL,
    productName, 
    productDescription,
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore
}) {
    return ( 
        <div className='container p-5 mt-5' >
        <div className='row d-flex gap-5 align-item-center'>
        <div className='col mt-5 p-5'>
            <h1 className='fs-4 mt-5' style={{color:"#424242"}}>{productName}</h1>
            <p className='fs-5 mt-4' style={{color:"#424242"}}>{productDescription}</p>
             <div style={{color:"#387ED1"}}>
                <a href='' 
                style={{textDecoration:"none"}}>{tryDemo}<i class="fa-solid fa-arrow-right-long fs-5"></i></a>
                <br/>
                <a href='' 
                style={{textDecoration:"none"}}>{learnMore}<i class="fa-solid fa-arrow-right-long fs-5 mb-3"></i></a>
                </div>
                <div className='d-flex gap-4'>
                    <a href=''>
                    <img src={googlePlay}/>
                </a>
                <a href=''>
                    <img src={appStore}/>
                </a>
                </div>
                
        </div>
        <div className='col'>
            <img src={imageURL}/>
          </div>
        </div>
       </div>
     );
}

export default RightSection;
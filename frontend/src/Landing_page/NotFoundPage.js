import React from 'react';

function NotFoundPage() {
    return ( 
        <div className='container p-4 mb-5' style={{textAlign: "center"}}>
            <div className='row'>
                <h1 className='fs-3 mt-5 mb-4'>404! Not Found</h1>
                <p className='fs-5 text-muted mb-4' >
                    Sorry, the page you are looking for does not exist.
                </p>
                 
            </div>
        </div>
     );
}

export default NotFoundPage;
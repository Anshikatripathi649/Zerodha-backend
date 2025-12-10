import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
       <nav class="navbar navbar-expand-lg border-bottom p-3">
  <div class="container d-flex justify-content-evenly">
    <Link to='/' class='navbar-brand'>
     <img src="media/images/logo.svg"
    style={{width:"30%", marginLeft:"5%"}}
    className=''></img>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5 px-5" id="navbarSupportedContent">
      <form class="d-flex mx-5 px-5">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"
        style={{marginLeft:"50%"}}>
        <li class="nav-item"
        className='text-muted'>
          <Link class="nav-link" aria-current="page" to='/signup'>Signup</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" aria-current="page" to='/about'>About</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" aria-current="page" to='/product'>Products</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" aria-current="page" to='/pricing'>Pricing</Link>
        </li>
         <li class="nav-item">
          <Link class="nav-link" aria-current="page" to='/support'>Support</Link>
        </li>
         <li class="nav-item">
           <a 
             class="nav-link" 
             aria-current="page" 
             href="https://www.anotherreactapp.com/path"  
             target="_blank"  
             rel="noopener noreferrer"  
           >
    Support
  </a>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
     );
}

export default Navbar;
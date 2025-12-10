import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'; //
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup'
import AboutPage from './Landing_page/about/AboutPage'
import ProductPage from './Landing_page/products/ProductPage'
import PricingPage from './Landing_page/pricing/PricingPage';
import SupportPage from './Landing_page/support/SupportPage'
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFoundPage from './Landing_page/NotFoundPage';
import Login from "./Landing_page/login/Login";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CookiesProvider> 
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </CookiesProvider>
);


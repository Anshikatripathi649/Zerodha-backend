import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { CookiesProvider } from 'react-cookie'; //
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccounts from '../OpenAccount';
import Education from './Education';

const API_BASE_URL ="http://localhost:3000" || "https://zerodha-backend-gmh3.onrender.com";

function HomePage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      const { data } = await axios.post(
          `${API_BASE_URL}`,
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
    return ( 
        <>
      <ToastContainer />
        <Hero/> 
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education></Education>
        <OpenAccounts/>
        </>
     );
}

export default HomePage;
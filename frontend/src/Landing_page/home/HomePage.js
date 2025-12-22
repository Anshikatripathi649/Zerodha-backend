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

const API_BASE_URL ="https://zerodha-backend-gmh3.onrender.com";
useEffect(() => {
    const verifyCookie = async () => {
      // 1. Initial check
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          `${API_BASE_URL}`,
          {},
          { withCredentials: true }
        );

        // 2. Check the specific 'status' field from your backend
        if (data.status) {
          setUsername(data.user);
          setLoading(false); // Only stop loading on SUCCESS
          toast.success(`Hello ${data.user}`, { position: "top-right" });
        } else {
          // 3. If backend says token is invalid
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.error("Verification failed:", err);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [navigate, removeCookie]);
  
function HomePage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);


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
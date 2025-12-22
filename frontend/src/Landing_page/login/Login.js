import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const API_BASE_URL = "http://localhost:3000" || "https://zerodha-backend-gmh3.onrender.com";
function Login() {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-left",
    });

     const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
       `${API_BASE_URL}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
          }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

    return (
        <div className='container p-5'>
        <div className='row mt-5 mb-5'>
            <div className='col-6 offset-3 mt-3 mb-5'>
                <h1 className='f-5'>Login</h1>
                  <form onSubmit={handleSubmit}>
                                  <div class="mb-3">
                                    <label htmlFor="email" 
                                     class="form-label f-4" 
                                     for='exampleInputEmail1'>
                                     Email</label>
                                    <input
                                      type="email"
                                      name="email"
                                      value={email}
                                      placeholder="Enter your email"
                                      onChange={handleOnChange}
                                      class="form-control" 
                                       id="exampleInputEmail1"
                                    />
                                  </div>
                                  
                                   <div class="mb-3">
                                      <label htmlFor="password"  
                                      class="form-label"
                                      for='exampleInputPassword1'>
                                        Password</label>
                                      <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder="Enter your password"
                                        onChange={handleOnChange}
                                        class="form-control" 
                                        id="exampleInputPassword1"
                                      />
                                   </div>
                                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                                    <span>
                                        <br></br>
                                      Already have an account? 
                                      <Link to={"/signup"}>Signup</Link>
                                    </span>
                                </form>
                                <ToastContainer/>
            </div>
        </div>
    </div>
    );
     
}

export default Login;
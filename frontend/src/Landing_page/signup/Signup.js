import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
 import axios from "axios";
import { ToastContainer, toast} from "react-toastify";

const API_BASE_URL = "http://localhost:3000" || "https://zerodha-backend-gmh3.onrender.com";

function Signup() {

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username:"",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value} = e.target;
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
           `${API_BASE_URL}/signup`,
            {...inputValue,},
             { withCredentials: true }
        );
         const { success, message } = data;
         if(success) {
            handleSuccess(message);
            setTimeout(() => {
            navigate("/");
            }, 1000);
         }else {
            handleError(message);
         }
        } catch(error) {
            console.log(error);
        }
        setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
    };
    return ( 
        <div className='container p-5'>
            <div className='row mt-5 mb-5'>
                 <div className="form_container col-6 offset-3 mt-3 mb-5">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label htmlFor="email" 
                     class="form-label" 
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
                     <label htmlFor="email" 
                     for="exampleInputUsername1" 
                     >Username</label>
                     <input
                       type="text"
                       name="username"
                       value={username}
                       placeholder="Enter your username"
                       onChange={handleOnChange}
                       class="form-control" 
                       id="exampleInputUsername1"
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
                      <Link to={"/login"}>Login</Link>
                    </span>
                </form>
                <ToastContainer/>
            </div>
            </div>
            
             

        </div>
     );
};

export default Signup;
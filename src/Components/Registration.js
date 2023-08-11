import React from "react";
import "./Registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/Register", user)
      .then(res =>{
        if(res.data.success){
          alert("Successfully registered")
          setuser({
            username: "",
            email: "",
            password: ""
          });
        }else{
          alert("User already exists!!Please login")
        }
        console.log(res)
      })
    }
  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="register">
      <div className="register-container"  data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="3000">
        {console.log("User", user)}
        <h2>Sign Up Page</h2>
        <div>
          <label htmlFor="username" className="uname">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Username"
            autoComplete="false"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mail">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="false"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="pwd">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="false"
            required
          />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        <p>
          {" "}
          Click here to{" "}
          <span onClick={handleLogin} className="login-link">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;

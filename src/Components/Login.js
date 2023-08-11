import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3002/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    if (res.status === 500) {
      alert("Wrong email or password");
    } else if (res.status === 404) {
      alert("Data not found");
    } else {
      alert("Logged in successfully");
      navigate("/general");
      setUsers({
        email: "",
        password: "",
      });
    }
  };

  const handleSignUpClick = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <div className="login-container" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="3000">
        <h2>Login Here</h2>
        <div>
          <label htmlFor="email" className="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <span onClick={handleSignUpClick} className="sign-up-link">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

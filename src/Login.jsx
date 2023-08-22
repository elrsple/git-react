import React, { useState } from "react";
import IrvinLogo from './images/irvins-logo.png'
export const Login = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a login check here (you can replace this with your actual login logic)
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (registeredUser && user === registeredUser.user && pass === registeredUser.password) {
      // Successful login, switch to the Profile page
      props.onFormSwitch("profile");
    } else {
      window.alert("Login Failed");
      console.log("Login failed"); // Handle failed login
    }
  };

  return (
    <div className="auth-form-container">
    <img src={IrvinLogo} alt="logo" style ={{width:'250px',}} /> 
    <h1>Welcome to Irvins' <br></br> Internet Banking</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="user"
          placeholder="Enter your username"
          id="user"
          name="user"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
      <button className= "link-btn" onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here!
      </button>
    </div>
  );
};
import React, { useState } from "react";

function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    email: "",
    user: "",
    firstname: "",
    lastname: "",
    address: "",
    phonenumber: "",
    nric: "",
    dob: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div className="registration-form">
  <div className="logo-container">
    <img
      src={require("./images/irvins-logo.png")}
      alt="Logo"
      className="logo"
    />
  </div>
      <h2>Irvins' Internet Banking <br></br> Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Username:</label>
        <input
          type="user"
          name="user"
          value={formData.user}
          onChange={handleChange}
          required
        />

        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          required
        />

        <label>NRIC:</label>
        <input
          type="text"
          name="nric"
          value={formData.nric}
          onChange={handleChange}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
      <button className= "link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here!</button>
    </div>
  );
}

export default RegistrationForm;
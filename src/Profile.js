import React, { useState } from 'react';
import './profile.css';
import IrvinProfile from './images/irvins-profile-logo.png'

const Profile = (props) => {
  // Retrieve user data from localStorage
  const storedUserJSON = localStorage.getItem('registeredUser');
  const storedUser = storedUserJSON ? JSON.parse(storedUserJSON) : null;
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(storedUser);

  const handleLogout = () => {
    // Perform any necessary logout actions, e.g., clearing session, etc.
    // Then switch to the Login page
    props.onFormSwitch('login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save the edited user data to local storage
    if (editedUser.password !== confirmPassword) {
      alert("Passwords do not match. Please confirm your password correctly.");
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify(editedUser));
    setEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
    <img src={IrvinProfile} alt="logo" style ={{width:'150px',}} /> 
      <h2>Profile Page:</h2>
      <h3><em>User's Personal Information</em></h3>
      {editedUser ? (
        <div className="profile-details">
          <p><strong>Account Number*:</strong> {"123-456-789"}</p>
          <p><strong>Email:</strong> {editedUser.email}</p>
          <p><strong>Username*:</strong> {editedUser.user}</p>
          <p><strong>First Name*:</strong> {editedUser.firstname}</p>
          <p><strong>Last Name*:</strong> {editedUser.lastname}</p>
          <p><strong>Address:</strong> {editedUser.address}</p>
          <p><strong>Phone Number:</strong> {editedUser.phonenumber}</p>
          <p><strong>Date Of Birth*:</strong> {editedUser.dob}</p>
          <p><strong>Country*:</strong> {editedUser.country}</p>
          <p>
            <strong>Password:</strong>{" "} 
            {editedUser.password.replace(/./g, "*")} 
          </p>
          {/* Include other profile fields as needed */}

          {/* Conditionally render the line and heading when in editing mode */}
          {editing && (
            <>
              <hr />
              <h3><em>Editable Fields</em></h3>
            </>
          )}
          
          {editing ? (
            <>
              {/* Editable input fields */}
              <label><strong>Email:</strong></label>
              <input class="input-email"
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
              />

              <label><strong>Address:</strong></label>
              <input class="input-address"
                type="text"
                name="address"
                value={editedUser.address}
                onChange={handleChange}
              /><br></br>

              <label><strong>Phone Number:</strong></label>
              <input class="input-phone"
                type="text"
                name="phonenumber"
                value={editedUser.phonenumber}
                onChange={handleChange}
              /> 

              <label><strong>Password:</strong></label>
              <input class="input-pass"
                type="password"
                name="password"
                value={editedUser.password}
                onChange={handleChange}
              /> <br></br>
              <label><strong>Confirm Password:</strong></label>
          <input
            className="input-pass"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /><br />
              {/* Include other editable profile fields */}
  
              <button class="save-button" onClick={handleSave}>Save</button>
            </>
          ) : (
            <button class="edit-button" onClick={() => setEditing(true)}>Edit</button>
          )}
            <button class= "logout-button"onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;

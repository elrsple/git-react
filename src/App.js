import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import RegistrationForm from "./RegisterCollab";
import Profile from "./Profile";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : currentForm === "register" ? (
        <RegistrationForm onFormSwitch={toggleForm} />
      ) : (
        <Profile onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
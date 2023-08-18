import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import RegistrationForm from "./RegisterCollab";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {
      currentForm === "login" ? 
        <Login onFormSwitch = {toggleForm} />
       : 
        <RegistrationForm onFormSwitch ={toggleForm} />
      }
    </div>
  );
}

export default App;

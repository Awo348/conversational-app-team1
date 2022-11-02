import React, { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
    return currentForm;
  };

  return (
    <div className="App">
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;

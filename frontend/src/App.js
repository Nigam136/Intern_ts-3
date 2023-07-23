import "./App.css";
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const toggleRegisterPage = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="container">
      {isRegistered ? (
        <>
          <Login />
          <button className="btn" onClick={toggleRegisterPage}>
            Register
          </button>
        </>
      ) : (
        <>
          <Register />
          <button className="btn" onClick={toggleRegisterPage}>
            Back to Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;

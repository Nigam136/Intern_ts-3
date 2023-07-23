import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
      });

      if (response.ok) {
        // alert("Login successful!");
        const data = await response.json();
        console.log(data.user.id);
        console.log(data.user.email);
        alert(data.message);
        setLoginFormData({
          username: "",
          password: "",
        });
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={loginFormData.username}
          onChange={handleLoginFormChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginFormData.password}
          onChange={handleLoginFormChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

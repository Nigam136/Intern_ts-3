import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  const handleRegisterFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setRegisterFormData({
          username: "",
          password: "",
          email: "",
        });
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegisterFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={registerFormData.username}
          onChange={handleRegisterFormChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={registerFormData.password}
          onChange={handleRegisterFormChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={registerFormData.email}
          onChange={handleRegisterFormChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

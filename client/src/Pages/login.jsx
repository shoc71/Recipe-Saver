import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password,
      });
      setSuccessMessage("Login successful!");
      setErrorMessage('');
      setTimeout(() => {
        navigate("/home");  // Redirect to home page after successful login
      }, 2000);
    } catch (error) {
      setErrorMessage("Invalid username or password.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-signin">
        <h2>Login:</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required
        />
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to="/register" className="btn btn-secondary">Register Here</Link>
      </form>
    </div>
  );
};

export default Login;

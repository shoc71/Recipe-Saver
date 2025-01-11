import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: 'tan',
    },
    form: {
      backgroundColor: 'tan',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
      margin: '10px -10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
    },
    button: {
      padding: '10px',
      backgroundColor: '#F5F5DC',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    button2: {
        padding: '10px',
        backgroundColor: '#F5F5DC',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '20px'
      },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Register:</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="name"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Submit</button>
        <Link to="/login" style={styles.button2}>Login Here</Link>
      </form>
    </div>
  );
};

export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    //this will capture the information when user submits
    //prevent Default will prevent it from reloading and losing data
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log()

    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}
            type="email" placeholder="youremail@email.com" id="email" name="email" required/>
            <label htmlFor="password">Passwordl</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)}
            type="password" placeholder="********" id="password" name="password" required/>
         </form>
         <Link to="/register"><button style={styles.buttonStyle}>Register</button></Link>
    </>
    )
}
const styles = { 
    navbarStyle: { 
        background: 'tan', 
        justifyContent: 'flex-end', 
        display: 'flex', 
        gap: '1rem', 
        padding: '0.5rem', }, 

    buttonStyle: { 
            padding: '0.5rem 1rem', 
            background: 'tan', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            textDecoration: 'none', 
            cursor: 'pointer', }, 
        };
export default Login;

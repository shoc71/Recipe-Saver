import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = ()=> {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    //this will capture the information when user submits
    //prevent Default will prevent it from reloading and losing data
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log()
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)}
            type="name" placeholder="Full Name" id="name" name="name" required/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}
            type="email" placeholder="youremail@email.com" id="email" name="email" required/>
            <label htmlFor="password">Passwordl</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)}
            type="password" placeholder="********" id="password" name="password" required/>
         </form>
         <Link to="/login"><button style={styles.buttonStyle}>login</button></Link>
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
export default Register;
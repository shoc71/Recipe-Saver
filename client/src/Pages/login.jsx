import React, { useState } from 'react';


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
            <lable htmlFor="email">Email</lable>
            <input value={email} type="email" placeholder="youremail@email.com" id="email" name="email"/>
            <lable htmlFor="password">Passwordl</lable>
            <input value={pass} type="password" placeholder="********" id="password" name="password" />
         <button type="submit">Login</button>
         </form>
         <button>Register Here</button>
    </>
    )
}

export default Login;
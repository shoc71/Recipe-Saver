import React, { useState } from 'react';

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
            <lable htmlFor="name">Name</lable>
            <input value={email} type="name" pllaceholder="Full Name" id="name" name="Full name"/>
            <lable htmlFor="email">Email</lable>
            <input value={email} type="email" pllaceholder="youremail@email.com" id="email" name="email"/>
            <lable htmlFor="password">Passwordl</lable>
            <input value={pass} type="password" pllaceholder="********" id="password" name="password" />
         <button type="submit">Login</button>
         </form>
         <button>Login Here</button>
    </>
    )
}
export default Register;
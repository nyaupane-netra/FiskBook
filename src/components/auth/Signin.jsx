import React, { useState } from 'react';
// import './styles.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import Signup from './Signup';
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form id="login-form" onSubmit={signIn}>
        <input 
            type="text" 
            id="username" 
            placeholder="Username" 
            required 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>

        <input 
            type="password" 
            id="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
        
        <button type="" id="login-button">Login</button>
        <div className="user_forgot">
            <Link to="/signup" className="if_signup">New User?</Link>
            {/* <Link to={Forgotpassword} style={{ marginLeft: '15px', textDecoration: 'none' }}> </Link> */}
        </div>
      </form>
      <p id="error-message" className="error-message"></p>
    </div>
  );
}

export default Signin;

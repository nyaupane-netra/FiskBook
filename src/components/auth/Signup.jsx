import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [category, setCategory] = useState('Alumni')

    const signUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
            console.log(userCredentials)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form id="login-form" onSubmit={signUp}>
        <input 
            type="text" 
            id="signup-fullname" 
            placeholder="Ful Name" 
            required 
            />

        <input 
          type='email'
          id='signup-email'
          placeholder='Email'
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        
        />


        <input 
            type="password" 
            id="signup-password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
        
        <button type="submit" id="login-button">Login</button>
        <div className="user_forgot">
            <Link to="/signup" className="if_signup">New User?</Link>
            {/* <Link to={Forgotpassword} style={{ marginLeft: '15px', textDecoration: 'none' }}> </Link> */}
        
        </div>

        <p>You are a:</p>
        <div className="signup-radio">
            <label htmlFor="Alumni">Alumni</label>
                <input
                  type="radio"
                  id="Alumni"
                  name="category"
                  value="Alumni"
                  checked = {category === 'Alumni'}
                  onChange={(e)=>{setCategory(e.value.target)}}
                />
        </div>
        
        <div className="signup-radio">
            <label htmlFor="Student">Student</label>
              <input
                  type="radio"
                  id="Student"
                  name="category"
                  value="Student"
                  checked={category === 'Student'}
                  onChange={(e)=>{setCategory(e.value.target)}}
                />
        </div>

        {category === 'Alumni' && (
          <div id="alumni-fields" className="hidden-fields">
            <input type="text" id="alumni-info-company" placeholder="Current Company" />
            <input type="text" id="alumni-info-job" placeholder="Job Position" />
            <input type="text" id="alumni-info-major" placeholder="Undergraduate Major" />

          </div>
        )}

        {category === 'Student' && (
          <div id="student-fields" className="hidden-fields">
                  {/* Fields specific to Students */}
            <input type="text" id="student-info-major" placeholder="Major" />
            <input type="text" id="student-info-graduation" placeholder="Graduation Year" />
          </div>
        )}


      </form>
      <p id="error-message" className="error-message"></p>
    </div>
  );
}

export default Signup;





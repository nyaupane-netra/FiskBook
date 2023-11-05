import React from 'react';

const LogIn = () => {
  return (
    <body>
      <div className="login-container">
        <h1>Login</h1>
        <form id="login-form">
          <input type="text" id="username" placeholder="Username" required />
          <input type="password" id="password" placeholder="Password" required />
          <button type="button" id="login-button">Login</button>
          <div className="user_forgot">
            <a href="Signup.html" className="if_signup">
              New User?
            </a>
            <a href="forgot_password.html" style={{ marginLeft: '15px', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </div>
        </form>
        <p id="error-message" className="error-message"></p>
      </div>
    </body>
  );
};

export default LogIn;
import React from 'react';
import './Login.css';
import logo from './../assets/logoname.svg';

const Login: React.FC = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <img src={logo} alt="logo" />
      </header>
      <div className="login-container">
        <div className="login-box">
          <h2>Create a new account</h2>
          <a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/dashboard">
            <button className="google-signup-button">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
              Sign Up with Google
            </button>
          </a>
          <button className="create-account-button">Create an Account</button>
          <p>
            Already have an account? <a href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/dashboard"><span>Sign In</span></a>
          </p>
        </div>
      </div>
      <footer className="login-footer">
        <p>© 2023 Reachinbox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;

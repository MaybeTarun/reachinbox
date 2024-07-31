import React from 'react';
import './Login.css';
import logo from './../assets/logoname.svg';
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/clerk-react";

const Login: React.FC = () => {
  return (
    <>
      <SignedIn>
        <div>Redirecting you to Onebox...</div>
      </SignedIn>
      <SignedOut>
        <div className="login-page">
          <header className="login-header">
            <img src={logo} alt="logo" />
          </header>
          <div className="login-container">
            <div className="login-box">
              <h2>Create a new account</h2>
              <SignInButton>
                <button className="google-signup-button">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
                  Sign Up with Google
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="create-account-button">Create an Account</button>
              </SignUpButton>
              <p>
                Already have an account? <SignInButton><span>Sign In</span></SignInButton>
              </p>
            </div>
          </div>
          <footer className="login-footer">
            <p>© 2023 Reachinbox. All rights reserved.</p>
          </footer>
        </div>
      </SignedOut>
    </>
  );
};

export default Login;

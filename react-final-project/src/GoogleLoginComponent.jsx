import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);  // State to track button click

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    const userProfile = decodeJwt(credentialResponse.credential);
    setUserName(userProfile.name); 
    setIsLoggedIn(true);
    setIsSignUpClicked(false); // Hide button after successful login
  };

  const handleFailure = (error) => {
    console.log('Login Failed:', error);
    setIsSignUpClicked(false); // Reset state if login fails
  };

  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          {!isSignUpClicked ? (
            <button
            onClick={() => setIsSignUpClicked(true)} 
            className="sign-up-button"
          >
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
          
          ) : (
            <GoogleLogin 
              onSuccess={handleSuccess}
              onError={handleFailure}
            />
          )}
        </>
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </>
  );
}

export default GoogleLoginComponent;

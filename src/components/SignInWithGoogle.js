// src/components/SignInWithGoogle.js
import React from 'react';
import { auth, googleAuthProvider } from '../firebase';

function SignInWithGoogle() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuthProvider)
      .then((result) => {
        const user = result.user;
        console.log('User signed in:', user);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <div>
      <h2>Sign in with Google</h2>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default SignInWithGoogle;

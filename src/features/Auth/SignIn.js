import React from 'react';
// Import Firebase & FirebaseUI
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import '../../index.css';

// configure FirebaseUI
const uiConfig = {
  signInFlow: 'redirect',
  // We will display Google as auth providers.
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: () => false,
  // },
};

const SignIn = () => {
  return (
    <div className="group-firebase-button">
      <h1>SignIn Google</h1>
      <p>One Touch, Million Connect</p>
      <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    </div>
  );
};

export default SignIn;
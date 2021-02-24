import React from 'react';
// Import Firebase & FirebaseUI
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// configure FirebaseUI
const uiConfig = {
  signInFlow: 'redirect',
  // We will display Google as auth providers.
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: () => false,
  // },
};

const SignIn = () => {
  return (
    <div style={{textAlign:"center",background:"green"}}>
      <h1>SignIn Google</h1>
      <p>One Touch, Million Connect</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignIn;
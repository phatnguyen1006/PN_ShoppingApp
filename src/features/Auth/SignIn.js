import React, { useEffect, useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
// Import Firebase & FirebaseUI
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Redirect To Reference:
import { ReferenceContext } from '../../context/ReferenceContext';

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

  const { state } = useLocation();
  const from = state || { from: { pathname: "/" } };
  const { redirect, setRedirect } = useContext(ReferenceContext);
  // console.log("Redirect: ", redirect);
  
  if (redirect) {
    <Redirect to={from} />
  }

  useEffect(() => {
    if (from.from.pathname == "/admin") {
      window.alert("You must to login first");
    }
    // console.log("from:  ", from.from.pathname );
  }, []);
  

  // Main return SignIn page => OutSide to easier.
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

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback(), 100); // Wait 0s to not delay.
  }
}

export default SignIn;
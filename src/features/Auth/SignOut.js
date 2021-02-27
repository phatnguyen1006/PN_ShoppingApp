import React from 'react';
import firebase from 'firebase';
import { fakeAuth } from './SignIn';

// SignOut Features
const SignOut = () => {
    firebase.auth().signOut()
        .then(() => {
            console.log("LogOut Successed!")
            fakeAuth.isAuthenticated = false;
            return;
        })
        .catch(() => {
            window.confirm("Sorry, Something Was Wrong!");
        })
}

export default SignOut;
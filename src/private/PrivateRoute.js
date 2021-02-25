import React, { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
// fakeAuth from SignIn
import { fakeAuth } from '../features/Auth/SignIn';

const PrivateRoute = ({ component: Component, ...rest}) => {
    const location = useLocation();

    return (
        // If fakeAuth = true => Component Admin : else => Redirect to SignIn
        <Route {...rest} >
            {fakeAuth.isAuthenticated ? 
                (<Component />) :
                (<Redirect to={{ pathname: "/signin", state: { from: location } }} />)
            }
        </Route>
    )
}

export default PrivateRoute;
import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
// RouterDOM
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './index.css';
import MenuAppBar from './components/AppBar';
import App from './App';
import TodoListWeb from './components/TodoListWeb';
import Products from './components/Products';
import About from './components/About';
import SignIn from './features/Auth/SignIn';
import Admin from './components/Admin';
// Private Route:
import PrivateRoute from './private/PrivateRoute';
// Theme
import ThemeContextProvider from './context/Theme';

import BarThemeProvider from './context/BarTheme';
// Redirect Context:
import ReferenceContextProvider from './context/ReferenceContext';
import { ReferenceContext } from './context/ReferenceContext';
// fakeAuth to check Firebase:
import { fakeAuth } from './features/Auth/SignIn';
// Move useTodoState to set todos is a global var.
import useTodoState from '../src/todolist/useTodoState';
// Firebase
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

const Index = () => {

  // Switch
  // const [auth, setAuth] = React.useState(false);
  
  // Set INITIAL VALUE for TodoList:
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  // PrivateRoute:
  // Set Redirect to Render PrivateRoute:
  const { redirect, setRedirect } = useContext(ReferenceContext);
  // User Name
  const [displayName, setDisplayName] = useState("");

  
  useEffect( () => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        console.log("Anonymous!!!");
        return;
      }

      fakeAuth.authenticate(() => setRedirect(true)); // Set Auth = true => Allow to Redirect;
      console.log("User: ", typeof(user.displayName));
      setDisplayName(user.displayName);
    })

    return () => unregisterAuthObserver();
  },[]);

  return (
    <Router>
    <BarThemeProvider>
        <MenuAppBar displayName={ displayName } />
    </BarThemeProvider>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/todolist">
        <TodoListWeb todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
      </Route>
      <Route path="/products" component={Products} />
      
      <PrivateRoute path="/admin" component={Admin} />

      <Route path="/signin" component={SignIn} />
      <Route component={() => <h1>Not Found Pages</h1>} />
    </Switch>
  </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ReferenceContextProvider>
        <Index />
      </ReferenceContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

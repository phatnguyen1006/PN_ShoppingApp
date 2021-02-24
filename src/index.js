import React, { useEffect } from 'react';
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

import BarThemeProvider from './context/BarTheme';
// Move useTodoState to set todos is a global var.
import useTodoState from '../src/todolist/useTodoState';
// Firebase
import firebase from 'firebase';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyCpC-_QncVLaXY0R6H3trF1VpJbzcI2DVw',
  authDomain: 'pn-shopping-app.firebaseapp.com',
};
firebase.initializeApp(config);

const Index = () => {
  
  // Set INITIAL VALUE for TodoList:
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  useEffect( () => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        console.log("Anonymous!!!");
        return;
      }

      console.log("User: ", user.didplayName);
    })

    return () => unregisterAuthObserver();
  },[]);

  return (
  <Router>
    <BarThemeProvider>
      <MenuAppBar />
    </BarThemeProvider>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/todolist">
        <TodoListWeb todos={todos} addTodo={addTodo} deleteTodo={deleteTodo}/>
      </Route>
      <Route path="/products" component={Products} />
      <Route path="/admin" component={() => <h1>Welcome to Admin</h1>} />
      <Route path="/signin" component={SignIn} />
      <Route component={() => <h1>Not Found Pages</h1>} />
    </Switch>   
  </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
  document.getElementById('root')
);

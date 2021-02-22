import React from 'react';
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
import Products from './components/Products'
import About from './components/About'

import BarThemeProvider from './context/BarTheme';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <BarThemeProvider>
      <MenuAppBar />
    </BarThemeProvider>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/todolist" component={TodoListWeb} />
        <Route path="/products" component={Products} />
        <Route path="/admin" component={() => <h1>Welcome to Admin</h1>} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

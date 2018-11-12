import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import './App.css';
import { Provider } from 'react-redux'
import history from "./History"
import Login from './components/Login'
import Welcome from './components/PeopleList'
import Home from './components/WelcomePage'

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  </Provider>
)

export default App;

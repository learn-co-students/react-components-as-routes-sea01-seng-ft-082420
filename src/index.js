import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'

// import react-router functions
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

// change to have router coordinate displayed
ReactDOM.render(
  <Router>
    <>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/login' component={Login} />
    </>
  </Router>,
  document.getElementById('root')
);

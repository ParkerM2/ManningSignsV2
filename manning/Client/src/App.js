import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import { getAuth, signOut, } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
const font = "'Niconne', cursive";


function App() {

  return (
    <>
    <Navbar />
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path='/user' component={User}/>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;

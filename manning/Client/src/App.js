import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/index';
import Login from './pages/Login/Login';
import User from './pages/User/User';

const font = "'Niconne', cursive";
// controls navbar for login/logout buttons
const isLoggedIn = true;
// userInfo or Admin info
const user = {
  userID: 'administrator',
  username: "Parker",
  // password * 

};



function App() {

  return (
    <>
      <Router>
        <Switch>
          {/* homepage route */}
          <Route exact path="/">
            <Home user={user} isLoggedIn={isLoggedIn} />
          </Route>
          {/* login route */}
          <Route exact path="/login">
            <Login user={user} isLoggedIn={isLoggedIn}/>
          </Route>
          <Route exact path="/user/administrator">
            <User font={font} user={user} isLoggedIn={isLoggedIn}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

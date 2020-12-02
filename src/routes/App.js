import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";

import Home from "../pages/Home";
import SignUp from "../pages/Register/Register";
import Login from "../pages/Login/index";

import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";

import Photos from "../containers/Photos";
import { AuthProvider } from "../containers/Auth";
import PrivateRoute from "../containers/PrivateRoute";

function App({ isLogged }) {
  return (
    <>
      <AuthProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <PrivateRoute exact path="/photos" component={Photos} />
            {/* <Route exact path="/photos" component={isLogged ? Photos : Login} /> */}
            <Route exact path="/" component={Home} />
            {/*  <Route exact path="/photos" component={Photos} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
          <NavBar />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

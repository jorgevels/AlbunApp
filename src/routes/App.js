/* import React from "react"; */
import React, { Suspense } from "react";
/* import { BrowserRouter, Switch, Route } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
/* import { Admin, Resource } from "react-admin"; */

import { GlobalStyles } from "../styles/GlobalStyles";

import Home from "../pages/Home";
import Photos from "../containers/Photos";
import Login from "../pages/Login";

/* import Login from "../Login"; */
import SignUp from "../pages/Register";

import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";
/* import Cerrar from "../components/Cerrar/Salir"; */

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

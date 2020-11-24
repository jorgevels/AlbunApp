/* import React from "react"; */
import React, { Suspense } from "react";
/* import { BrowserRouter, Switch, Route } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyles } from "../styles/GlobalStyles";

import Home from "../pages/Home";
import Photos from "../containers/Photos";
import Login from "../pages/Login";
/* import Login from "../Login"; */
import SignUp from "../SignUp";

import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";
/* 
import { AuthProvider } from "../Auth";
import PrivateRoute from "../PrivateRoute";
 */
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
      <NavBar />
    </Router>

    /* <AuthProvider>
      <Route>
        <>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </>
      </Route>
      <NavBar />
    </AuthProvider> */

    /* <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Photos exact path="/photos" />
        <Page0 path="/page0" />
        
      </Router>
      <NavBar />
    </Suspense> */
  );
}

export default App;

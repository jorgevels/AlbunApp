import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";

import Home from "../pages/Home";
import SignUp from "../pages/Register/Register";
import Login from "../pages/Login/index";
import Prueba from "../pages/Prueba";

import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar";

import Photos from "../containers/Photos";
import { AuthProvider } from "../containers/Auth";
import PrivateRoute from "../containers/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <PrivateRoute exact path="/photos" component={Photos} />
            <PrivateRoute exact path="/prueba" component={Prueba} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route component={NotFound} />
          </Switch>
          <NavBar />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

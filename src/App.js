import React from "react";
import { BrowserRouter as Router, Switch,  Route,} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import logo from './logo.svg';
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import Hero from './components/Hero';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./PrivateMenu";
import WebApp from "./pages/WebApp";

function App() {
  return (
    <Router>
        <NavigationMenu/>

        <Switch>
          <Route path={ROUTES.SIGN_UP} component={SignUp}/>
          <PrivateRoute>
            <WebApp/>
          </PrivateRoute>
          <Route path={ROUTES.LOGIN} component={Login}/>
          <Route path={ROUTES.HOME} component={Hero}/>

        </Switch>
    </Router>

  );
};

export default App;

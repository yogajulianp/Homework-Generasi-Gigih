import React from "react";
import { BrowserRouter as Router, Switch,  Route,} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import Hero from './components/Hero';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./PrivateMenu";
import PlayMenu from "./pages/PlayMenu";
import {useAuth} from "./context/AuthContext";

function App() {
  const {isLoading} = useAuth();
  return isLoading ? (
    <h1> Mohon menunggu, sedang memproses...</h1> 
    ) : (
    <Router>
        <NavigationMenu/>

        <Switch>
          <Route path={ROUTES.SIGN_UP} component={SignUp}/>
          <PrivateRoute path= {ROUTES.Play_Menu}>
            <PlayMenu/>
          </PrivateRoute>
          
          <Route path={ROUTES.LOGIN} component={Login}/>
          <Route path={ROUTES.HOME} component={Hero}/>

        </Switch>
    </Router>

  );
};

export default App;

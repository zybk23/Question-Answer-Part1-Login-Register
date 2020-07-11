import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom"
import Navigation from "./Navigation/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
        <Navigation/>
      <Switch>
          <Route path={"/register"} component={Register}/>
          <Route path={"/login"} component={Login}/>
      </Switch>
    </div>
  );
}

export default App;

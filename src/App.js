import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login.jsx'; 
import Details from './Pages/Details.jsx';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <div className="App centerContent">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/details" component={Details} />
        <Route path="/" component={Home}/> 
        
      </Switch>
    </div>
  );
}

export default App;

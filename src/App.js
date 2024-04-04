import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login'; 
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/details" component={Details} />
        <Route path="/" component={Home}/> 
      </Switch>
    </div>
  );
}

export default App;

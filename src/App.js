import React from 'react';
import Header from './components/Header/Header';
import Pets from './components/Pets/Pets';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NewPet from './components/NewPet/NewPet';
import './App.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route to="/new-pet" component={NewPet}/> 
          <Route to="/cats" component={Pets}/>
          <Route to="/dogs" component={Pets}/>
          <Route to="/" exact component={WelcomePage}/> 
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;

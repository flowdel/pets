import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pets from './components/Pets/Pets';
import WelcomePage from './components/WelcomePage/WelcomePage';
import NewPet from './components/NewPet/NewPet';
import PetDetails from './components/Pets/PetDetails/PetDetails';
import Application from './components/Application/Application';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import './App.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

const asyncSignin = asyncComponent(() => {
  return import('./components/Auth/Signin/Signin');
});


const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  })
  let routes = 
    <Switch>
      <Route path="/cats" exact component={Pets}/>
      <Route path="/dogs" exact component={Pets}/>
      <Route path="/cats/:id" exact component={PetDetails}/> 
      <Route path="/dogs/:id" exact component={PetDetails}/> 
      <Route path="/adopt/:id" exact component={Application}/> 
      <Route path="/signin" exact component={asyncSignin}/> 
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/" exact component={WelcomePage}/> 
    </Switch>

  if (props.isAuthenticated) {
    routes = 
    <Switch>
      <Route path="/cats" exact component={Pets}/>
      <Route path="/dogs" exact component={Pets}/>
      <Route path="/new-pet" exact component={NewPet}/> 
      <Route path="/cats/:id" exact component={PetDetails}/> 
      <Route path="/dogs/:id" exact component={PetDetails}/> 
      <Route path="/adopt/:id" exact component={Application}/>
      <Route path="/about" exact component={About}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/" exact component={WelcomePage}/> 
    </Switch>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {routes}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

App.propTypes = {
  onTryAutoSignup: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);



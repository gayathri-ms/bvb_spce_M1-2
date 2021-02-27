import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'
import Help from './components/pages/Help'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


const App = () => {
  return (
    <>
          <Navbar/>
          <Router>
          
          <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/About"  component={About}/>
            <Route exact path="/SignUp"  component={SignUp}/>
            <Route exact path="/Help"  component={Help}/>
          </Switch>
          </Router> 
    </>
  )
}

export default App

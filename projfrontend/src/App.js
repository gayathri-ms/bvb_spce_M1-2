import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import SignIn from './components/pages/SignIn'
import SignUp from './components/pages/SignUp'
import Help from './components/pages/Help'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import AdminDashBoard from './components/pages/Admindashboard'
import SubAdminDashBoard from './components/pages/SubAdmin'


const App = () => {
  return (
    <>
          
          <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/SignIn"  component={SignIn}/>
            <Route exact path="/SignUp"  component={SignUp}/>
            <Route exact path="/Help"  component={Help}/>
            <Route exact path="/subadmin/dashboard"  component={SubAdminDashBoard}/>
          </Switch>
          </Router> 
    </>
  )
}

export default App

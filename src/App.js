import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import Edituser from './components/users/EditUser';
import UserView from './components/users/UserView';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
       <h1>Simple CURD Operation in React</h1>       
      </header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/user/add" component={AddUser}></Route>
        <Route exact path="/user/edit/:id" component={Edituser}></Route>
        <Route exact path="/user/view/:id" component={UserView}></Route>        
      </Switch>      
    </div>
    </Router>
  );
}

export default App;

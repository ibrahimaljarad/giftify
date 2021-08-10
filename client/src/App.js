import React, { useState, useEffect } from 'react';
import {Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddItem from './pages/AddItem';

import './App.css';
import './index.css';


function App() {
  const [userData, setUserData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Switch>
        <Route path='/' exact component={Home} {...userData}/>
        <Route path='/signin' component={SignIn} handleFetch={setUserData}  />
        <Route path='/signup' component={SignUp} handleFetch={setUserData} />
        <Route path='/add-item' component={AddItem} />
      */}
      
      <Switch> 
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sign-in'>
        <SignIn handleFetch={setUserData} />
      </Route>
      <Route exact path='/sign-up'>
        <SignUp handleFetch={setUserData} />
      </Route>
      <Route path='/add-item'>
        <AddItem userData={userData}/>
      </Route>
      </Switch>
 
      <Footer />
    </div>
  );
}

export default App;

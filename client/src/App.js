import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/add-item' component={AddItem} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

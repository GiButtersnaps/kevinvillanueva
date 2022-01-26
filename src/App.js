import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
// import React from 'react';
import React, { Component, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Mainpage from "./components/mainpage/mainpage";
import Menubar from "./components/menubar/menubar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <div className='vertical-container'>
        <Menubar isOpen={isOpen} setOpen = {() => setOpen(!isOpen)}></Menubar>
        { isOpen 
                    ? <div className='mobile_links'>
                    {/* <Link className="betterLink" to="/">Home </Link> */}
                    <a className="betterLink" onClick={() => setOpen(false)} href="/"> 
                    <div className="link-text">
                       Home
                      </div> 
                       </a>
                    <Link className="betterLink" to="/about"  onClick={() => setOpen(false)}>
                      <div className="link-text">
                        About
                      </div>  
                    </Link>
                    <Link className="betterLink" to="/projects"  onClick={() => setOpen(false)}>
                      <div className="link-text">
                        Projects
                      </div> 
                      </Link>
                    <Link  className="betterLink" to="/contact"  onClick={() => setOpen(false)}>
                      <div className="link-text">
                        Contact Me
                      </div> 
                    </Link>
                </div>
                    : null
                }
        <div className='horizontal-container'>
          <Mainpage></Mainpage>
        </div>
      </div>
      
     
    </div>
  );
}

export default App;

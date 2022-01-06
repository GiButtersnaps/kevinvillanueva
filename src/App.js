import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
// import React from 'react';
import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Mainpage from "./components/mainpage/mainpage";
import Menubar from "./components/menubar/menubar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='vertical-container'>
        <Menubar></Menubar>
        <div className='horizontal-container'>
          <Mainpage></Mainpage>
        </div>
      </div>
      
     
    </div>
  );
}

export default App;

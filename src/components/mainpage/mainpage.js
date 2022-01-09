import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./mainpage.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "../Contact/contact";
import About from "../About/about";
import LinuxOS from "../linuxos/linuxos";
import Projects from "../projects/projects";
import Home from "../Home/home";




export default class Mainpage extends Component {
  render() {
    return (
        <div className="mainpage">
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/about" element={<About/>} />
                <Route path="/391OS" element={<LinuxOS/>} />
                <Route path="/projects" element={<Projects/>} exact />
                <Route path="/contact" element={<Contact/>} />

                

            </Routes>
        </div>
    )
  }
}
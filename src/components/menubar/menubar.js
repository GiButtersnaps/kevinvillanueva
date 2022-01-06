import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import "./menubar.css"

export default class Menubar extends Component {
  render() {
    return (
        <div className='menubar'>
            <div className='logo'> 

            </div>

            <div className='links'>
                {/* <Link className="betterLink" to="/">Home </Link> */}
                <a class="betterLink" href="/">Home </a>
                <Link className="betterLink" to="/about">About Me </Link>
                <Link className="betterLink" to="/projects">Projects</Link>
                <Link  className="betterLink" to="/contact">Contact Me</Link>
            </div>
            
        </div>
        

    )
  }
}
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
                <a class="betterLink" href="/"> 
                <div className="link-text">
                   Home
                  </div> 
                   </a>
                <Link className="betterLink" to="/about">
                  <div className="link-text">
                    About
                  </div>  
                </Link>
                <Link className="betterLink" to="/projects">
                  <div className="link-text">
                    Projects
                  </div> 
                  </Link>
                <Link  className="betterLink" to="/contact">
                  <div className="link-text">
                    Contact Me
                  </div> 
                </Link>
            </div>
            <div class="dropdown">
              <span>Mouse over me</span>
                <div class="dropdown-content">
                  <p>Hello World!</p>
              </div>
            </div>
        </div>
        
        

    )
  }
}
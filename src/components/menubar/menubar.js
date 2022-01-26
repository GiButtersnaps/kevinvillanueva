import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import "./menubar.css"
import Hamburger from 'hamburger-react';



export default class Menubar extends Component {

  constructor(props){
    super(props);
    this.state = {isOpen: false,
    setOpen: false};
  }
  
  // handle_hamburger(){
   
  // }
  render() {
    return (
        <div className='menubar'>
            <div className='logo'> 

            </div>

            <div className='links'>
                {/* <Link className="betterLink" to="/">Home </Link> */}
                <a className="betterLink" href="/"> 
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
              <Hamburger  color="white" onToggle={() => {
                   this.props.setOpen()
                  }} />
               {/* <Hamburger  color="white" toggled={this.props.isOpen} toggle={this.props.setOpen()} /> */}
                
              {/* <button onClick={ this.state.isOpen = !this.state.isOpen}>
                <img className='hamburger' src='./images/hamburger.png'/>
              </button> */}

            </div>
            
        </div>
        
        

    )
  }
}
import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./autoboard.css"
import HoverVideoPlayer from 'react-hover-video-player';
import {Link} from "react-router-dom";

export default class LinuxOS extends Component {
  render() {
    return (
       <div className='autoboard'>
            <h1>
                The AutoBoard
            </h1>
            <img src='./images/autoboardmain.png' alt='Autoboard Img'></img>
            <div className='body-text'>
                The autoboard is a Voice Controlled Automated GameBoard that I developed during my senior design course with my parteners Nick Rappe and Rafal Czech.
            </div>
       </div>
    )
  }
}
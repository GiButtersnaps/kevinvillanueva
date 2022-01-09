import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./linuxos.css"
import HoverVideoPlayer from 'react-hover-video-player';
import {Link} from "react-router-dom";

export default class LinuxOS extends Component {
  render() {
    return (
        <div className="Projects">
            <div className="linux">
                <div id="linux_container">
                    <div id="vm_text_mode" ></div>
                    <canvas id="vm_graphics_mode" ></canvas>
                </div>
            </div>
       {/* <div style="width: 75%; margin: auto;">
            <h2>Contributors</h2>
            <p>
                Sahil Patel, Mehul Duggar, Freddy Zhang, and Ayberk Yaraneri
            </p>
            <p>
                Thank you to <a href="https://github.com/copy/v86">v86</a> for enabling us to run this in the browser.
            </p>

            <h2>Disclaimer</h2>
            <p>
                This web version of our 391OS is likely to run slower than it would in QEMU because of 
                the browser environment. Additionally, we have not necessarily verified that all features 
                work properly in this environment (as opposed to QEMU where we developed).
            </p>
            <p>
                Please note that the source code of our operating system is unavailable for academic integrity reasons.
            </p>
        </div> */}
        </div>
    )
  }
}
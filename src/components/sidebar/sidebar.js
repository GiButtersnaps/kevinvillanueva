import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./sidebar.css"

export default class Home extends Component {
  render() {
    return (
        // <Paper elevation={3} className="sidebar">
        //   <Grid container spacing={2} className="sidebarcontainer">
        //     <Grid item xs={12} >
        //       <div className="circle"></div>
        //     </Grid>
        //     <Grid item xs={12}>
        //       kevin villanueva
        //     </Grid>
        //   </Grid>
        // </Paper>
        <div className='sidebar'>
          <img className="circle" src="images/profilepic.jpg" alt="profile pic"/>
        </div>

    )
  }
}

import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import { connect } from 'react-redux';

class Inapp extends Component{

    render(){
      return(
          <div style={{border: '0px solid transparent', margin: '0px',position: 'fixed', bottom: '0', right: '0', left: '0', top: '0'}}>

              <nav className="navbar navbar-default" style={{paddingLeft:'20px',  paddingRight: '25px',marginTop: '10px', marginBottom:'0px',backgroundColor: 'white', border: '1px solid black transparent'}}>
                  <a href="http://localhost:3000/inapp">
                      <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px'}} />
                  </a>
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="http://localhost:3000" style={{paddingTop: '25px', color: 'black'}}><span class="glyphicon glyphicon-off" ></span> Logout</a></li>
                  </ul>
              </nav>

              <nav className="navbar navbar-default" style={{ paddingLeft: '50px',paddingRight: '50px',backgroundColor: '#090030',marginTop: '0px',border: '1px solid black transparent', borderTop: '0px', height: '20px'}}>

                  <ul className="nav navbar-nav ">
                      <li><a href="#" style={{color: 'white'}}><span class="glyphicon glyphicon-folder-open"></span>  My Projects </a></li>
                      <li><a href="#" style={{color: 'white'}}><span class="glyphicon glyphicon-list" ></span> Dashboard</a></li>
                  </ul>

                  <ul className="nav navbar-nav navbar-right">
                      <li> <a href="http://localhost:3000/profile"  className="btn" style={{height: '40px',marginRight:'10px' ,marginTop: '5px', paddingTop: '10px',color: 'white', backgroundColor: '#fc951e'}}>My Profile</a></li>
                      <li><a  className="btn" style={{height: '40px', marginTop: '5px', paddingTop: '10px', color: 'white', backgroundColor: '#fc951e'}}> Post a Project</a></li>
                  </ul>
              </nav>

          </div>
      );
    }
}


export default Inapp;
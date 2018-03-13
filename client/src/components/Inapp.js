import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import {Link} from 'react-router-dom';
import ProjectList from './ProjectList';
import * as API from "../api/API";
import { connect } from 'react-redux';

class Inapp extends Component{
    componentWillMount()  {

        API.doCheckLogin()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/inapp');
                }
                else{
                    this.props.redirectURL('/');
                }
            });
    }

    handleSubmit = () => {
        API.doLogout()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/');
                }
            });


    }

    render(){
        return(
            <div style={{border: '0px solid transparent', margin: '0px',position: 'fixed', bottom: '0', right: '0', left: '0', top: '0',overflowY: 'scroll', overflowX: 'hidden'}}>

                <nav className="navbar navbar-default" style={{paddingLeft:'20px',  paddingRight: '25px',marginTop: '10px', marginBottom:'0px',backgroundColor: 'white', border: '1px solid black transparent'}}>
                    <Link to="/inapp">
                        <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px'}} />
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><button type="button" className="btn" onClick={() => this.handleSubmit()} style={{marginTop: '10px', height: '40px',color: 'white', backgroundColor: '#fc951e'}}><span class="glyphicon glyphicon-off" ></span> Logout</button></li>
                    </ul>
                </nav>

                <nav className="navbar navbar-default" style={{ paddingLeft: '50px',paddingRight: '50px',backgroundColor: '#090030',marginTop: '0px',border: '1px solid black transparent', borderTop: '0px', height: '20px'}}>

                    <ul className="nav navbar-nav ">
                        <li><Link to="" style={{color: 'white'}}><span class="glyphicon glyphicon-folder-open"></span>  My Projects </Link></li>
                        <li><Link to="" style={{color: 'white'}}><span class="glyphicon glyphicon-list" ></span> Dashboard</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li> <Link to="/profile"  className="btn" style={{height: '40px',marginRight:'10px' ,marginTop: '5px', paddingTop: '10px',color: 'white', backgroundColor: '#fc951e'}}>My Profile</Link></li>
                        <li><Link to="/postproject"  className="btn" style={{height: '40px', marginTop: '5px', paddingTop: '10px', color: 'white', backgroundColor: '#fc951e'}}> Post a Project</Link></li>
                    </ul>
                </nav>

                <ProjectList />

            </div>
        );
    }
}


export default Inapp;
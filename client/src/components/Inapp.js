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

    redirect = (url) => {

        this.props.redirectURL(url);

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

                <nav className="navbar navbar-default" style={{paddingLeft:'20px',  paddingRight: '25px', marginBottom:'0px',backgroundColor: 'white', border: '1px solid black transparent'}}>

                    <Link to="/inapp">
                        <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px', marginLeft: '50px'}} />
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><button type="button" className="btn" onClick={() => this.handleSubmit()} style={{marginTop: '10px', marginRight: '50px',height: '40px',color: 'white', backgroundColor: '#fc951e'}}><span class="glyphicon glyphicon-off" ></span> Logout</button></li>
                    </ul>
                </nav>

                <nav className="navbar navbar-default" style={{ paddingRight: '50px',backgroundColor: '#090030',marginTop: '0px',border: '1px solid black transparent', borderTop: '0px', height: '20px'}}>

                    <ul className="nav navbar-nav ">
                        <li><Link to="" style={{color: 'white', marginLeft: '80px'}}>  My Projects </Link></li>
                        <li><Link to="" style={{color: 'white',paddingLeft: '25px'}}> Dashboard</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li> <Link to="/profile"  className="btn" style={{height: '30px',marginRight:'10px' ,marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e'}}>My Profile</Link></li>
                        <li><Link to="/postproject"  className="btn" style={{height: '30px' ,marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e', marginRight: '25px'}}> Post a Project</Link></li>
                    </ul>
                </nav>

                <ProjectList redirect={this.redirect} />

            </div>
        );
    }
}


export default Inapp;
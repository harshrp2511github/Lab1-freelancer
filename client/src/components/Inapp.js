import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import {Link} from 'react-router-dom';
import ProjectList from './ProjectList';
import * as API from "../api/API";
import unknown from '../images/harsh.JPG';
import { connect } from 'react-redux';

class Inapp extends Component{

    state ={
        email: this.props.user.email,
        profilepic: ''
}
    componentWillMount()  {
        this.setState({
            email: this.props.user.email,
            profilepic: ''
        })

        this.setFields(this.state);

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

    setFields = (userdata) => {
        API.getProfile(userdata)
            .then((status) => {
                //console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.setState({
                        profilepic: status.profilepic
                    });

                }

            });
    };

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
            <div style={{border: '0px solid transparent', margin: '0px',position: 'fixed', bottom: '0', right: '0', left: '0', backgroundColor: '#dbdbdb',top: '0',overflowY: 'scroll', overflowX: 'hidden'}}>

                <nav className="navbar navbar-default" style={{paddingLeft:'20px',  paddingRight: '25px', marginBottom:'0px',backgroundColor: 'white', border: '1px solid black transparent'}}>

                    <Link to="/inapp">
                        <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px', marginLeft: '50px'}} />
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <div class="dropdown" style={{ paddingTop: '2px'}}>
                            <img src={this.state.profilepic} class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"  style={{ marginRight: '110px',width: '50px', height: '50px', marginTop: '2px'}} />

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ backgroundColor: '#073c59'}}>
                                <Link class="dropdown-item" to="/inapp" style={{ color: '#fc951e',paddingLeft: '5px'}}>Home</Link><br />
                                <Link class="dropdown-item" to="/profile" style={{ color: '#fc951e',paddingLeft: '5px'}}>My Profile</Link><br />
                                <Link class="dropdown-item" to="/postproject" style={{ color: '#fc951e',paddingLeft: '5px'}}>Post a Project</Link><br />
                                <Link class="dropdown-item" to="/postedprojects" style={{ color: '#fc951e',paddingLeft: '5px'}}>Posted Projects</Link><br />
                                <Link class="dropdown-item"  to="/biddedprojects" style={{ color: '#fc951e',paddingLeft: '5px'}}>Bidded Projects</Link><br />
                                <Link class="dropdown-item" onClick={() => this.handleSubmit()} to="#" style={{ color: '#fc951e',paddingLeft: '5px'}}>Logout</Link>
                            </div>
                        </div>
                    </ul>
                </nav>

                <nav className="navbar navbar-default" style={{ paddingRight: '50px',backgroundColor: '#073c59',marginTop: '0px',border: '1px solid black transparent', borderTop: '0px', height: '20px'}}>

                    <ul className="nav navbar-nav ">
                        <li><Link to="/inapp" style={{color: 'white', marginLeft: '75px'}}>  Home </Link></li>
                        <li><Link to="/profile" style={{color: 'white',paddingLeft: '25px'}}> My Profile</Link></li>
                        <li><Link to="/postedprojects" style={{color: 'white',paddingLeft: '25px'}}> Posted Projects</Link></li>
                        <li><Link to="/biddedprojects" style={{color: 'white',paddingLeft: '25px'}}> Bidded Projects</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">

                        <li><Link to="/postproject"  className="btn" style={{height: '30px' ,marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e', marginRight: '23px'}}> Post a Project</Link></li>
                    </ul>
                </nav>

                <ProjectList redirect={this.redirect} />

            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        user: state.loginUser
    }
}

export default connect(mapStateToProps)(Inapp);
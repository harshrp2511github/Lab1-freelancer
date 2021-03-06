import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import coverimage from '../images/cover.jpg';

import white from '../images/white.jpg'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import unknown from '../images/harsh.JPG';
import * as API from "../api/API";
class Profile extends Component{
    state={
        email: this.props.user.email,
        name: '',
        phone: '',
        about: '',
        skills: '',
        profilepic: ''

    }

    componentWillMount(){
        this.setState({
            email: this.props.user.email,
            name: '',
            phone: '',
            about: '',
            skills: '',
            profilepic: ''

        });
        this.setFields(this.state);
        API.doCheckLogin()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/profile');
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
    setFields = (userdata) => {
        API.getProfile(userdata)
            .then((status) => {
                //console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.setState({
                        name: status.name,
                        phone: status.phone,
                        about: status.aboutme,
                        skills: status.skills,
                        profilepic: status.profilepic
                    });

                }

            });
    };


    render(){

        return <div style={{
            border: '0px solid transparent',
            position: 'fixed',
            backgroundColor: '#dbdbdb',
            right: '0',
            left: '0',
            top: '0',
            bottom: '0',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>
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

            <div style={{ backgroundImage: "url(" + coverimage + ")", position: 'absolute', width: '1532px', height: '356px'}}>

                <div className="container" style={{ width: '1000px', height: '450px', position: 'absolute', backgroundColor: 'white',  marginLeft: '270px', marginTop: '150px', marginBottom: '100px',color: 'black'}}>

                    <div style={{ position: 'absolute', marginTop: '-20px', marginLeft: '10px', width: '220px', height: '250px', backgroundColor: 'white', border: '0.2px solid'}}>

                            <img src={this.state.profilepic} style={{position: 'absolute', margin: '10px', marginLeft: '-100px' ,width: '200px', height: '230px', backgroundColor: 'white'}} />
                        <div style={{position: 'absolute', marginLeft: '175px', marginTop: '225px'}}><Link to="/updateimage"><span className="glyphicon glyphicon-camera" style={{width: '50px', height: '50px'}} ></span></Link></div>

                    </div>

                    <div style={{ position: 'absolute', marginTop: '250px', marginLeft: '10px', width: '220px', height: '150px', backgroundColor: 'white'}}>
                        <h4 style={{ textAlign: 'center', paddingTop: '0px'}}> </h4>
                    </div>


                    <div style={{ position: 'absolute', marginTop: '20px', marginLeft: '270px', width: '450px', height: '400px', backgroundColor: 'white' }}>
                        <h2 style={{ textAlign: 'left', fontWeight: 'bold'}}>{this.state.name}</h2>
                        <h4 style={{ textAlign: 'left', marginTop: '40px'}}>{this.state.skills} </h4>
                        <h5 style={{ textAlign: 'left', marginTop: '40px'}}>{this.state.about}</h5>
                    </div>

                    <div style={{ position: 'absolute', marginTop: '50px', marginLeft: '650px', width: '50px', height: '400px', backgroundColor: 'white' }}>
                        <div style={{ textAlign: 'left', fontWeight: 'bold'}}><Link to="/updatename"><span className="glyphicon glyphicon-pencil"></span></Link></div>
                        <div style={{ textAlign: 'left', marginTop: '45px'}}><Link to="/updateskills"><span className="glyphicon glyphicon-pencil"></span></Link> </div>
                        <div style={{ textAlign: 'left', marginTop: '45px'}}><Link to="/updateabout"><span className="glyphicon glyphicon-pencil"></span></Link></div>
                    </div>

                    <div style={{ position: 'absolute', marginTop: '0px', marginLeft: '750px', width: '250px', height: '450px', backgroundColor: '#efefef', borderLeft: '0.2px solid #e5e5e5', textAlign:'center'}}>
                        <span className="glyphicon glyphicon-user" style={{marginTop:'30px', color: '#ed5938'}}></span><br />
                        <h5>@{this.props.user.username}</h5><br /><br /><br />

                        <span className="glyphicon glyphicon-envelope" style={{marginTop:'0px', color: '#315fd6'}}></span><br />
                        <h5 style={{ }}>{this.props.user.email}</h5><br /><br /><br />

                        <span className="glyphicon glyphicon-earphone" style={{marginTop:'0px', color: '#0bc430'}}></span><br />
                        <h5>{this.state.phone}</h5>
                    </div>

                    <div style={{ position: 'absolute', marginTop: '0px', marginLeft: '950px', width: '50px', height: '450px', backgroundColor: '#efefef',  textAlign:'center'}}>
                        <div style={{marginTop:'30px', color: '#315fd6'}}></div><br />
                        <div style={{ marginTop: '7px'}} > </div><br /><br /><br />
                        <div style={{marginTop:'0px', color: '#ed5938'}}></div><br />
                        <div style={{ marginTop: '35px'}}></div><br /><br /><br />
                        <div style={{marginTop:'0px', color: '#0bc430'}}></div><br />
                        <div style={{ marginTop: '35px'}}><Link to="/updatephone"><span className="glyphicon glyphicon-pencil"></span></Link></div>
                    </div>

                </div>

            </div>




        </div>;
    }
}

function mapStateToProps(state){
    return{
        user: state.loginUser
    }
}

export default connect(mapStateToProps)(Profile);
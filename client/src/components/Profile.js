import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import cover from '../images/cover.jpg';
import profilebackground from '../images/profilebackground.jpg';
import white from '../images/white.jpg'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import unknown from '../images/unknown.png';
import * as API from "../api/API";
class Profile extends Component{
    state={
        email: this.props.user.email,
        name: '',
        phone: '',
        about: '',
        skills: ''

    }

    componentWillMount(){
        this.setState({
            email: this.props.user.email,
            name: '',
            phone: '',
            about: '',
            skills: ''

        });
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
                    });

                } else if (status.status == 'false') {

                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }

            });
    };


    render(){
        this.setFields(this.state);
        return <div style={{
            border: '0px solid transparent',
            marginTop: '10px',
            position: 'fixed',
            right: '0',
            left: '0',
            top: '0',
            bottom: '0',
            overflowY: 'scroll',
            overflowX: 'hidden'
        }}>

            <nav className="navbar navbar-default" style={{
                paddingLeft: '20px',
                paddingRight: '25px',
                marginBottom: '0px',
                backgroundColor: 'white',
                border: '1px solid black transparent'
            }}>
                <Link to="/inapp">
                    <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px', marginLeft: '50px'}}/>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    <li><button className="btn" onClick={() => this.handleSubmit()} style={{marginTop: '10px', height: '40px',color: 'white', backgroundColor: '#fc951e', marginRight: '50px'}}><span
                        class="glyphicon glyphicon-off"></span> Logout</button></li>
                </ul>
            </nav>


            <nav className="navbar navbar-default" style={{
                paddingLeft: '50px',
                paddingRight: '50px',
                backgroundColor: '#090030',
                marginTop: '0px',
                marginBottom: '0px',
                border: '1px solid black transparent',
                borderTop: '0px',
                height: '20px'
            }}>

                <ul className="nav navbar-nav">
                    <li><Link to="/inapp" type="btn" className="btn" style={{
                        height: '30px',marginRight:'10px' ,marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e', marginLeft: '40px'
                    }}> Home </Link></li>
                    <li><Link to="/profile" type="btn" className="btn" style={{
                        height: '30px',marginRight:'10px' ,marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e'
                    }}> My Profile </Link></li>

                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/postproject" type="btn" className="btn" style={{
                        height: '30px',marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e', marginRight: '25px'
                    }}> Post a Project</Link></li>
                </ul>
            </nav>


            <div style={{
                width: '1532px',
                height: '400px',
                backgroundImage: "url(" + cover + ")",
                marginTop: '0px',
                marginLeft: '2px',
                position: 'absolute'
            }}>
                <div style={{
                    width: '800px',
                    height: '700px',
                    backgroundImage: "url(" + profilebackground + ")",
                    marginBottom: '50px',
                    backgroundColor: 'white',
                    marginLeft: '366px',
                    marginTop: '100px',
                    border: '1px solid',
                    position: 'absolute'
                }}>
                    <div style={{
                        width: '205px',
                        height: '225px',
                        backgroundColor: 'white',
                        marginLeft: '10px',
                        marginTop: '-20px',
                        border: '1px solid ',
                        position: 'absolute'
                    }}>
                        <img src={unknown} style={{
                            width: '170px',
                            height: '200px',
                            marginTop: '12px',
                            marginLeft: '-1px',
                            border: '1px solid',
                            position: 'absolute'
                        }}/>

                        <Link to="/updateimage" className="btn" style={{ paddingLeft: '150px', paddingTop: '190px', color: 'black',width: '30px', height: '30px'}} ><span
                            class="glyphicon glyphicon-camera"></span></Link>

                    </div>

                    <div style={{
                        width: '500px',
                        height: '625px',
                        backgroundImage: "url(" + white + ")",
                        color: 'black',
                        marginLeft: '250px',
                        marginTop: '50px',
                        border: '1px solid  ',
                        textAlign: 'left',
                        paddingLeft: '50px',
                        paddingTop: '50px'
                    }}>
                        Email: <br/>
                        {this.state.email}<br/> <br/>
                        Name: <Link to="/updatename"
                                    style={{
                                        color: 'black',
                                        marginLeft: '55px'
                                    }}>
                        <span class="glyphicon glyphicon-edit"></span></Link><br />
                        {this.state.name}<br/> <br/>
                        Phone: <Link to="/updatephone"
                                    style={{
                                        color: 'black',
                                        marginLeft: '54px'
                                    }}>
                        <span class="glyphicon glyphicon-edit"></span></Link><br />
                        {this.state.phone}<br/> <br/>
                        About Me: <Link to="/updateabout"
                                    style={{
                                        color: 'black',
                                        marginLeft: '35px'
                                    }}>
                        <span class="glyphicon glyphicon-edit"></span></Link><br />
                        {this.state.about}<br/> <br/>
                        Skills: <Link to="/updateskills"
                                    style={{
                                        color: 'black',
                                        marginLeft: '62px'
                                    }}>
                        <span class="glyphicon glyphicon-edit"></span></Link><br />
                        {this.state.skills}<br/> <br/>




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
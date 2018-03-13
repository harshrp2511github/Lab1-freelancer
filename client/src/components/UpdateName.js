import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import cover from '../images/cover.jpg';
import profilebackground from '../images/profilebackground.jpg';
import {Link} from 'react-router-dom'
import unknown from '../images/unknown.png';
import white from '../images/white.jpg'
import {connect} from "react-redux";
import * as API from "../api/API";

class UpdateName extends Component{

    p_name = '';
    p_phone='';
    p_about='';
    p_skills='';
    state={
        email: this.props.user.email,
        name: '',
        phone: '',
        about: '',
        skills: ''
    }

    componentDidMount(){
        this.setState({
            email: this.props.user.email,
            name: '',
            phone: '',
            about: '',
            skills: ''
        });
    }

    setFields = (userdata) => {
        API.getProfile(userdata)
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {


                        this.p_name=status.name;
                        this.p_phone=status.phone;
                        this.p_about=status.about;
                        this.p_skills=status.skills;


                }

            });
    };

    // handleChange=(e)=> {
    //     this.setState({[e.target.name]: e.target.value});
    // }

    handleUpdate = (userinfo) => {
        API.updateName(userinfo);
        this.props.redirectURL("/profile");
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
                    <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px'}}/>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/" style={{paddingTop: '25px', color: 'black'}}><span
                        class="glyphicon glyphicon-off"></span> Logout</Link></li>
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
                    <li><Link to="/profile" type="btn" className="btn" style={{
                        height: '40px',
                        marginTop: '5px',
                        paddingTop: '10px',
                        color: 'white',
                        backgroundColor: '#fc951e'
                    }}> My Profile </Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/postproject" type="btn" className="btn" style={{
                        height: '40px',
                        marginTop: '5px',
                        paddingTop: '10px',
                        color: 'white',
                        backgroundColor: '#fc951e'
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
                           // position: 'absolute'
                        }}/>



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
                        <div class="form-group">

                        Email: <br/>
                        {this.state.email}<br/> <br/>
                            Name: <br />
                            <div class="form-group">

                                    <input
                                        style={{width: '200px',color: 'black'}}
                                        type="text"
                                        placeholder="Update your Name"
                                        name="name"
                                        onInput={(event)=>{
                                            this.setState({
                                                name:event.target.value});
                                        }}
                                        required
                                    />

                            </div>

                            <button
                            type="button"
                            className="btn"
                            onClick={() => this.handleUpdate(this.state)}
                            style={{
                            height: '40px',
                            marginTop: '5px',
                            paddingTop: '10px',
                            backgroundColor: '#fc951e',
                            color: 'black'


                        }}>Update Name</button>

                            <Link
                                to="/profile"
                                type="button"
                                className="btn"
                                style={{
                                    height: '40px',
                                    marginTop: '5px',
                                    marginLeft: '5px',
                                    paddingTop: '10px',
                                    backgroundColor: '#fc951e',
                                    color: 'black'


                                }}>Cancel</Link>
                        </div>
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

export default connect(mapStateToProps)(UpdateName);
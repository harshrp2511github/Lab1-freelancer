import React, {Component} from 'react';
import freelancer from  '../images/download.png';
import * as API from '../api/API';
import {Link} from 'react-router-dom';
import Message from "./Message";


class Signup extends Component{


    state={
        email: '',
        password: '',
        username: '',
        message: '',
        profile: '',
        emailmessage: '',
        passwordmessage: '',
        usernamemessage: ''


    }

    componentDidMount(){
        this.setState({
            email: '',
            password: '',
            username: '',
            message: '',
            profile: '',
            emailmessage:'',
            usernamemessage: ''
        });
    }

    handleSignUp = (userdata) => {

            this.setState({
                emailmessage: '',
                usernamemessage: '',
                passwordmessage: '',
                type: true
            },()=>this.handleAfterSignUp(userdata));


    }

    handleAfterSignUp = (userdata) => {
        var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        if (!re.test(this.state.email) ) {
            this.setState({
                emailmessage: 'Invalid Email Address',
                type: true
            },()=>this.handleAfterEmail(userdata));
        }
        else{
            this.handleAfterEmail(userdata)
        }

    }

    handleAfterEmail =(userdata) => {

        if(this.state.password.length < 8){
            this.setState({
                passwordmessage: 'Password should be atleast 8 in length',
                type: true
            },()=>this.handleAfterPassword(userdata));
        }
        else{
            this.handleAfterPassword(userdata);
        }
    }

    handleAfterPassword =(userdata) => {

        if(this.state.username.length < 1){
            this.setState({
                usernamemessage: 'Enter your Username',
                type: true
            },()=>this.handleAfterValidation(userdata));
        }
        else{
            this.handleAfterValidation(userdata)
        }
    }

    handleAfterValidation = (userdata) => {
debugger
        if(this.state.emailmessage != "Invalid Email Address" && this.state.passwordmessage != "Password should be atleast 8 in length" && this.state.usernamemessage != "Enter your Username" ) {
            API.doSignUp(userdata)
                .then((res) => {

                    if (res.status === 'true') {
                        this.setState({
                            message: "Sign up Successful..!!",
                        });

                    } else if (res.status === 'false') {
                        this.setState({

                            message: res.message
                        });
                    }
                });

            API.setProfile(userdata)
                .then((res) => {

                    if (res.status === 'true') {
                        this.setState({
                            profile: "Profile setup Successfull..!!",
                        });

                    } else if (res.status === 'false') {
                        this.setState({

                            profile: "Profile setup Failed"
                        });
                    }
                });
        }
    };

    // handleEmailInput = (event) => {
    //
    //         this.setState({
    //             email:event.target.value,
    //             type:true
    //         })
    //
    //
    //
    // }

    render(){
        return(
            <div style={{paddingTop: '50px',paddingLeft: '600px',marginLeft: 'auto', marginRight: 'auto' }} >



                <div class="well well-sm" style={{width:'390px'}}>
                    <form class="form-horizontal" style={{ }} >
                        <fieldset>

                            <div class="form-group">



                                <img src={freelancer} style={{width: '300px'}}  />
                                <hr style={{borderWidth: '2px', width: '300px'}}/>

                            </div>

                            <h5 style={{paddingRight: '5px'}}> Signup today for FREE!!</h5>
                            <hr style={{borderWidth: '2px', width: '300px'}}/>

                            <div class="form-group">
                                <div class="col-md-8" style={{paddingLeft: '100px'}}>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.email}
                                        onChange={(event)=>{
                                            this.setState({
                                                email:event.target.value,
                                                type:true
                                            });
                                        }}
                                        required
                                        autoFocus
                                    />
                                </div>

                            </div>
                            <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', marginBottom: '10px', textAlign: 'center'}}>
                            <Message message={this.state.emailmessage}/>
                            </div>
                            <div class="form-group">
                                <div class="col-md-8" style={{paddingLeft: '100px'}}>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Username"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.username}
                                        onChange={(event)=>{
                                            this.setState({
                                                username:event.target.value,
                                                type:true
                                            });
                                        }}
                                        required

                                    />
                                </div>
                            </div>
                            <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', marginBottom: '10px', textAlign: 'center'}}>
                                <Message message={this.state.usernamemessage}/>
                            </div>

                            <div class="form-group">
                                <div class="col-md-8" style={{paddingLeft: '100px'}}>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.password}
                                        onChange={(event)=>{
                                            this.setState({
                                                password:event.target.value,
                                                type:true
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>
                            <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', marginBottom: '10px', textAlign: 'center'}}>
                                <Message message={this.state.passwordmessage}/>
                            </div>

                            <div class="form-group">
                                <div >
                                    <label class="radio-inline btn btn-default" style={{width: '95px'}} >
                                        <input
                                            type="radio"
                                            name="optradio"
                                        />Work
                                    </label>
                                    <label class="radio-inline btn btn-default"  style={{width: '95px'}}>
                                        <input
                                            type="radio"
                                            name="optradio"
                                        />Hire
                                    </label>
                                </div>
                            </div>



                            <div class="form-group">
                                <div class="col-md-8 text-center" style={{paddingLeft: '100px'}}>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-lg"
                                        style={{width: '200px'}}
                                        onClick={() =>  this.handleSignUp(this.state)}
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </div>

                            <Message message={this.state.message}/>
                            <hr style={{borderWidth: '2px', width: '300px'}}/>
                            <br />
                            <h4> Already have an account?</h4>
                            <Link to="/login">Login</Link>



                        </fieldset>
                    </form>
                </div>



            </div>
        );
    }
}

export default Signup;
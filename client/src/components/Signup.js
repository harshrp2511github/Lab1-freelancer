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
        profile: ''


    }

    componentDidMount(){
        this.setState({
            email: '',
            password: '',
            username: '',
            message: '',
            profile: ''
        });
    }

    handleSignUp = (userdata) => {

        API.doSignUp(userdata)
            .then((res) => {

                if (res.status === 'true') {
                    this.setState({
                        message: "Profile setup Successfully..!!",
                    });

                } else if (res.status === 'false') {
                    this.setState({

                        message: "Profile setup Failed"
                    });
                }
            });

        API.setProfile(userdata)
            .then((res) => {

                if (res.status === 'true') {
                    this.setState({
                        profile: "Signup Successfull..!!",
                    });

                } else if (res.status === 'false') {
                    this.setState({

                        profile: "SignUp Failed"
                    });
                }
            });
    };

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
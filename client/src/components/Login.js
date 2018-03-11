import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {loginUser} from "../actions";
import freelancer from  '../images/download.png';
import * as API from "../api/API";
import Message from "./Message";





class Login extends Component {


    state = {
        email: '',
        password: '',
        isLoggedIn: 'false',
        message: ''

    };



    componentWillMount() {
        this.setState({
            email: '',
            password: '',
            isLoggedIn: 'false',
            message: ''
        });
    }

    handleSubmit = (userdata) => {
        API.doLogin(userdata.payload)
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to Freelancer..!!",
                    });
                    this.props.redirectURL("/inapp");
                } else if (status.status == 'false') {

                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };

    render() {
        return (
            <div style={{paddingTop: '80px', paddingLeft: '600px', marginLeft: 'auto', marginRight: 'auto'}}>


                <div class="well well-sm" style={{width: '390px'}}>
                    <form class="form-horizontal" style={{}}>
                        <fieldset>

                            <div class="form-group">


                                <img src={freelancer} style={{width: '300px'}}/>
                                <hr style={{borderWidth: '2px', width: '300px'}}/>

                            </div>

                            <h5 style={{paddingRight: '5px'}}> Login to your account!!</h5>
                            <hr style={{borderWidth: '2px', width: '300px'}}/>

                            <div class="form-group">

                                <div class="col-md-8" style={{paddingLeft: '100px'}}>

                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Email Address"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.email}
                                        onChange={(event) => {
                                            this.setState({
                                                email: event.target.value,
                                                type: true
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
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.password}
                                        onChange={(event) => {
                                            this.setState({
                                                password: event.target.value,
                                                type: true
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-8 text-center" style={{paddingLeft: '100px'}}>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-lg"
                                        style={{width: '200px'}}
                                        onClick={() => this.handleSubmit(this.props.loginUser(this.state))}

                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                            <Message message={this.state.message}/>
                            <hr style={{borderWidth: '2px', width: '300px'}}/>
                            <br/>
                            <h4> Don't have an account yet?</h4>
                            <Link to="/signup">Signup Today</Link>

                        </fieldset>
                    </form>
                </div>

            </div>
        );
    }

}

    function mapStateToProps(state){
        return{
            user: state.loginUser
        }
    }
    function matchDispatchToProps(dispatch){
        return bindActionCreators({loginUser: loginUser}, dispatch)
    }


export default connect(mapStateToProps, matchDispatchToProps)(Login);
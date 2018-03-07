import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import Message from "./Message";
import Inapp from './Inapp';
import * as API from '../api/API';

class StartPage extends Component{

    state={
        isLoggedIn: false,
        message: ''
    }
    render(){
        return(
            <div>

                <Route exact path="/" render={() => (
                    <div>
                        <Welcome />
                    </div>
                )}/>

                <Route exact path="/login" render={() => (
                    <div>
                        <div>
                            <Login handleSubmit={this.handleSubmit}/>
                            <Message message={this.state.message}/>
                        </div>
                    </div>
                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup handleSignUp={this.handleSignUp} />
                        <Message message={this.state.message}/>
                    </div>
                )}/>

                <Route exact path="/inapp" render={() => (
                    <div>
                        <Inapp />
                    </div>
                )}/>


            </div>
        );
    }

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                     this.setState({
                        isLoggedIn: true,
                        message: "Welcome to Freelancer..!!",
                     });
                    this.props.history.push("/inapp");
                } else if (status.status == 'false') {

                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };


    handleSignUp = (userdata) => {

        API.doSignUp(userdata)
            .then((res) => {

                if (res.status === 'true') {
                    this.setState({
                        isLoggedIn: false,
                        message: "Signup Successfull..!!",
                    });

                } else if (res.status === 'false') {
                    this.setState({
                        isLoggedIn: false,
                        message: "SignUp Failed"
                    });
                }
            });
    };
}

export default withRouter(StartPage);
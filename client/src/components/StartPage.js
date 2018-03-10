import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import Inapp from './Inapp';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';


class StartPage extends Component{

 redirectURL = () => {
     debugger;
     this.props.history.push("/inapp");

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

                            <Login redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/signup" render={() => (
                    <div>
                        <Signup  />

                    </div>
                )}/>

                <Route exact path="/inapp" render={() => (
                    <div>
                        <Inapp />
                    </div>
                )}/>

                <Route exact path="/profile" render={() => (
                    <div>
                        <Profile />
                    </div>
                )}/>

                <Route exact path="/updateprofile" render={() => (
                    <div>
                        <UpdateProfile />
                    </div>
                )}/>


            </div>
        );
    }




}

export default withRouter(StartPage);
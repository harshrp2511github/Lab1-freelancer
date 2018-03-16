import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import Inapp from './Inapp';
import Profile from './Profile';
import UpdateName from './UpdateName';
import UpdatePhone from './UpdatePhone';
import UpdateAbout from './UpdateAbout';
import UpdateSkills from './UpdateSkills';
import UpdateImage from './UpdateImage';
import PostProject from './PostProject';
import ActivateProject from './ActivateProject';
import PlaceBid from './PlaceBid';
import PostedProjects from './PostedProjects'
import BiddedProjects from './BiddedProjects'
import MyActiveProject from './MyActiveProject'
import MyActiveBiddedProject from './MyActiveBiddedProject'


class StartPage extends Component{

    redirectURL = (url) => {
        debugger;
        this.props.history.push(url);

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
                        <Inapp redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/profile" render={() => (
                    <div>
                        <Profile redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/updatename" render={() => (
                    <div>
                        <UpdateName redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/updatephone" render={() => (
                    <div>
                        <UpdatePhone redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/updateabout" render={() => (
                    <div>
                        <UpdateAbout redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/updateskills" render={() => (
                    <div>
                        <UpdateSkills redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/updateimage" render={() => (
                    <div>
                        <UpdateImage redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/postproject" render={() => (
                    <div>
                        <PostProject redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/activeproject" render={() => (
                    <div>
                        <ActivateProject redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/placebid" render={() => (
                    <div>
                        <PlaceBid redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/postedprojects" render={() => (
                    <div>
                        <PostedProjects redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/biddedprojects" render={() => (
                    <div>
                        <BiddedProjects redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/myactiveproject" render={() => (
                    <div>
                        <MyActiveProject redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/myactivebiddedproject" render={() => (
                    <div>
                        <MyActiveBiddedProject redirectURL={this.redirectURL} />
                    </div>
                )}/>


            </div>
        );
    }




}

export default withRouter(StartPage);
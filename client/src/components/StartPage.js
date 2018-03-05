import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
class StartPage extends Component{

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
                       <Login />
                   </div>
               )}/>

               <Route exact path="/signup" render={() => (
                   <div>
                       <Signup />
                   </div>
               )}/>


           </div>
       );
   }
}

export default withRouter(StartPage);
import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import front from '../images/freelancer.jpg';
import {Link} from 'react-router-dom';
import * as API from "../api/API";

class Welcome extends Component{

    render(){
        API.doLogout()
        return(
            <div style={{border: '0px solid transparent' , background: 'linear-gradient(to right,#3c75d8,#21b8ef )', position: 'fixed', bottom: '0', right: '0', left: '0', top: '0'}}>

                <nav className="navbar navbar-default" style={{ paddingLeft: '20px', paddingRight: '25px',backgroundColor: 'white', border: '1px solid black transparent'}}>
                    <Link to="/">
                        <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px', marginLeft: '50px'}} />
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup" style={{color: 'black', paddingTop: '20px'}} ><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login" style={{color: 'black', paddingTop: '20px'}} ><span class="glyphicon glyphicon-log-in" ></span> Login</Link></li>
                        <li><Link to="/login"  className="btn" style={{height: '40px', marginTop: '10px', marginLeft: '12px',marginRight: '50px',paddingTop: '10px', color: 'white', backgroundColor: '#fc951e'}}> Post a Project</Link></li>

                    </ul>
                </nav>

                <div style={{position: 'absolute'}}>
                    <h2 className="text-white" style={{position:'absolute', left:'0px',paddingTop: '150px', paddingLeft: '50px', width: '400px', color: 'white', textAlign: 'left'}}>
                        HIRE Expert Freelancers for any job, online
                    </h2>
                    <p style={{position:'absolute', left:'0px',paddingTop: '275px',paddingLeft: '50px', width: '400px', color: 'white', textAlign: 'left'}}>
                        Millions of small businesses use Freelancer to turn their ideas into reality
                    </p>
                    <img src={front} style={{position:'absolute', width:'300px', height: '300px',marginTop: '55px',marginLeft: '1150px'}} />
                    <Link className="btn" to="/signup" style={{position: 'absolute', backgroundColor: '#fc951e' ,marginTop: '355px',marginLeft: '50px', color: 'white'}}>I want to Hire</Link>
                    <Link className="btn" to="/signup" style={{position: 'absolute', marginTop: '355px',marginLeft: '170px', border: '1px solid white' ,color: 'white'}}>I want to Work</Link>

                    <h3 style={{position:'absolute', width:'300px', height: '300px',marginTop: '395px',marginLeft: '1150px', textAlign: 'left', color: 'white'}}>
                        Need Work Done?
                    </h3>
                    <p style={{position:'absolute', width:'300px', height: '300px', marginTop: '450px',marginLeft: '1150px', textAlign: 'left', color: 'white'}}>
                        It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.
                    </p>
                </div>
            </div>
        );
    }
}
export default Welcome;
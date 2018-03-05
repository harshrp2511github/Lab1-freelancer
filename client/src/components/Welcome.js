import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import front from '../images/freelancer.jpg';
class Welcome extends Component{

    render(){
        return(
            <div style={{margin:'20px',border: '0px solid transparent' , backgroundColor: '#4183f4', position: 'fixed', bottom: '0', right: '0', left: '0', top: '0'}}>

                <nav className="navbar navbar-default" style={{ backgroundColor: 'white', border: '0px solid transparent'}}>
                    <a href="http://localhost:3000/">
                    <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px'}} />
                    </a>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="http://localhost:3000/signup" ><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="http://localhost:3000/login" style={{paddingRight:'30px'}}><span class="glyphicon glyphicon-log-in" ></span> Login</a></li>
                    </ul>
                </nav>

                <div>
                    <h2 className="text-white" style={{position:'absolute', left:'0px',paddingTop: '150px', paddingLeft: '50px', width: '400px', color: 'white', textAlign: 'left'}}>
                        HIRE Expert Freelancers for any job, online
                    </h2>
                    <p style={{position:'absolute', left:'0px',paddingTop: '275px',paddingLeft: '50px', width: '400px', color: 'white', textAlign: 'left'}}>
                        Millions of small businesses use Freelancer to turn their ideas into reality
                    </p>
                    <img src={front} style={{position:'absolute', width:'300px', height: '300px', right:'0px',paddingTop: '55px',paddingRight: '50px'}} />
                    <form  action="http://localhost:3000/signup" style={{position:'absolute', width:'500px', height: '300px', left:'0px',paddingTop: '355px',paddingLeft: '50px', textAlign: 'left', color: 'black'}}>
                        <input className=" btn btn-warning  btn-outline-warning" type="submit" value="I want to Work" />
                    </form>
                    <form  action="http://localhost:3000/signup" style={{position:'absolute', width:'500px', height: '300px', left:'0px',paddingTop: '355px',paddingLeft: '175px', textAlign: 'left', color: 'black'}}>
                        <input className=" btn btn-success  btn-outline-success" type="submit" value="I want to Hire" />
                    </form>

                    <h3 style={{position:'absolute', width:'300px', height: '300px', right:'0px',paddingTop: '355px',paddingRight: '50px', textAlign: 'left', color: 'white'}}>
                        Need Work Done?
                    </h3>
                    <p style={{position:'absolute', width:'300px', height: '300px', right:'0px',paddingTop: '450px',paddingRight: '50px', textAlign: 'left', color: 'white'}}>
                        It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.
                    </p>
                </div>

            </div>
        );
    }
}

export default Welcome;
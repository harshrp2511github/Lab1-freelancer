import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import cover from '../images/cover.jpg';
import profilebackground from '../images/profilebackground.jpg';
import {Link} from 'react-router-dom'
import unknown from '../images/unknown.jpg';

class UpdateProfile extends Component{

    render(){

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
                <a href="http://localhost:3000/inapp">
                    <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px'}}/>
                </a>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="http://localhost:3000" style={{paddingTop: '25px', color: 'black'}}><span
                        class="glyphicon glyphicon-off"></span> Logout</a></li>
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
                    <li><a type="btn" className="btn" style={{
                        height: '40px',
                        marginTop: '5px',
                        paddingTop: '10px',
                        color: 'white',
                        backgroundColor: '#fc951e'
                    }}> My Profile </a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a type="btn" className="btn" style={{
                        height: '40px',
                        marginTop: '5px',
                        paddingTop: '10px',
                        color: 'white',
                        backgroundColor: '#fc951e'
                    }}> Post a Project</a></li>
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
                            height: '180px',
                            marginTop: '12px',
                            marginLeft: '-1px',
                            border: '1px solid',
                        }}/>
                        <input type="file" name="Upload" style={{ marginTop: '5px', paddingLeft: '10px' }}/>


                    </div>
                    <div style={{
                        width: '500px',
                        height: '600px',
                        backgroundColor: '#090030',
                        color: 'white',
                        marginLeft: '250px',
                        marginTop: '50px',
                        border: '1px solid  ',
                        textAlign: 'left',
                        paddingLeft: '50px',
                        paddingTop: '50px'
                    }}>
                        Name: <br/>
                        <input style={{color: 'black', width: '250px'}} autoFocus /><br/> <br/>
                        Email: <br/>
                        <input style={{color: 'black', width: '250px'}}  /><br/> <br/>
                        Phone number: <br/>
                        <input style={{color: 'black', width: '250px'}}  /><br/> <br/>
                        About Me: <br/>
                        <textarea style={{color: 'black', width: '300px', height: '100px'}}  /><br/> <br/>
                        Skills: <br/>
                        <textarea style={{color: 'black', width: '300px', height: '100px'}}  /><br/> <br/>


                        <Link to="/profile" className="btn" style={{
                            height: '40px',
                            marginTop: '5px',
                            paddingTop: '10px',
                            backgroundColor: '#fc951e',
                            color: 'white'

                        }}> Save your Profile</Link>

                    </div>


                </div>

            </div>


        </div>;
    }
}

export default UpdateProfile;
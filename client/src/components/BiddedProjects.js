import React, { Component } from 'react';
import * as API from "../api/API";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {selectedProject} from "../actions";
import freelancer from  '../images/download.png';
import unknown from '../images/harsh.JPG';

class PostedProject extends Component{

    state={
        email: this.props.user.email,
        profilepic: '',
        projects: []
    }

    componentWillMount(){

        this.setState({
            email: this.props.user.email,
            profilepic: '',
            projects: []
        })
        this.getMyBiddedProjects(this.state);
        this.setFields(this.state);


        API.doCheckLogin()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/biddedprojects');
                }
                else{
                    this.props.redirectURL('/');
                }
            });
    }

    setFields = (userdata) => {
        API.getProfile(userdata)
            .then((status) => {
                //console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.setState({
                        profilepic: status.profilepic
                    });

                }

            });
    };


    getMyBiddedProjects = (userdata) =>{
        API.getMyBiddedProjectList(userdata)
            .then((result) => {
                //console.log(JSON.stringify(status));
                debugger;

                this.setState({
                    projects: result.results
                });



            });
    };

    handleLogout = () => {
        API.doLogout()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/');
                }
            });


    }

    handleSubmit = () => {
        this.props.redirectURL('/myactivebiddedproject');
    }

    renderProjects(){
        return this.state.projects.map((project) => {
            if(project.winnername == null){
                return (
                    <div className="container border border-primary" style={{
                        marginTop: '1px',
                        marginBottom: '1px',
                        height: '150px',
                        color: 'black',
                        backgroundColor: 'white',
                        textAlign: 'left'
                    }}>
                        <h3 onClick={() => this.handleSubmit(this.props.selectedProject(project))} style={{
                            marginTop: '5px',
                            marginLeft: '10px',
                            position: 'absolute',
                            textDecoration: 'underline',
                            color: '#314b7f'
                        }}><b>{project.projectname}</b></h3>
                        <h5 style={{marginLeft: '425px', fontSize: '15px', position: 'absolute'}}> Posted
                            by: {project.name}</h5>
                        <div style={{
                            marginTop: '50px',
                            marginLeft: '10px',
                            height: '70px',
                            width: '650px',
                            position: 'absolute',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}>Description: {project.projectdesc}
                        </div>
                        <h5 style={{
                            marginTop: '100px',
                            height: '25px',
                            marginLeft: '10px',
                            width: '900px',
                            position: 'absolute'
                        }}>Skills: {project.projectskills}</h5>
                        <h5 style={{paddingLeft: '800px', postion: 'absolute'}}> Bids:{project.projectbids} </h5>
                        <h5 style={{paddingLeft: '800px', paddingTop: '30px'}}>Price(USD): ${project.projectmin} -
                            ${project.projectmax}</h5>
                        <button className="btn" onClick={() => this.handleSubmit(this.props.selectedProject(project))}
                                style={{
                                    marginLeft: '1000px',
                                    marginTop: '10px',
                                    backgroundColor: '#05911d',
                                    color: 'white'
                                }}>VIEW BIDS!!
                        </button>
                    </div>
                )
            }
            else{
                return (
                    <div className="container border border-primary" style={{
                        marginTop: '1px',
                        marginBottom: '1px',
                        height: '150px',
                        backgroundColor: 'white',
                        color: 'black',
                        textAlign: 'left'
                    }}>
                        <h3 onClick={() => this.handleSubmit(this.props.selectedProject(project))} style={{
                            marginTop: '5px',
                            marginLeft: '10px',
                            position: 'absolute',
                            textDecoration: 'underline',
                            color: '#314b7f'
                        }}><b>{project.projectname}</b></h3>
                        <h5 style={{marginLeft: '425px', fontSize: '15px', position: 'absolute'}}> Posted
                            by: {project.name}</h5>
                        <div style={{
                            marginTop: '50px',
                            marginLeft: '10px',
                            height: '70px',
                            width: '650px',
                            position: 'absolute',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}>Description: {project.projectdesc}
                        </div>
                        <h5 style={{
                            marginTop: '100px',
                            height: '25px',
                            marginLeft: '10px',
                            width: '900px',
                            position: 'absolute'
                        }}>Skills: {project.projectskills}</h5>
                        <h5 style={{paddingLeft: '800px', postion: 'absolute'}}> Bids:{project.projectbids} </h5>
                        <h5 style={{paddingLeft: '800px', paddingTop: '30px'}}>Price(USD): ${project.projectmin} -
                            ${project.projectmax}</h5>
                        <h3 style={{ marginTop: '20px', marginLeft: '800px',textDecoration: 'underline', fontWeight: 'bold'}}>SOLD TO: {project.winnername} </h3>

                    </div>
                )

            }


        })
    }

    render(){

        return(
            <div style={{
                background: '#dbdbdb',
                position: 'fixed',
                bottom: '0',
                right: '0',
                left: '0',
                top: '0',
            overflowY: 'scroll'}}>
                <nav className="navbar navbar-default" style={{paddingLeft:'20px',  paddingRight: '25px', marginBottom:'0px',backgroundColor: 'white', border: '1px solid black transparent'}}>

                    <Link to="/inapp">
                        <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px', marginLeft: '50px'}} />
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <div class="dropdown" style={{ paddingTop: '2px'}}>
                            <img src={this.state.profilepic} class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"  style={{ marginRight: '110px',width: '50px', height: '50px', marginTop: '2px'}} />

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ backgroundColor: '#073c59'}}>
                                <Link class="dropdown-item" to="/inapp" style={{ color: '#fc951e',paddingLeft: '5px'}}>Home</Link><br />
                                <Link class="dropdown-item" to="/profile" style={{ color: '#fc951e',paddingLeft: '5px'}}>My Profile</Link><br />
                                <Link class="dropdown-item" to="/postproject" style={{ color: '#fc951e',paddingLeft: '5px'}}>Post a Project</Link><br />
                                <Link class="dropdown-item" to="/postedprojects" style={{ color: '#fc951e',paddingLeft: '5px'}}>Posted Projects</Link><br />
                                <Link class="dropdown-item"  to="/biddedprojects" style={{ color: '#fc951e',paddingLeft: '5px'}}>Bidded Projects</Link><br />
                                <Link class="dropdown-item" onClick={() => this.handleLogout()} to="#" style={{ color: '#fc951e',paddingLeft: '5px'}}>Logout</Link>
                            </div>
                        </div>
                    </ul>
                </nav>

                <nav className="navbar navbar-default" style={{ paddingRight: '50px',backgroundColor: '#073c59',marginTop: '0px',border: '1px solid black transparent', borderTop: '0px', height: '20px'}}>

                    <ul className="nav navbar-nav ">
                        <li><Link to="/inapp" style={{color: 'white', marginLeft: '75px'}}>  Home </Link></li>
                        <li><Link to="/profile" style={{color: 'white',paddingLeft: '25px'}}> My Profile</Link></li>
                        <li><Link to="/postedprojects" style={{color: 'white',paddingLeft: '25px'}}> Posted Projects</Link></li>
                        <li><Link to="/biddedprojects" style={{color: 'white',paddingLeft: '25px'}}> Bidded Projects</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">

                        <li><Link to="/postproject"  className="btn" style={{height: '30px' ,marginTop: '10px', paddingTop: '5px',color: 'white', backgroundColor: '#fc951e', marginRight: '23px'}}> Post a Project</Link></li>
                    </ul>
                </nav>

                <div className="container" style={{paddingTop: '10px',color: 'white',backgroundColor: '#3a3b3d', textAlign: 'left',marginTop: '20px', height: '50px',paddingLeft: '20px'}} >
                    <h4>MY BIDDED PROJECTS</h4>
                </div>
                {this.renderProjects()}
                <Link to="/inapp" class="btn" style={{ marginBottom: '100px',position: 'absolute' ,backgroundColor: '#fc951e', color: 'white', textAlign: 'center', marginTop: '100px', marginLeft: '-50px'}}>BACK TO HOME</Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.loginUser,
        project: state.selectedProject
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedProject: selectedProject}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(PostedProject);
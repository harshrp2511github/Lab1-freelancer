import React, { Component } from 'react';
import * as API from "../api/API";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {selectedProject} from "../actions";

class ProjectList extends Component{

    state={
        projects: []
    }

    componentWillMount(){
        this.getProjects();
        this.setState({
            projects: []
        })
    }

    getProjects = () =>{
        API.getProjectList()
            .then((result) => {
                //console.log(JSON.stringify(status));
                debugger;

                this.setState({
                    projects: result.results
                });



            });
    };

    handleSubmit = () => {
        this.props.redirect('/activeproject');
    }

    renderProjects(){
        return this.state.projects.map((project) => {
            if(project.projectopen == 'yes') {
                return (
                    <div className="container btn border border-primary" style={{
                        border: '1px solid',
                        marginTop: '2px',
                        marginBottom: '2px',
                        height: '150px',
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
                            by: {project.email}</h5>
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
                                    marginLeft: '1050px',
                                    marginTop: '10px',
                                    backgroundColor: '#05911d',
                                    color: 'white'
                                }}>BID NOW!!
                        </button>
                    </div>
                )
            }
            else{
                return(
                    <div></div>
                );
            }
        })
    }

    render(){

        return(
            <div>
                <div className="container btn" style={{border: '1px solid #090030',color: 'white', textAlign: 'left', height: '50px',paddingLeft: '20px', backgroundColor: '#090030'}}>
                    <h4>PROJECTS</h4>
                </div>
                {this.renderProjects()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        project: state.selectedProject
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedProject: selectedProject}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(ProjectList);
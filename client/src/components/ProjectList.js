import React, { Component } from 'react';
import * as API from "../api/API";

class ProjectList extends Component{

    state={
        projects: []
    }

    componentDidMount(){
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
    renderProjects(){
        return this.state.projects.map((project) => {
            return(
                <div className="container btn border border-primary" style={{border: '1px solid',marginTop: '2px',marginBottom: '2px',height: '150px', color: 'black',textAlign: 'left'}}>
                    <h4 style={{ paddingTop: '-5px',position: 'absolute'}}><b>{project.projectname}</b><span style={{marginLeft: '100px', textDecoration: 'underline' ,fontSize: '15px', position: 'absolute'}}> Posted by: {project.email}</span></h4>
                    <div style={{ marginTop:'35px',height: '70px',width: '650px', position: 'absolute'}}>
                    <h5 >Description: {project.projectdesc}</h5>
                    </div>
                    <h4 style={{ marginTop:'105px',height: '25px', width: '500px', position: 'absolute'}}>Skills: {project.projectskills}</h4>
                    <h5 style={{paddingLeft: '700px', postion: 'absolute'}}> Bids: </h5>
                    <h5 style={{paddingLeft: '700px', paddingTop: '30px'}}>Price(USD): ${project.projectmin} - ${project.projectmax}</h5>
                    <button  className="btn" style={{marginLeft: '1000px', backgroundColor: '#fc951e', color: 'white'}}>View Project Details</button>
                </div>
            )
        })
    }

    render(){
        this.getProjects();
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

export default ProjectList;
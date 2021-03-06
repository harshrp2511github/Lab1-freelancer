import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import freelancer from  '../images/download.png';
import {connect} from "react-redux";
import * as API from "../api/API";
import Message from "./Message";

class PostProject extends Component{

    state={
        email: this.props.user.email,
        name: this.props.user.username,
        projectname: '',
        projectdesc: '',
        projectskills: '',
        projectmin: '',
        projectmax: '',
        projectopen: 'yes',
        projectbids: 0,
        projectavgbid: 0,
        message: '',
        namemessage: '',
        descriptionmessage: '',
        skillsmessage: '',
        budgetmessage: ''
    }

    componentDidMount(){
        this.setState({
            email: this.props.user.email,
            name: this.props.user.username,
            projectname: '',
            projectdesc: '',
            projectskills: '',
            projectmin: '',
            projectmax: '',
            projectopen: 'yes',
            projectbids: 0,
            projectavgbid: 0,
            message: '',
            namemessage: '',
            descriptionmessage: '',
            skillsmessage: '',
            budgetmessage: ''
        });
    }

    handleUpdate = (userdata) => {

        this.setState({
            namemessage: '',
            descriptionmessage: '',
            skillsmessage: '',
            budgetmessage: '',
            type: true
        },()=>this.handleName(userdata));
    }

    handleName = (userdata) => {
        if (this.state.projectname.length<1) {
            this.setState({
                namemessage: 'Input Cannot Be Empty',
                type: true
            },()=>this.handleDescription(userdata));
        }
        else{
            this.handleDescription(userdata)
        }

    }

    handleDescription = (userdata) => {
        if (this.state.projectdesc.length<1) {
            this.setState({
                descriptionmessage: 'Input Cannot Be Empty',
                type: true
            },()=>this.handleSkills(userdata));
        }
        else{
            this.handleSkills(userdata)
        }

    }

    handleSkills = (userdata) => {
        if (this.state.projectskills.length<1) {
            this.setState({
                skillsmessage: 'Input Cannot Be Empty',
                type: true
            },()=>this.handleBudget(userdata));
        }
        else{
            this.handleBudget(userdata)
        }

    }

    handleBudget = (userdata) => {
        if (this.state.projectmin.length<1 || this.state.projectmax.length <1) {
            this.setState({
                budgetmessage: 'Input Cannot Be Empty',
                type: true
            },()=>this.handleBudget2(userdata));
        }
        else{
            this.handleBudget2(userdata)
        }

    }

    handleBudget2 = (userdata) => {
        if (Number(this.state.projectmin)>Number(this.state.projectmax)) {
            this.setState({
                budgetmessage: 'Max budget should be greater than min budget',
                type: true
            },()=>this.handleProject(userdata));
        }
        else{
            this.handleProject(userdata)
        }

    }

    handleProject = (userdata) => {
        if (this.state.namemessage != 'Input Cannot Be Empty' && this.state.descriptionmessage != 'Input Cannot Be Empty' && this.state.skillsmessage != 'Input Cannot Be Empty' && this.state.budgetmessage != 'Input Cannot Be Empty' && this.state.budgetmessage != 'Max budget should be greater than min budget') {
        API.postProject(userdata)
            .then((res) => {

                if (res.status === 'true') {
                    this.setState({
                        message: res.message

                    });
                    this.props.redirectURL("/inapp");
                } else if (res.status === 'false') {
                    this.setState({

                        message: res.message
                    });
                }
            });
    }
    }

    render(){
        return(
            <div style={{
                border: '0px solid transparent',
                position: 'fixed',
                right: '0',
                left: '0',
                top: '0',
                bottom: '0',
                overflowY: 'scroll',
                overflowX: 'hidden'}}>

                <div className="container" style={{ textAlign: 'left', marginTop: '50px', paddingLeft: '180px', paddingRight: '180px'}}>
                    <img src={freelancer} style={{ width:'220px', height: '60px'}} />
                </div>
                <div className="container" style={{ textAlign: 'left', marginTop: '10px', paddingLeft: '200px', marginBottom: '100px'}}>
                    <h2 style={{ color: 'black', paddingTop: '50px'}}><b>Tell us what you need done</b></h2>
                    <h5 style={{ color: 'black', paddingTop: '15px'}}>Get free quotes from skilled freelancers within minutes, view profiles, ratings and portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</h5>
                    <h3 style={{ color: 'black', paddingTop: '40px'}}><b>Choose a name for your project</b></h3>
                    <input
                        onChange={(event)=>{
                            this.setState({
                                projectname:event.target.value,
                                type:true
                            });
                        }}
                        type="text" className="form-control" placeholder="e.g. Build me a website " style={{height: '50px'}} />
                    <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', textAlign: 'left', paddingLeft: '20px', position: 'absolute', marginTop: '5px'}}>
                        <Message message={this.state.namemessage}/>
                    </div>
                    <h3 style={{ color: 'black', paddingTop: '50px'}}><b>Tell us more about your project</b></h3>
                    <h5 style={{ color: 'black', paddingTop: '15px'}}>Great project descriptions include a little bit about yourself, details of what you are trying to achieve, and any decisions that you have already made about your project. If there are things you are unsure of, don't worry, a freelancer will be able to help you fill in the blanks.</h5>
                    <textarea
                        onChange={(event)=>{
                            this.setState({
                                projectdesc:event.target.value,
                                type:true
                            });
                        }}
                        type="text" className="form-control" placeholder="Describe your Project here..." style={{height: '200px'}} />
                    <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', textAlign: 'left', paddingLeft: '20px', position: 'absolute', marginTop: '5px'}}>
                        <Message message={this.state.descriptionmessage}/>
                    </div>

                    <div style={{height: '50px', border: '1px dotted', marginTop: '40px' }}>
                        <label class="btn btn-primary btn-file" style={{marginTop: '8px', marginLeft: '8px', position: 'absolute', width: '100px'}}>
                            Add Files <input type="file" style={{display: 'none'}} />
                        </label>
                        <h5 style={{marginLeft: '125px', marginTop:'18px'}}>Add any image or file that might be helpful in explaining your project..</h5>
                    </div>

                    <h3 style={{ color: 'black', paddingTop: '40px'}}><b>What Skills are required?</b></h3>
                    <h5 style={{ color: 'black', paddingTop: '15px'}}>Enter up to 5 skills that best describe your project. Freelancers will use these skills to find projects they are most interested and experienced in.</h5>
                    <input
                        onChange={(event)=>{
                            this.setState({
                                projectskills:event.target.value,
                                type:true
                            });
                        }}
                        type="text" className="form-control" placeholder="Suggested skills examples:  Website Design , Logo Design , Mobile App Development , Data Entry , Article Writing" style={{height: '50px', marginTop: '20px'}} />
                    <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', textAlign: 'left', paddingLeft: '20px', position: 'absolute', marginTop: '5px'}}>
                        <Message message={this.state.skillsmessage}/>
                    </div>

                    <h3 style={{ color: 'black', paddingTop: '40px'}}><b>What is your estimated budget?</b></h3>
                    <div style={{height: '50px', border: '1px dotted', marginTop: '40px' }}>
                        <p class="btn btn-primary " style={{marginTop: '8px', marginLeft: '8px', position: 'absolute', width: '100px'}}>
                            USD
                        </p>

                        <input
                            type="number"
                            onChange={(event)=>{
                                this.setState({
                                    projectmin:event.target.value,
                                    type:true
                                });
                            }}
                            className="form-control" placeholder="MIN(EST)" style={{marginLeft: '135px', marginTop: '8px', width: '100px', position: 'absolute'}} />
                        <input
                            type="number"
                            onChange={(event)=>{
                                this.setState({
                                    projectmax:event.target.value,
                                    type:true
                                });
                            }}
                            className="form-control" placeholder="MAX(EST)" style={{marginLeft: '260px', marginTop: '8px', width: '100px' }} />
                    </div>
                    <div style={{ color: 'red', fontSize: '15px', paddingTop: '0px', textAlign: 'left', paddingLeft: '20px', position: 'absolute', marginTop: '5px'}}>
                        <Message message={this.state.budgetmessage}/>
                    </div>

                    <button
                        type="button"
                        className="btn"
                        onClick={() => this.handleUpdate(this.state)}
                        style={{
                            height: '40px',
                            marginTop: '80px',
                            paddingTop: '10px',
                            backgroundColor: '#fc951e',
                            color: 'white',



                        }}>POST MY PROJECT</button>

                    <Link
                        to="/inapp"
                        type="button"
                        className="btn"

                        style={{
                            height: '40px',
                            marginTop: '80px',
                            marginLeft: '10px',
                            paddingTop: '10px',
                            backgroundColor: '#fc951e',
                            color: 'white'


                        }}>CANCEL</Link>
                    <br /><br /><br  />

                    <div style={{fontWeight: 'bold', fontSize: '35px', color: 'red'}}>
                        <Message message={this.state.message}/>
                    </div>
                </div>


            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user: state.loginUser
    }
}

export default connect(mapStateToProps)(PostProject);
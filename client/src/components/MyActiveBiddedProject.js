import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import freelancer from  '../images/download.png';
import * as API from "../api/API";

class MyActiveBiddedProject extends Component{

    state={
        projectname: this.props.project.projectname,
        biddingparty: this.props.user.email,
        bids: [],
        name: '',
        phone: '',
        message: ''
    }

    componentWillMount(){

        this.setState({
            projectname: this.props.project.projectname,
            biddingparty: this.props.user.email,
            bids: [],
            name: '',
            phone: '',
            message: ''
        })
        this.getBids(this.state);
    }

    getBids = (userdata) =>{
        API.getBids(userdata)
            .then((result) => {
                //console.log(JSON.stringify(status));
                debugger;

                this.setState({
                    bids: result.results
                });



            });
    };

    handleSubmit = () => {
        API.doLogout()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/');
                }
            });


    }

    // handleHire = (userdata) => {
    //     API.closeProject(userdata)
    //         .then((status) => {
    //             console.log(JSON.stringify(status));
    //
    //         });
    //
    //     API.doHire(userdata)
    //         .then((status) => {
    //             console.log(JSON.stringify(status));
    //             if (status.status == 'true') {
    //
    //                 this.props.redirectURL('/postedprojects');
    //             }
    //         });
    //
    //
    // }

    renderProjects(){
        return this.state.bids.map((bid) => {

            return (
                <div className="container btn border border-primary" style={{
                    width: '1000px',color: 'white', textAlign: 'left',paddingLeft: '20px',
                    border: '1px solid',
                    marginTop: '2px',
                    marginBottom: '2px',
                    height: '200px',
                    color: 'black',
                    backgroundColor: 'white',
                    textAlign: 'left'}}>
                    <h4>Bid By: {bid.biddingparty}</h4>
                    <h4>Bidding Party: {bid.name}</h4>
                    <h4>Bid Price: {bid.price}</h4>
                    <h4>Days: {bid.days}</h4>

                </div>
            );
        })
    }

    render(){
        if(this.props.project.projectbids != 0) {
            return (
                <div style={{
                    background: '#dbdbdb',
                    position: 'fixed',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    top: '0',
                    overflowY: 'scroll'
                }}>


                    <div className="container">
                        <h1 style={{
                            marginTop: '50px',
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'left',
                            marginLeft: '55px'
                        }}>{this.props.project.projectname} </h1>
                        <div className="form-control" style={{
                            marginTop: '20px',
                            marginLeft: '50px',
                            height: '100px',
                            width: '1000px',
                            boxShadow: '10px #a8a6a6',
                            position: 'absolute'
                        }}>
                            <div style={{
                                width: '100px',
                                height: '80px',
                                borderRight: '1px solid #a5a5a5',
                                position: 'absolute'
                            }}>
                                <h4 style={{textAlign: 'left', marginLeft: '25px', color: 'black'}}> Bids</h4>
                                <h2 style={{
                                    textAlign: 'left',
                                    marginLeft: '25px',
                                    color: '#3b80ef',
                                    fontWeight: 'bold'
                                }}>{this.props.project.projectbids}</h2>
                            </div>

                            <div style={{
                                width: '270px',
                                height: '80px',
                                borderRight: '1px solid #a5a5a5',
                                position: 'absolute'
                            }}>
                                <h4 style={{textAlign: 'left', marginLeft: '125px', color: 'black'}}> Avg Bid (USD)</h4>
                                <h2 style={{
                                    textAlign: 'left',
                                    marginLeft: '125px',
                                    color: '#3b80ef',
                                    fontWeight: 'bold'
                                }}>${this.props.project.projectavg}</h2>
                            </div>

                            <div style={{width: '570px', height: '80px', position: 'absolute'}}>
                                <h4 style={{textAlign: 'left', marginLeft: '295px', color: 'black'}}> Project Budget
                                    (USD)</h4>
                                <h2 style={{
                                    textAlign: 'left',
                                    marginLeft: '295px',
                                    color: '#3b80ef',
                                    fontWeight: 'bold'
                                }}>${this.props.project.projectmin} - ${this.props.project.projectmax}</h2>
                            </div>



                        </div>


                        <div style={{marginTop: '200px', marginBottom: '100px', marginLeft: '-38px'}}>
                            <div className="container btn" style={{
                                border: '1px solid #3b80ef',
                                color: 'white',
                                textAlign: 'left',
                                height: '50px',
                                width: '1000px',
                                paddingLeft: '20px',
                                backgroundColor: '#3b80ef'
                            }}>
                                <h4>BIDS</h4>
                            </div>
                            {this.renderProjects()}
                        </div>

                        <Link to="/biddedprojects" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white', marginBottom: '100px'}}>BACK TO MY PROJECTS</Link>

                    </div>

                </div>
            );
        }
        else{
            return (
                <div style={{
                    background: '#dbdbdb',
                    position: 'fixed',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    top: '0',
                    overflowY: 'scroll'
                }}>
                    <nav className="navbar navbar-default" style={{
                        paddingLeft: '20px',
                        paddingRight: '25px',
                        marginBottom: '0px',
                        backgroundColor: 'white',
                        border: '1px solid black transparent'
                    }}>

                        <Link to="/inapp">
                            <img className="nav navbar-nav navbar-left" src={freelancer}
                                 style={{width: '250px', marginLeft: '50px'}}/>
                        </Link>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <button type="button" className="btn" onClick={() => this.handleSubmit()} style={{
                                    marginTop: '10px',
                                    marginRight: '50px',
                                    height: '40px',
                                    color: 'white',
                                    backgroundColor: '#fc951e'
                                }}><span class="glyphicon glyphicon-off"></span> Logout
                                </button>
                            </li>
                        </ul>
                    </nav>

                    <div className="container">
                        <h1 style={{
                            marginTop: '50px',
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'left',
                            marginLeft: '55px'
                        }}>{this.props.project.projectname} </h1>
                        <div className="form-control" style={{
                            marginTop: '20px',
                            marginLeft: '50px',
                            height: '100px',
                            width: '1000px',
                            boxShadow: '10px #a8a6a6',
                            position: 'absolute'
                        }}>
                            <div style={{
                                width: '100px',
                                height: '80px',
                                borderRight: '1px solid #a5a5a5',
                                position: 'absolute'
                            }}>
                                <h4 style={{textAlign: 'left', marginLeft: '25px', color: 'black'}}> Bids</h4>
                                <h2 style={{
                                    textAlign: 'left',
                                    marginLeft: '25px',
                                    color: '#3b80ef',
                                    fontWeight: 'bold'
                                }}>{this.props.project.projectbids}</h2>
                            </div>

                            <div style={{
                                width: '270px',
                                height: '80px',
                                borderRight: '1px solid #a5a5a5',
                                position: 'absolute'
                            }}>
                                <h4 style={{textAlign: 'left', marginLeft: '125px', color: 'black'}}> Avg Bid (USD)</h4>
                                <h2 style={{
                                    textAlign: 'left',
                                    marginLeft: '125px',
                                    color: '#3b80ef',
                                    fontWeight: 'bold'
                                }}>${this.props.project.projectavg}</h2>
                            </div>

                            <div style={{width: '570px', height: '80px', position: 'absolute'}}>
                                <h4 style={{textAlign: 'left', marginLeft: '295px', color: 'black'}}> Project Budget
                                    (USD)</h4>
                                <h2 style={{
                                    textAlign: 'left',
                                    marginLeft: '295px',
                                    color: '#3b80ef',
                                    fontWeight: 'bold'
                                }}>${this.props.project.projectmin} - ${this.props.project.projectmax}</h2>
                            </div>

                            <Link to="/biddedprojects" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white', marginBottom: '100px'}}>BACK TO MY PROJECTS</Link>


                        </div>





                    </div>

                </div>
            );
        }

    }
}

function mapStateToProps(state){
    return{
        user: state.loginUser,
        project: state.selectedProject
    }
}

export default connect(mapStateToProps)(MyActiveBiddedProject);
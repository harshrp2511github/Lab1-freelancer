import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import freelancer from  '../images/download.png';
import * as API from "../api/API";
import unknown from '../images/harsh.JPG';


class MyActiveProject extends Component{

    state={
        projectname: this.props.project.projectname,
        biddingparty: this.props.user.email,
        email: this.props.user.email,
        bids: [],
        name: '',
        phone: '',
        message: '',
        profilepic: ''
    }

    componentWillMount(){

        this.setState({
            projectname: this.props.project.projectname,
            biddingparty: this.props.user.email,
            email: this.props.user.email,
            bids: [],
            name: '',
            phone: '',
            message: '',
            profilepic: ''
        })
        this.setFields(this.state);
        this.getBids(this.state);
        API.doCheckLogin()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/myactiveproject');
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

    handleLogout = () => {
        API.doLogout()
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/');
                }
            });


    }

    handleHire = (userdata) => {
        API.closeProject(userdata)
            .then((status) => {
            console.log(JSON.stringify(status));

        });

        API.doHire(userdata)
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.props.redirectURL('/postedprojects');
                }
            });


    }

    renderProjects(){
        return this.state.bids.map((bid) => {

            return (
                <div className="container border border-primary" style={{
                    width: '1000px',color: 'white', textAlign: 'left',paddingLeft: '20px',

                    marginTop: '1px',
                    marginBottom: '1px',
                    height: '150px',
                    color: 'black',
                    backgroundColor: 'white',
                    textAlign: 'left'}}>
                    <div style={{ marginLeft: '20px', marginTop: '10px', position: 'absolute', width: '80px', height: '80px', border: '0.2px solid'}}>
                        <img style={{ width:'80px', height: '80px'}} src={bid.bidpic} />

                    </div>
                    <div style={{ marginLeft: '200px', marginTop: '-10px', position: 'absolute', width: '300px', height:'140px'}}>
                        <h3 style={{fontWeight: 'bold'}}>{bid.name}</h3>
                    </div>
                    <div style={{ marginLeft: '350px', marginTop: '5px', position: 'absolute', width: '300px', height:'140px'}}>
                        <h4> Contact @ {bid.biddingparty}</h4>

                    </div>

                    <div style={{ marginLeft: '800px', position: 'absolute', marginTop: '-10px', width: '300px', height:'140px'}}>
                        <h3 style={{ fontWeight: 'bold'}}>$ {bid.price}</h3>
                        <h4> in {bid.days} days</h4>

                    </div>

                    <div style={{ marginLeft: '200px', marginTop: '80px', position: 'absolute', width: '300px', height:'50px'}}>
                        <button class="btn" style={{ color: 'white', backgroundColor: '#3a3b3d', textAlign: 'left', marginTop: '10px'}}  onClick={() => this.handleHire(bid)} >HIRE!!</button>

                    </div>



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
                            <div className="container" style={{
                                color: 'white',
                                textAlign: 'left',
                                height: '50px',
                                width: '1000px',
                                paddingLeft: '20px',
                                backgroundColor: '#3a3b3d'
                            }}>
                                <h4>BIDS</h4>
                            </div>
                            {this.renderProjects()}
                        </div>

                        <Link to="/postedprojects" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white',marginTop: '50px', marginBottom: '100px'}}>GO TO POSTED PROJECTS</Link>
                        <Link to="/inapp" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white',marginTop: '50px', marginBottom: '100px', marginLeft: '10px'}}>BACK TO HOME</Link>

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

                            <Link to="/postedprojects" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white',marginTop: '150px', marginBottom: '100px'}}>GO TO POSTED PROJECTS</Link>
                            <Link to="/inapp" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white',marginTop: '150px', marginBottom: '100px', marginLeft: '10px'}}>BACK TO HOME</Link>




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

export default connect(mapStateToProps)(MyActiveProject);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import freelancer from  '../images/download.png';
import * as API from "../api/API";
import Message from "./Message";

class PlaceBid extends Component{

    state = {
        projectname: this.props.project.projectname,
        biddingparty: this.props.user.email,
        price: '',
        days: '',
        message: '',
        bids: []
    }

    componentDidMount(){
        this.setState({
            projectname: this.props.project.projectname,
            biddingparty: this.props.user.email,
            price: '',
            days: '',
            message: '',
            bids: []
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

        addBid = (userdata) => {


        API.addBid(userdata)
            .then((status) => {
                console.log(JSON.stringify(status));
                if (status.status == 'true') {

                    this.setState({

                        message: status.message,
                    });
                    API.updateBidCount(userdata)
                        .then((status) => {
                            console.log(JSON.stringify(status));

                        });
                    API.updateAvg(this.state)
                        .then((status) => {
                            console.log(JSON.stringify(status));

                        })

                    this.props.redirectURL('/inapp')
                } else if (status.status == 'false') {

                    this.setState({

                        message: status.message
                    });
                }
            });


    };

    renderProjects(){
        return this.state.bids.map((bid) => {

            return (
                <div className="container btn border border-primary" style={{
                    width: '1000px',color: 'white', textAlign: 'left',paddingLeft: '20px',
                    border: '1px solid',
                    marginTop: '2px',
                    marginBottom: '2px',
                    height: '150px',
                    color: 'black',
                    backgroundColor: 'white',
                    textAlign: 'left'}}>
                    {bid.biddingparty} {bid.price} {bid.days}
                </div>
            );
        })
    }

    render(){
        return(
            <div style={{  background: '#dbdbdb', position: 'fixed', bottom: '0', right: '0', left: '0', top: '0', overflowY: 'scroll'}}>
                <nav className="navbar navbar-default" style={{paddingLeft:'20px',  paddingRight: '25px', marginBottom:'0px',backgroundColor: 'white', border: '1px solid black transparent'}}>

                    <Link to="/inapp">
                        <img className="nav navbar-nav navbar-left" src={freelancer} style={{width: '250px', marginLeft: '50px'}} />
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li><button type="button" className="btn" onClick={() => this.handleSubmit()} style={{marginTop: '10px', marginRight: '50px',height: '40px',color: 'white', backgroundColor: '#fc951e'}}><span class="glyphicon glyphicon-off" ></span> Logout</button></li>
                    </ul>
                </nav>

                <div className="container" >
                    <h1 style={{ marginTop: '50px', fontWeight: 'bold', color: 'black', textAlign: 'left', marginLeft: '55px'}}>{this.props.project.projectname} </h1>
                    <div className="form-control" style={{ marginTop: '20px', marginLeft: '50px', height: '100px', width: '1000px', boxShadow: '10px #a8a6a6', position: 'absolute'}}>
                        <div style={{width: '100px', height: '80px' ,borderRight: '1px solid #a5a5a5', position: 'absolute' }}>
                            <h4 style={{ textAlign: 'left', marginLeft: '25px',  color: 'black'}}> Bids</h4>
                            <h2 style={{ textAlign: 'left', marginLeft: '25px', color: '#3b80ef', fontWeight: 'bold'}}>{this.props.project.projectbids}</h2>
                        </div>

                        <div style={{width: '270px', height: '80px' ,borderRight: '1px solid #a5a5a5', position: 'absolute' }}>
                            <h4 style={{ textAlign: 'left', marginLeft: '125px',  color: 'black'}}> Avg Bid (USD)</h4>
                            <h2 style={{ textAlign: 'left', marginLeft: '125px', color: '#3b80ef', fontWeight: 'bold'}}>${this.props.project.projectavg}</h2>
                        </div>

                        <div style={{width: '570px', height: '80px' , position: 'absolute' }}>
                            <h4 style={{ textAlign: 'left', marginLeft: '295px',  color: 'black'}}> Project Budget (USD)</h4>
                            <h2 style={{ textAlign: 'left', marginLeft: '295px', color: '#3b80ef', fontWeight: 'bold'}}>${this.props.project.projectmin} - ${this.props.project.projectmax}</h2>
                        </div>

                        <div>
                            <h2 style={{ marginLeft: '750px', marginTop: '30px', color: '#329610'}}>OPEN!!</h2>
                        </div>

                    </div>


                    <div className="form-control" style={{ marginTop: '180px', marginLeft: '50px', height: '260px', width: '1000px', boxShadow: '10px #a8a6a6', position: 'absolute'}}>
                        <div style={{ textAlign: 'left',paddingLeft: '50px' ,marginTop: '10px', color: 'black', position: 'absolute'}}>
                            <h4 style={{ paddingLeft:'5px'}}>Bid:</h4>
                            <input type="text" className="form-control" placeholder="USD" style={{ width: '100px'}}
                                   onChange={(event) => {
                                       this.setState({
                                           price: event.target.value,
                                           type: true
                                       });
                                   }}
                            />
                        </div>

                        <div style={{ textAlign: 'left',marginLeft: '200px' ,marginTop: '10px', color: 'black', position: 'absolute'}}>
                            <h4 style={{ paddingLeft:'5px'}}>Deliver in:</h4>
                            <input type="text" className="form-control" placeholder="Days" style={{ width: '100px'}}
                                   onChange={(event) => {
                                       this.setState({
                                           days: event.target.value,
                                           type: true
                                       });
                                   }}
                            />
                        </div>

                        <div style={{ marginTop: '100px' , marginLeft: '50px', textAlign: 'left'}}>
                            <button className="btn" onClick={() => this.addBid(this.state)} style={{ backgroundColor: '#3b80ef', color: 'white'}}>SUBMIT BID</button>
                            <Link to="/activeproject" className="btn" style={{ backgroundColor: '#3b80ef', color: 'white', marginLeft: '40px'}}>CANCEL BID</Link>
                        </div>
                        <br /><br /><br />
                        <Message message={this.state.message}/>
                    </div>


                    <div className="form-control" style={{ marginTop: '460px', marginLeft: '50px', height: '580px', width: '1000px', boxShadow: '10px #a8a6a6', position: 'absolute', marginBottom: '100px'}}>
                        <div style={{ textAlign: 'left',paddingLeft: '50px' ,marginTop: '30px'}}>
                            <h4 style={{ fontWeight: 'bold', color: 'black'}}>Project Description:</h4>
                            <textarea value={this.props.project.projectdesc} style={{  color: 'black', width: '500px', height: '200px'}} />
                        </div>

                        <div style={{ textAlign: 'left',paddingLeft: '50px', marginTop: '80px'}}>
                            <h4 style={{ fontWeight: 'bold', color: 'black'}}>About the Employer(Posted By and Contact on):</h4>
                            <h5 style={{  color: 'black'}}>{this.props.project.email}</h5>
                        </div>

                        <div style={{ textAlign: 'left',paddingLeft: '50px', marginTop: '80px'}}>
                            <h4 style={{ fontWeight: 'bold', color: 'black'}}>Skills Required:</h4>
                            <h5 style={{  color: 'black'}}>{this.props.project.projectskills}</h5>
                        </div>


                    </div>

                    <div style={{marginTop: '1080px', marginBottom: '100px', marginLeft: '-38px'}}>
                        <div className="container btn" style={{border: '1px solid #3b80ef',color: 'white', textAlign: 'left', height: '50px',width: '1000px',paddingLeft: '20px', backgroundColor: '#3b80ef'}}>
                            <h4>PROJECTS</h4>
                        </div>
                        {this.renderProjects()}
                    </div>



                </div>

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

export default connect(mapStateToProps)(PlaceBid);
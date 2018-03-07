import React, { Component } from 'react';
import freelancer from  '../images/download.png';
import PropTypes from 'prop-types';

class Login extends Component{

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        email: '',
        password: '',

    };

    componentWillMount(){
        this.setState({
            email: '',
            password: '',
        });
    }

    render(){
        return(
            <div style={{paddingTop: '80px',paddingLeft: '600px',marginLeft: 'auto', marginRight: 'auto' }} >



                <div class="well well-sm" style={{width:'390px'}}>
                    <form class="form-horizontal" style={{ }} >
                        <fieldset>

                            <div class="form-group">



                                <img src={freelancer} style={{width: '300px'}}  />
                                <hr style={{borderWidth: '2px', width: '300px'}}/>

                            </div>

                            <h5 style={{paddingRight: '5px'}}> Login to your account!!</h5>
                            <hr style={{borderWidth: '2px', width: '300px'}}/>

                            <div class="form-group">

                                <div class="col-md-8" style={{paddingLeft: '100px'}}>

                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Email Address"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.email}
                                        onChange={(event)=>{
                                            this.setState({
                                                email:event.target.value,
                                                type:true
                                            });
                                        }}
                                        required
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-8" style={{paddingLeft: '100px'}}>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        class="form-control"
                                        style={{width: '200px'}}
                                        value={this.state.password}
                                        onChange={(event)=>{
                                            this.setState({
                                                password:event.target.value,
                                                type:true
                                            });
                                        }}
                                        required
                                    />
                                </div>
                            </div>



                            <div class="form-group">
                                <div class="col-md-8 text-center" style={{paddingLeft: '100px'}}>
                                    <button
                                        type="button"
                                        class="btn btn-primary btn-lg"
                                        style={{width: '200px'}}
                                        onClick={() => this.props.handleSubmit(this.state)}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                            <hr style={{borderWidth: '2px', width: '300px'}}/>
                            <br />
                            <h4> Don't have an account yet?</h4>
                            <a href="http://localhost:3000/signup">Signup Today</a>

                        </fieldset>
                    </form>
                </div>



            </div>
        );
    }
}

export default Login;
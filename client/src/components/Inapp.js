import React, { Component } from 'react';
import { connect } from 'react-redux';

class Inapp extends Component{

    render(){
        if(!this.props.user){
            return(<div>

            </div>);
        }
        return(
            <div>
                {this.props.user.email}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user: state.loginUser
    }
}
export default connect(mapStateToProps)(Inapp);
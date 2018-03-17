import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="row justify-content-md-center" >
                {this.props.message}

                </div>

        );
    }
}

export default Message;
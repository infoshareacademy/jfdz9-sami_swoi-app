import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LogIn extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-6 col-md-offset-6">
                    <LoginForm />
                </div>
            </div>
        )
    }
}


export default LogIn;

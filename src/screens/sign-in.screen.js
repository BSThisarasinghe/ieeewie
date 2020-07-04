import React, { Component } from "react";
import { SignInComponent } from '../components';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameLabel: '',
            passwordLabel: '',
            usernamePlaceholder: 'Username',
            passwordPlaceholder: 'Password'
        }
    }

    onFocusUsername = () => {
        this.setState({
            usernameLabel: 'Username',
            usernamePlaceholder: ''
        });
    }

    onBlurUsername = () => {
        this.setState({
            usernameLabel: '',
            usernamePlaceholder: 'Username'
        });
    }

    onFocusPassword = () => {
        this.setState({
            passwordLabel: 'Password',
            passwordPlaceholder: ''
        });
    }

    onBlurPassword = () => {
        this.setState({
            passwordLabel: '',
            passwordPlaceholder: 'Password'
        });
    }

    onSubmit = () => {
        console.log("Submit");
        window.location.href = "/dashboard";
    }

    renderForm() {
        return (
            <div>
                <SignInComponent
                    usernameLabel={this.state.usernameLabel}
                    passwordLabel={this.state.passwordLabel}
                    usernamePlaceholder={this.state.usernamePlaceholder}
                    passwordPlaceholder={this.state.passwordPlaceholder}
                    onFocusUsername={this.onFocusUsername}
                    onBlurUsername={this.onBlurUsername}
                    onFocusPassword={this.onFocusPassword}
                    onBlurPassword={this.onBlurPassword}
                />
                <div className="btn__wrapper col">
                    <a href="#" className="registerLink">Create  an account</a><br></br>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.onSubmit()}
                    >
                        Sign me In
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div className="main__wrapper col">
                    <div className="row">
                        <div className="container main">
                            <div className="main__wrapper col">
                                <div className="row">
                                    <div className="idea__card signup__form col">
                                        <div className="row">
                                            <div className="background__bg__wrapper">
                                                {/* <img src={require('../assets/images/login_bg.jpg')} className="img-fluid" alt="IEEE" /> */}
                                            </div>
                                            <div className="login__form__wrapper">
                                                {this.renderForm()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SignIn;
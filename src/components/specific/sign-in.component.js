import React, { Component } from "react";

class SignInComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <h3 className="wizard__title">Sign In</h3>

                <div className="form-group loginInputContainer">
                    <label className="loginFormLable" htmlFor="username">{this.props.usernameLabel}</label>
                    <input type="text" className="form-control" id="username" aria-describedby="username" onChange={this.props.onAdminChangeHandle} onBlur={this.props.onBlurUsername} onFocus={this.props.onFocusUsername} placeholder={this.props.usernamePlaceholder} />
                    <small style={{color:'red'}}>{this.props.usernameError}</small>
                </div>

                <div className="form-group loginInputContainer">
                    <label className="loginFormLable" htmlFor="password">{this.props.passwordLabel}</label>
                    <input type="password" className="form-control" id="password" aria-describedby="password" onChange={this.props.onAdminChangeHandle} onBlur={this.props.onBlurPassword} onFocus={this.props.onFocusPassword} placeholder={this.props.passwordPlaceholder} />
                    <small>{this.props.passwordError}</small>
                </div>

            </React.Fragment>
        );
    }
}

export { SignInComponent };
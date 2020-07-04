import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';

class Card extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="row card">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <img
                            src={require('../../assets/images/avatar.png')}
                            className="img-circle avatar"
                        />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 details">
                        <h5>{this.props.title}</h5>
                        <p>{this.props.name}</p>
                        <p>{this.props.email}</p>
                        <p>{this.props.mobile}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export { Card };
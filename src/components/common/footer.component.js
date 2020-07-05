import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="page-footer" id="footer">
                    <div id="footer_button_container">
                        <p>IEEE WIE Sri Lanka Section</p>
                        <a href="https://www.facebook.com/IEEEWIESriLanka" target="_blank" id="social_link">
                            <img
                                src={require('../../assets/images/fb.png')}
                            />
                        </a>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export { Footer };
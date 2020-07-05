import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <header className="page-header" id="header">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">
                            <img src={require('../../assets/images/logo.png')} style={{ height: 50, width: 50 }} />
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/wieChapters">WIE CHAPTERS</Nav.Link>
                            <Nav.Link href="/commitee">COMMITTEE</Nav.Link>
                            <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                            <Nav.Link href="/conference">CONFERENCE</Nav.Link>
                            <Nav.Link href="/events">EVENTS</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="/">
                            <img src={require('../../assets/images/ieee.png')} style={{ height: 50 }} />
                        </Navbar.Brand>
                    </Navbar>
                </header>
            </React.Fragment>
        );
    }
}

export { Header };
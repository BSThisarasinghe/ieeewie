import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <header className="page-header" id="header">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">IEEE</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/wieChapters">WIE CHAPTERS</Nav.Link>
                            <Nav.Link href="/commitee">COMMITTEE</Nav.Link>
                            <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                        </Nav>
                    </Navbar>
                </header>
            </React.Fragment>
        );
    }
}

export { Header };
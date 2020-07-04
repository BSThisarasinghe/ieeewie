import React, { Component } from "react";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="main__wrapper col">
                    <p>Dashboard</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
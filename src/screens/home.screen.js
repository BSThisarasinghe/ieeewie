import React, { Component } from "react";

class Home extends Component {

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
                    <p>Home</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
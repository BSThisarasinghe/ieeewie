import React, { Component } from "react";

class ConfCommittee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" id="whole" style={{ width: '110%' }}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="chapters_background_container">
                            <div id="chapters_background">
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <table class="table" id="committee_table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Conference committee General Chair</td>
                                            <td>Dr. Maheshi</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Secretary</td>
                                            <td>Heshani</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Asst. Secretary</td>
                                            <td>Shashika</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>TPC Chair</td>
                                            <td>Dr. Jeevani</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Finance Chair</td>
                                            <td>Dr. Akila</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Design and Publicity Chair</td>
                                            <td>Dr. Rasara</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Co Chair</td>
                                            <td>Gresha</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>PR & Registration chair</td>
                                            <td>Warunika</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>Publications Chair</td>
                                            <td>Dr windya</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>Co chair</td>
                                            <td>Dr. Pubudu</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>Logistics Chair</td>
                                            <td>Abarnah</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ConfCommittee;
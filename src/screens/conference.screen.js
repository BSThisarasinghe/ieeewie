import React, { Component } from "react";
import { Calendar, PhoneFill } from 'react-bootstrap-icons';

class Conference extends Component {

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
                                <h2 className="text-center conference_title">WIEsymp 2020</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="conference_logo_container">
                                <img src={require('../assets/images/conference_logo.png')} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="text-center conference_subtitle">
                                    Welcome to the Women in Engineering Symposium 2020
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p className="text-center conference_text">
                                    Call for Abstracts and Posters<br />
                                    <b>Initial submission deadline: 15th of August</b>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <b>Topics of Interest:</b>
                                <ul>
                                    <li>Power & energy</li>
                                    <li>Computing & Information technology </li>
                                    <li>Robotics & automation </li>
                                    <li>Electronics & communications</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Calendar />&nbsp;
                                15th - 21st November 2020 <br/><br/>
                                <b><i>Contact:</i></b>&nbsp;
                                rasara.hl@gmail.com <br/>
                                gresha.samarakkody@ieee.org <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Conference;
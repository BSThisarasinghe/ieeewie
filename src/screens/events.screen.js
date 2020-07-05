import React, { Component } from "react";

class Events extends Component {

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
                    {/* <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="chapters_background_container">
                            <div id="chapters_background">
                            </div>
                        </div>
                    </div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h2 className="text-center conference_title">OUR EVENTS</h2>
                            </div>
                        </div>
                        <div className="row" id="projectRow">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 parent">
                                <div className="hover06 column">
                                    <div>
                                        <figure><img src={require('../assets/images/event1.jpg')} /></figure>
                                        <p className="text-center tourTitle">Code with WIE</p>
                                    </div>
                                    <span className="textContainer">
                                        <p className="text-center">Deadline to submit the proposal - 15th April, 2020</p>
                                        {/* <p className="text-justify"><b>Cost per person:</b> Rs. 15,350.00 nett. Per person on twin / triple sharing basis (minimum 12 pax).<br /> <b>Option:</b> Rs. 10,500.00 nett. Per person on twin / triple sharing basis without transport (from &amp; to Colombo). (Minimum 12 pax).</p> */}
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1" />
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 parent">
                                <div className="hover06 column">
                                    <div>
                                        <figure><img src={require('../assets/images/event2.jpg')} /></figure>
                                        <p className="text-center tourTitle">How to be a good researcher</p>
                                    </div>
                                    <span className="textContainer">
                                        <p className="text-center">30th April, 2020 6.00 PM (GMT + 5.30)</p>
                                        {/* <p className="text-justify"><b>Cost per person:</b> Rs. 23,100.00 nett. Per person twin / triple sharing basis (minimum 12 pax).<br /> <b>Option:</b> Rs. 18,750.00 nett. Per person on twin / triple sharing basis without transport (from &amp; to Colombo). (Minimum 12 pax).</p> */}
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1" />
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 parent">
                                <div className="hover06 column">
                                    <div>
                                        <figure><img src={require('../assets/images/event3.jpg')} /></figure>
                                        <p className="text-center tourTitle">Deep learning based video analytics</p>
                                    </div>
                                    <span className="textContainer">
                                        <p className="text-center">30th May, 2020 from 4.30 to 5.30 p.m</p>
                                        {/* <p className="text-justify"><b>Cost per person:</b> Rs. 22,900.00 nett. Per person on twin / triple sharing basis (minimum 12 pax).<br /> <b>Option:</b> Rs. 16,450.00 nett. Per person on twin / triple sharing basis without transport (from &amp; to Colombo). (Minimum 12 pax).</p> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Events;
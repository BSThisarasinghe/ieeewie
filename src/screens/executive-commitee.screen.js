import React, { Component } from "react";
import { Card } from '../components';

class Commitee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" id="whole">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="chapters_background_container">
                            <div id="chapters_background">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" id="card_container">
                    <div className="container chapter_container">
                        <div className="card_row_title">
                            <h5 className="text-center">Contact details</h5>
                        </div>
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Secretary"}
                                    name="Heshani"
                                    email="heshani.mahalaksha@ieee.org"
                                    mobile="713671053"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Secretary"}
                                    name="Rizma Nalmi"
                                    email="rizmanalmi@gmail.com"
                                    mobile="0767968004"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Chair"}
                                    name="Nuwanthi Abeygunawardena"
                                    email="nuwanthiabey9@gmail.com"
                                    mobile="0717015569"
                                /> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Vice Chair"}
                                    name="Rasara"
                                    email="rasara.hl@gmail.com"
                                    mobile="719097739"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Professional Activities Chair"}
                                    name="Abarnah Kirupananda"
                                    email="abarnah@ieee.org"
                                    mobile="718270423"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Secretary"}
                                    name="Rizma Nalmi"
                                    email="rizmanalmi@gmail.com"
                                    mobile="0767968004"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Chair"}
                                    name="Nuwanthi Abeygunawardena"
                                    email="nuwanthiabey9@gmail.com"
                                    mobile="0717015569"
                                /> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Information Manager"}
                                    name="Pubudu Jayasena"
                                    email="pubudu.nuwanthika@gmail.com"
                                    mobile="705544656"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Committee Member"}
                                    name="Gresha Samarakkody"
                                    email="gresh.maya112180@gmail.com"
                                    mobile="767808075"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Secretary"}
                                    name="Rizma Nalmi"
                                    email="rizmanalmi@gmail.com"
                                    mobile="0767968004"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Assistant Secretary"}
                                    name="Shashika Lokuliyana"
                                    email="shashikaieee@gmail.com"
                                    mobile="772240237"
                                /> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Assistant Secretary"}
                                    name="Shashika Lokuliyana"
                                    email="shashikaieee@gmail.com"
                                    mobile="772240237"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Editor"}
                                    name="Tharushi Nathasha"
                                    email="tharushi@ieee.org"
                                    mobile="775068800"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Editor"}
                                    name="Tharushi Nathasha"
                                    email="tharushi@ieee.org"
                                    mobile="775068800"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Chair"}
                                    name="Nuwanthi Abeygunawardena"
                                    email="nuwanthiabey9@gmail.com"
                                    mobile="0717015569"
                                /> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Chair"}
                                    name="Maheshi Dissanayake"
                                    email="maheshid@eng.pdn.ac.lk"
                                    mobile="774229856"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={""}
                                    name="Jeevani Jayasinghe"
                                    email=""
                                    mobile=""
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Secretary"}
                                    name="Rizma Nalmi"
                                    email="rizmanalmi@gmail.com"
                                    mobile="0767968004"
                                /> */}
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Chair"}
                                    name="Nuwanthi Abeygunawardena"
                                    email="nuwanthiabey9@gmail.com"
                                    mobile="0717015569"
                                /> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Treasurer"}
                                    name="Akila Wijetunga"
                                    email=""
                                    mobile=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container chapter_container">
                        <div className="card_row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <Card
                                    title={"Immediate Past Chair"}
                                    name="Windhya Rankothge"
                                    email="windhya.r@sliit.lk"
                                    mobile="770227461"
                                />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                {/* <Card
                                    title={"Secretary"}
                                    name="Rizma Nalmi"
                                    email="rizmanalmi@gmail.com"
                                    mobile="0767968004"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Commitee;
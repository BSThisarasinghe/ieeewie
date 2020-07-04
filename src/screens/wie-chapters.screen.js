import React, { Component } from "react";
import { Card } from '../components';

class WieChapters extends Component {

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
                    <div className="row" id="card_container">
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">SLIT</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Nuwanthi Abeygunawardena"
                                        email="nuwanthiabey9@gmail.com"
                                        mobile="0717015569"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Rizma Nalmi"
                                        email="rizmanalmi@gmail.com"
                                        mobile="0767968004"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">IIT</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Chathuri Weerasinghe"
                                        email="chathuri.2017085@iit.ac.lk"
                                        mobile="0713917829"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Binari Samarasinghe"
                                        email="binari.2018069@iit.ac.lk"
                                        mobile="0766597087"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">WUSL</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Anne Nimanthi"
                                        email="annenimanthi06@gmail.com"
                                        mobile="0764996217"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    {/* <Card
                                        title={"Secretary"}
                                        name="Binari Samarasinghe"
                                        email="binari.2018069@iit.ac.lk"
                                        mobile="0766597087"
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">NSBM</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Sunali Rambukwella"
                                        email="sunali@ieee.org"
                                        mobile="94764852794"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Anne Kaushalya"
                                        email="annekaushalya@ieee.org"
                                        mobile="0762880144"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">UoP</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Thilakshi Karunarathna"
                                        email="thilakshisk95@gmail.com"
                                        mobile="0715830778"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Manjitha Manchanayake"
                                        email="manjitha1216@gmail.com"
                                        mobile="0716683711"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">UoM</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Shakyani Jayasiriwardana"
                                        email="shakyani.j@gmail.com"
                                        mobile="0769238043"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Piyumi Weerasinghe"
                                        email="piyumiyweerasinghe@gmail.com"
                                        mobile="0710519116"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">SLTC</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Raseema Sugandi"
                                        email="raseemap@sltc.lk"
                                        mobile="0711122014"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Danushi"
                                        email="danushiw@sltc.lk"
                                        mobile="0715137012"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">UWU</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Hasini Madhuwanthi"
                                        email="madhuwanthiaah@gmail.com"
                                        mobile="0775816190"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Sayuri Kalpana"
                                        email="sayurirathnayake5@gmail.com"
                                        mobile="0716532033"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container chapter_container">
                            <div className="card_row_title">
                                <h5 className="text-center">UCSC</h5>
                            </div>
                            <div className="card_row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Chair"}
                                        name="Oshani Weerakoon"
                                        email="osw0294@gmail.com"
                                        mobile="0717006784"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <Card
                                        title={"Secretary"}
                                        name="Therese Jayawardena"
                                        email="theresejayawardena2@gmail.com"
                                        mobile="0772188682"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WieChapters;
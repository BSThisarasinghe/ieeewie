import React, { Component } from "react";

class AboutUs extends Component {

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
                                <div className="card_row_title">
                                    <h5 className="text-center page_header">About us</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="card_row_title">
                                    <h5 className="text-left">Why Join WIE?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutList">
                                <ul>
                                    <li>Experience of other members: Meeting women from companies, find role-models and possibly mentors</li>
                                    <li>Networking: WIE offers many opportunities to make contacts at large and small companies.</li>
                                    <li>Effect on your career: WIE offers career guidance to its members. There are nationwide resources to help you with your job search.</li>
                                    <li>Fun. Its fun to get together with WIE friends. Some meetings are more technical and some are planned simply for socializing.</li>
                                    <li>Teamwork: Here's your chance to build your teamwork skills. Everything we do either for volunteering to help out involves people working together and helping each other out.</li>
                                    <li>Support: As aspiring women engineers and scientists, we can sometimes feel isolated in and around the workplace.</li>
                                    <li>WIE gives you a feeling of belonging, with members to reassure that you can succeed.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="row">
                                    <img src={require('../assets/images/aboutus.jpg')} id="cover_image" />
                                </div>
                                <div className="row" style={{ marginTop: 20 }}>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="card_row_title">
                                            <h5 className="text-left">Become a member</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutList">
                                        <p>
                                            WIE welcomes all women engineers and engineering students. To be a member of Women in Engineering in Bangladesh, you will first need to be a member of <a href="https://www.ieee.org/">the Institute of Electrical and Electronics Engineers, Inc (IEEE)Add Services page IEEE Member Services</a>.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutList">
                                        <h6><b>WIE Fee Waivers</b></h6>
                                        <p>If you are a Student, Graduate Student, or Life Member the fee of US$25 is waived. If you are a Higher Grade Member the fee of US$25 still applies. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="card_row_title">
                                            <h5 className="text-left">Benefits and Services</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 aboutList">
                                        <ul>
                                            <li>WIE Membership Directory :A listing of all WIE and IEEE women members, the online directory is a great networking tool!</li>
                                            <li>WIE Electronic Newsletter : Career information, reports on WIE and Affinity Group activities, IEEE news, and more.</li>
                                            <li>Local Affinity Groups : Opportunity to network, volunteer and participate in local activities</li>
                                            <li>IEEE WIE is dedicated to important issues for Women Engineers :</li>
                                            <li>Recognising womens' outstanding achievements in electrical and electronic engineering through IEEE Awards nominations.</li>
                                            <li>Organising receptions at major technical conferences to enhance netoworking and to promote membership in WIE.</li>
                                            <li>Promoting IEEE Member Grade advancement for women to the grades of Senior Member and Fellow.</li>
                                            <li>Advocating women in leadership roles in IEEE governance and career advancement for women in the profession.</li>
                                            <li>Providing assistance with the formation of new WIE affinity groups, while supporting ongoing activities and administering virtual communities for affinity leaders and volunteers.</li>
                                            <li>Facilitating the development of programs and activities that promote the entry into and retention of women in engineering programs</li>
                                        </ul>
                                        <p>(To learn more about WIE activities and resources, visit: <a href="https://www.ieee.org/membership/women/">www.ieee.org/women</a> )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutUs;
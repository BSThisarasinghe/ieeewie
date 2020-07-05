import React, { Component } from "react";
import { Search } from 'react-bootstrap-icons';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: ''
        }
    }

    onClickPost() {
        window.location.href = "/conference";
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" id="whole">
                    <div className="row" id="home">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="background_container">
                            <div id="background">
                            </div>
                            <div id="linkContainer">
                                <div className="container" style={{ textAlign: 'left' }}>
                                    <p className="quote">IEEEWIE.LK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="postContainer">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="container" id="myTechnicalInfo">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h1 className="text-center titleDetails">OUR POSTS</h1>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icon_image_container">
                                        <img src={require('../assets/images/posts.png')} className="img-fluid icon_image" />
                                    </div>
                                    <br /><br /><br /><br />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" id="details">
                                        <div className="row">
                                            <p className="posted_date">NOVEMBER 15th - 21st, 2020</p>
                                        </div>
                                        <div className="row">
                                            <p className="post_title"></p>
                                        </div>
                                        <div className="row posted_discription_container">
                                            <p className="posted_discription">Call for abstracts and posters</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                        <div className="row">
                                            <div id="search_bar_container">
                                                <input
                                                    className="form-control"
                                                    placeholder="Search..."
                                                    type="text"
                                                />
                                                <button type="button" className="btn btn-small"><Search /></button>
                                            </div>
                                        </div>
                                        <div className="row recent_post_title_container">
                                            <p className="recent_post_title">RECENT POSTS</p>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="recent_post">
                                                    <a type="button" onClick={() => this.onClickPost()}>WIEsymp 2020</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="row recent_comment_title_container">
                                            <p className="recent_comment_title">RECENT COMMENTS</p>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="recent_comment">
                                                    <a href="">A WordPress Commenter on Hello world!</a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row" id="works">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h1 className="text-center titleDetails">OUR COMMITTEE</h1>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icon_image_container">
                                                <img src={require('../assets/images/committee.png')} className="img-fluid icon_image" />
                                            </div>
                                            <br /><br /><br /><br />
                                        </div>
                                        <div className="row" id="projectRow">
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 parent">
                                                <div className="hover06 column">
                                                    <div>
                                                        <figure><img src={require('../assets/images/group1.jpg')} /></figure>
                                                        <p className="text-center tourTitle">EVENTS</p>
                                                    </div>
                                                    <span className="textContainer">
                                                        <p className="text-center">IEEE Women in Engineering (WIE) is the<br /> largest international professional organization dedicated<br /> to promoting women engineers and scientists and inspiring<br /> girls around the world to follow their academic interests to a career in engineering.</p>
                                                        {/* <p className="text-justify"><b>Cost per person:</b> Rs. 15,350.00 nett. Per person on twin / triple sharing basis (minimum 12 pax).<br /> <b>Option:</b> Rs. 10,500.00 nett. Per person on twin / triple sharing basis without transport (from &amp; to Colombo). (Minimum 12 pax).</p> */}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-1 col-md-1" />
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 parent">
                                                <div className="hover06 column">
                                                    <div>
                                                        <figure><img src={require('../assets/images/group2.jpg')} /></figure>
                                                        <p className="text-center tourTitle">EVENTS</p>
                                                    </div>
                                                    <span className="textContainer">
                                                        <p className="text-center">WIE Sri Lanka Section has been established<br /> to foster technological innovation and<br /> excellence in Women in Engineering<br /> all around the country</p>
                                                        {/* <p className="text-justify"><b>Cost per person:</b> Rs. 23,100.00 nett. Per person twin / triple sharing basis (minimum 12 pax).<br /> <b>Option:</b> Rs. 18,750.00 nett. Per person on twin / triple sharing basis without transport (from &amp; to Colombo). (Minimum 12 pax).</p> */}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-lg-1 col-md-1" />
                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 parent">
                                                <div className="hover06 column">
                                                    <div>
                                                        <figure><img src={require('../assets/images/group3.jpg')} /></figure>
                                                        <p className="text-center tourTitle">EVENTS</p>
                                                    </div>
                                                    <span className="textContainer">
                                                        <p className="text-center">IEEE WIE envisions a vibrant<br /> community of IEEE women and men<br /> collectively using their diverse<br /> talents to innovate for<br /> the benefit of humanity.</p>
                                                        {/* <p className="text-justify"><b>Cost per person:</b> Rs. 22,900.00 nett. Per person on twin / triple sharing basis (minimum 12 pax).<br /> <b>Option:</b> Rs. 16,450.00 nett. Per person on twin / triple sharing basis without transport (from &amp; to Colombo). (Minimum 12 pax).</p> */}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="vision_container">
                                <div className="container">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h1 className="text-center titleDetails">JOIN US</h1>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icon_image_container">
                                                {/* <img src={require('../assets/images/contact.png')} className="img-fluid icon_image" /> */}
                                            </div>
                                            <br /><br /><br /><br />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center hover1 column">
                                                <img src={require('../assets/images/vision.png')} id="vision" className="img-responsive" />
                                                <h4>Our Vision</h4>
                                                <p className="paragraph">
                                                    <font color="gray">
                                                        Our vision is to recognize the outstanding achievements of women in electrical and electronics engineering through IEEE Awards nominations and advocate women in leadership roles in IEEE governance, and career advancement for women in the profession.
                                                    </font>
                                                </p>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center hover2 column">
                                                <img src={require('../assets/images/mission.png')} id="mission" className="img-responsive" />
                                                <h4>Our Vision</h4>
                                                <p className="paragraph">
                                                    <font color="gray">
                                                        Our goal is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
                                                    </font>
                                                </p>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Home;
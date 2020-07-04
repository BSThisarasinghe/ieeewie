import React, { Component } from "react";
import { Search } from 'react-bootstrap-icons';

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
                <div className="container-fluid" id="whole">
                    <div className="row" id="home">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="background_container">
                            <div id="background">
                            </div>
                            <div id="linkContainer">
                                {/* <div id="carouselExampleInterval" className="carousel slide slideShow" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-interval={10000}> */}
                                <div className="container" style={{ textAlign: 'left' }}>
                                    <p className="quote">IEEEWIE.LK</p>
                                </div>
                                {/* </div> */}
                                {/* <div className="carousel-item" data-interval={2000}>
                                            <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', height: '100px' }}>
                                                <p className="quote">EXCURSIONS/PACKAGE TOURS BANDARAWELA, ELLA &amp; UDAWALAWE</p>
                                            </div>
                                        </div> */}
                                {/* </div> */}
                                {/* <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a> */}
                                {/* </div> */}
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
                                            <p className="posted_date">MAY 6, 2020</p>
                                        </div>
                                        <div className="row">
                                            <p className="post_title">Hello world!</p>
                                        </div>
                                        <div className="row posted_discription_container">
                                            <p className="posted_discription">Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
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
                                                    <a href="">Hello world!</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row recent_comment_title_container">
                                            <p className="recent_comment_title">RECENT COMMENTS</p>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="recent_comment">
                                                    <a href="">A WordPress Commenter on Hello world!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="contact">
                                <div className="container">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h1 className="text-center titleDetails">CONTACT US</h1>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icon_image_container">
                                                <img src={require('../assets/images/contact.png')} className="img-fluid icon_image" />
                                            </div>
                                            <br /><br /><br /><br />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ marginBottom: '30px' }}>
                                                <section>
                                                    <h4 className="subtitle">
                                                        ALL PARTICIPANTS WILL BE ENTITLED TO THE FOLLOWING VERY SPECIAL DISCOUNTS.
                        </h4>
                                                    <ul>
                                                        <li>25% discount off all treatments at our well-equipped Ayurveda Center</li>
                                                        <li>25% discount off all beverages</li>
                                                        <li>15% discount off all A la Carte menu prices</li>
                                                    </ul>
                                                </section>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ marginBottom: '30px' }}>
                                                <section>
                                                    <p><i className="fa fa-phone" aria-hidden="true" />&nbsp;&nbsp;Chapman - 0777 825 473</p><br />
                                                    <p><i className="fa fa-phone" aria-hidden="true" />&nbsp;&nbsp;Rewatha - 0776 475 694</p><br />
                                                    <p><i className="fa fa-phone" aria-hidden="true" />&nbsp;&nbsp;Priyanji or John - 011-24 22 441</p><br />
                                                    <p><i className="fa fa-phone" aria-hidden="true" />&nbsp;&nbsp;Hotel - 057 - 22 22 407 / 057 - 22 22 377</p><br />
                                                    <p><i className="fa fa-envelope" aria-hidden="true" />&nbsp;&nbsp;orient.col@eureka.lk / orient.bwela@eureka.lk</p><br />
                                                    <p><i className="fa fa-globe" aria-hidden="true" />&nbsp;&nbsp;<a href="https://www.orienthotelsl.com/" id="website">Website</a></p><br />
                                                    <p><i className="fa fa-address-card" aria-hidden="true" />&nbsp;&nbsp;No. 12, Dharmapala Mawatha, Bandarawela</p><br />
                                                </section>
                                            </div>
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
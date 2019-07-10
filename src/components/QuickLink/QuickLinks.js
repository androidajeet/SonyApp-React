import React from 'react';
import './QuickLinks.css';
const quickLink = (props) => {
    return (
        <div id="quick_links" className="Section">
            <section id="footer" >
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-3">
                            <h5>Where To Buy</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#quick_links"><i ></i>See Authorized Retailers</a></li>

                            </ul>
                        </div>

                        <div className="col-3">
                            <h5>Sony Rewards</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#quick_links"><i ></i>Join Now</a></li>
                                <li><a href="#quick_links"><i ></i>Learn More</a></li>
                                <li><a href="#quick_links"><i ></i>Manage Account</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5>News and Info</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#quick_links"><i ></i>Press Releases</a></li>
                                <li><a href="#quick_links"><i ></i>About Sony</a></li>
                                <li><a href="#quick_links"><i ></i>Product Support</a></li>
                                <li><a href="#quick_links"><i ></i>Product Manuals</a></li>
                                <li><a href="#quick_links"><i ></i>Electronics Registration</a></li>
                                <li><a href="#quick_links"><i ></i>Electronics Newsletter</a></li>
                                <li><a href="#quick_links"><i ></i>Accessibility and Usability</a></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5> Other Sites</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#quick_links"><i ></i>Professional Products and Solutions</a></li>
                                <li><a href="#quick_links"><i ></i>PlayStation</a></li>
                                <li><a href="#quick_links"><i ></i>Sony Pictures</a></li>
                                <li><a href="#quick_links"><i ></i>Sony Music</a></li>
                                <li><a href="#quick_links"><i ></i>Sony Mobile</a></li>
                                <li><a href="#quick_links"><i ></i>Sony Crackle</a></li>
                                <li><a href="#quick_links"><i ></i>Sony Square NYC</a></li>
                                <li><a href="https://www.google.com" title="Design and developed by"><i></i>Imprint</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="quick_links"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="quick_links"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="quick_links"><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="quick_links"><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="quick_links" target="_blank"><i className="fa fa-envelope"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

};


export default quickLink;

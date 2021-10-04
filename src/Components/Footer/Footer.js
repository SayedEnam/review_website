import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faCoffee,
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Learning English</h1>

                                <p className="mt-4 ">
                                    <small>
                                        Knowing English increases your chances of getting a good job in a multinational company within your home country or for finding work abroad.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>©  All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>

                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">


                            <div className="icons-container d-flex text-center ">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>




    );
};

export default Footer;
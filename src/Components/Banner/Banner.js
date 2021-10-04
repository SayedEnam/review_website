import React from "react";
import Menubar from "../Menubar/Menubar";

import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <Menubar />
                    <div className="col-md-6">
                        <h1 className="title">
                            DEVELOP YOUR ENGLISH <br />SKILL <span className="font">BY OUR COURSE</span>
                        </h1>
                        <p className="text-white text-center mt-3">
                            Knowing English increases your chances of getting a good job in a multinational company within your home country or for finding work abroad. It's also the language of international communication, the media and the internet, so learning English is important for socialising and entertainment as well as work!
                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
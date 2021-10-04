import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from "../Menubar/Menubar";
import './About.css'
const About = () => {
    return (
        <div>


            <div className="banner-container  ">
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
            <div className="about-us container">
                <div>
                    <h1>THE BEST WAY TO<br /> LEARN ENGLISH FLUENTLY</h1>
                    <p>It is a fact that no matter what age one is, that learning a second language improves brain functionality. Every single brain changes with age, but case studies executed show results that people who know more than one language have a longer attention span and perform better on attention tests.
                        Many of the world’s prestigious
                        <br />
                        universities are situated in countries such as United States, England and Australia. To earn a position at one of these prestigious universities it is paramount to be able to read, write, and listen in English. Degree opportunities at these institutions will become available once you are at the advanced stage of the English language which in turn will likely improve your career.</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
            </div>
            <div className=" container ">
                <h1>WHY OUR STUDENTS ARE SATISFIED ON US!</h1>
            </div>
            <div class="row container about-container  ">
                <div class="col-sm-6">
                    <div class="card bg-secondary ">
                        <div class="card-body p-5  ">
                            <h5 class="card-title text-white"><span className="number">1.</span>Our Quick Results</h5>
                            <p class="card-text text-white">Cur nixus mori? Pol. Sunt hippotoxotaes convertam festus, brevis buboes. Brevis terror nunquam amors.</p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card bg-secondary">
                        <div class="card-body p-5  ">
                            <h5 class="card-title text-white"><span className="number">2.</span>Our Weekly Exam</h5>
                            <p class="card-text text-white">Indexs ortum! Classiss sunt solitudos de altus adgium. Castus, regius triticums superbe anhelare.</p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card bg-secondary">
                        <div class="card-body p-5">
                            <h5 class="card-title text-white"><span className="number">3.</span>Daily Support Session</h5>
                            <p class="card-text text-white">Lura, capio, et diatria. Mori recte ducunt ad alter plasmator. Experimentum sapienter ducunt ad audax.</p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card bg-secondary">
                        <div class="card-body p-5 ">
                            <h5 class="card-title text-white"><span className="number">4.</span>Best Teacher</h5>
                            <p class="card-text  text-white">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>
                </div>


            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;
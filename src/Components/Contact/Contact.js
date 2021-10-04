import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Menubar from '../Menubar/Menubar';
import './Contact.css'
const Contact = () => {
    return (
        <div>

            <Banner />
            <h1 className="mt-5">You Can Contact With Us</h1>
            <div class="background">
                <div class="container bg-dark">

                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span>CONTACT US</span>

                            </div>
                            <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" value="Learning English" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL" />
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="CONTACT NO" />
                                </div>
                                <div class="app-form-group message">
                                    <input class="app-form-control" placeholder="MESSAGE" />
                                </div>
                                <div class="app-form-group buttons">
                                    <button class="app-form-button">CANCEL</button>
                                    <button class="app-form-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>




    );
};

export default Contact;
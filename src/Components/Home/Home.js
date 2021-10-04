import React from 'react';
import Allcourses from '../AllCourses/Allcourses';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Allcourses />
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import "./About.css"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Hero2 from '../../components/Hero2';
import AboutContent from '../../components/aboutcontent';

const About = () => {
    return (
        <div>
        <Navbar/>
        <Hero2 heading="ABOUT." text="I am a FullStack Developer"/>
        <AboutContent/>
        <Footer/>
     
    </div>
    );
}

export default About;
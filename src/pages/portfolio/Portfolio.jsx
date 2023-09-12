import React from 'react';
import './Portfolio.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Hero2 from '../../components/Hero2';
import Work from '../../components/works';

const Portfolio = () => {
  
  return (
    <div>
    <Navbar/>
    <Hero2 heading="PROJECTS." text="some of my recent works"/>
    <Work/>
    <Footer/>

    </div>
  );
}

export default Portfolio;

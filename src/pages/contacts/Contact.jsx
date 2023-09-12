import React from "react";
import './Contact.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero2 from "../../components/Hero2";
import Form from "../../components/form";

const Contact = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Contact;


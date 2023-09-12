import React from 'react';
import "./Footer.css";
import {FaPhone, FaMailBulk} from "react-icons/fa";

const Footer = ()=> {
    return (
      <div className='footer'>
      <div className='phone'>
          <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/> 0742666378</h4>

      </div>

      <div className='email'>
          <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/> ann99wangui@gmail.com</h4>

      </div>
        <div className='foot'>
          <p>&copy; {new Date().getFullYear()} Ann Wangui. All rights reserved.</p> 
        </div>
        </div>
    );
}

export default Footer;
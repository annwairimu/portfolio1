import { Link } from "react-router-dom";
import "./aboutcontent.css"
import React from "react"

const AboutContent = () =>{
    return(
        <div className="about">
          <div className="left">
            <h1>About Me</h1>
            <p>I am a FullStack developer.I create responsive secure website using HTML, CSS, React, Ruby in Rails, Javascript and Nodejs.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
          </div> 
          <div className="right">
            <div className="img-cont">
               <div className="img-stack">
                <img src="https://media.istockphoto.com/id/1391198660/photo/hands-printing-on-laptop-banner.jpg?s=612x612&w=0&k=20&c=UxjP5WRLBRD2iRRgLI4lqzXSU0iDwSqq9ljnP36skoI=" className="img" alt=""/>
               </div> 
               <div className="img-sta">
                <img src="https://media.istockphoto.com/id/1202250586/photo/program-code-javascript-php-html-css-of-site-web-development-programmer-workflow-source-code.jpg?s=612x612&w=0&k=20&c=yCfbV8ZcluVrh7Fs8e1CqOfgQSLAyDVQwE06sqOYi4U=" className="img" alt=""/>
               </div> 
            </div>
          </div> 
        </div>
    )
}

export default AboutContent;
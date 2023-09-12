import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src="https://media.istockphoto.com/id/1407201397/photo/video-call-conference-online-meeting-virtual-people-business.jpg?s=1024x1024&w=is&k=20&c=TdtbcAnor7dZ_2dYQyFc5mq9Rl2yRCvp7iVgcrLH3I8=" alt="" className="Into-img" />
      </div>
      <div className="content">
          <h1 className="greeting">
            <span className="highlight">Hello!</span>
            <br />
            My Name is <span>Ann Wangui</span>
          </h1>
          <h4 className="subtitle">Fullstack Developer</h4>
          <div>
            <Link  to="/portfolio" className="btn">Portfolio</Link>
            <Link  to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  );
};

export default Hero;

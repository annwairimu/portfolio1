import "./workcard.css"
import React from "react"
// import { NavLink } from "react-router-dom"
import Card from "./workcard"
import ProjectCardData from "./workData"

const Work = () => {
    return (
        <div className="work-container">
        <h1 className="project-heading">PROJECTS</h1>
        <div className="project-container">
         {ProjectCardData.map((val, ind) =>{
            return(
              <Card key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              />  
            )
         })}   
        </div>

        </div>
    )
}

export default Work;
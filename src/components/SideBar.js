import React, { useState } from "react";

import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./SideBar.css";


const SideBar = (props) => {

  return (
      <>
        <div className="sidebar"></div>
        <nav className="side-menu active side-menu">
          <ul className="side-menu-items" >
            <h1 className="sideBar--title">Your Projects</h1>
            <div className="projects">
            {SideBarData.map((item, index) => {
                console.log('Started printing data');
                console.log('projectName : '+ props.currentProj);
              return (
                <li key={index} className={props.currentProj===item.title ? 'display' : item.cName}>
                  <Link to='#' onClick={()=>{props.action(item.title)}}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
            </div>
            <p className="signout">Sign Out Here</p>
          </ul>
        </nav>
    </> 
  );
};

export default SideBar;

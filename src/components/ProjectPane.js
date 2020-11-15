import React from "react";
import { SideBarData } from "./SideBarData";
import { Button } from "./Button";
import "./ProjectPane.css";

const ProjectPane = (props) => {
    return (
        <div className="whole-Project">
        {SideBarData.map((item, index) => {
            if (props.currentProj === null && SideBarData.map.length > 1) {
                props.action(item.title);
            }
            else if (item.title === props.currentProj) {
                console.log(item.title, 'and', props.currentProj)
                return (
                    <div className="project-container">
                        <h1 className="title">{props.currentProj}</h1>
                        <p className="descript">{item.description}</p>
                        <div className="steps">
                            {item.steps.map((step, ind) => {
                                return (
                                    <p className="step">
                                        {step} <br />
                                    </p>
                                );
                            })}
                        </div>
                        <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                        loc="#">
                            RUN THE PROJECT
                        </Button>
                        </div>
                );
            } else if(SideBarData.map.length === 0){
                return (
                    <div className="project-container">
                        <h1 className="title">You don't have any projects!</h1>
                        <p className="info">Get started by pressing the create new button on the left!</p>
                        </div>
                )
            }
        })}
        </div>
    );
};

export default ProjectPane;

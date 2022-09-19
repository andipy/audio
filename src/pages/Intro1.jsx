import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Tag from "../components/Tag";

import Img from "../assets/imgs/Img.png";
import Timer from "../assets/icons/timer.svg";
import Tool from "../assets/icons/tool.svg";

const Intro1 = () => {

    let navigate = useNavigate();

    const button = {
        label: "Next",
        style: "btn-primay-enabled anchored-bottom"
    }

    const tags = [
        {
            id: 1,
            icon: Tool,
            label: "audio"
        },
        {
            id: 2,
            icon: Timer,
            label: "6 min"
        },
    ]

    return (
        <div className="frame">
            <Navbar onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding padding-bottom">
                <h1 className="tool-title">Muscle Relaxation</h1>
                <img src={Img} className="cover-img" />
                <div>
                    {tags.map((tag)=> {
                        return (
                            <Tag
                                key= {tag.id}
                                icon={tag.icon}
                                label={tag.label}
                            />
                        )
                    })}
                </div>
                <p className="intro-text">This exercise helps you relax your muscles through breathing.</p>
                
            </div>
            <Button label={button.label} style={button.style} onClickFunc={() => navigate("/intro-2")} />            
        </div>
    )
}

export default Intro1;
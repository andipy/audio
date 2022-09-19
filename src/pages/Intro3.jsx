import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

import Img from "../assets/imgs/Time.png";

const Intro3 = () => {

    let navigate = useNavigate();

    const button = {
        label: "Get Started",
        style: "btn-primay-enabled anchored-bottom"
    }

    return (
        <div className="frame">
            <Navbar onClickFunc={() => navigate(-1)} />
            <div className="container nav-padding">
                <div>
                    <img src={Img} className="icon-img" />
                </div>                
                <p className="intro-text">It’s gonna take around 6 minutes to complete.</p>
                <Button label={button.label} style={button.style} onClickFunc={() => navigate("/exercise")} />
            </div>
            
        </div>
    )
}

export default Intro3;